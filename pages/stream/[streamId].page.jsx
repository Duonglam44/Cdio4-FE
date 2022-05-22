import { useState, useRef } from 'react'
import io from 'socket.io-client'
import { silence, black } from '../../helpers/BlackAndSilence'
import { peerConnectionConfig } from '../../configs/socket'
import { FormButton } from '../../components/Form-Button'

let mic = false
let vid = false
let connections = {}
let socketId = ''
let socket = null
let outSideMessageList = []
let outSideUnreadMessage = 0
function Stream() {
  const [isConnect, setConnect] = useState()
  const [isShareScreen, setShareScreen] = useState()
  const [messageList1, setMessageList1] = useState([])
  const [showListNumber, setShowListNumber] = useState(1)
  const [unReadMessage, setUnReadMessage] = useState()
  const inputMessageRef = useRef()
  const videoRef = useRef()

  const getPermissions = async () => {
    await navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => (vid = true))
      .catch(() => (vid = false))
    await navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(() => (mic = true))
      .catch(() => (mic = false))

    if (!vid && !mic) return
    navigator.mediaDevices
      .getUserMedia({
        video: vid,
        audio: mic,
      })
      .then((stream) => {
        window.localStream = stream
        videoRef.current.srcObject = stream
      })
  }

  const getUserMedia = () => {
    if (mic || vid) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(getUserMediaSuccess)
    } else {
      try {
        let tracks = videoRef.current.srcObject.getTracks()
        tracks.forEach((track) => track.stop())
      } catch (e) {}
    }
  }

  const getUserMediaSuccess = (stream) => {
    try {
      window.localStream.getTracks().forEach((track) => track.stop())
    } catch (e) {}

    window.localStream = stream
    videoRef.current.srcObject = stream

    for (let id in connections) {
      if (id === socketId) continue

      connections[id].addStream(window.localStream)

      connections[id].createOffer().then((description) => {
        connections[id]
          .setLocalDescription(description)
          .then(() => {
            socket.emit(
              'signal',
              id,
              JSON.stringify({ sdp: connections[id].localDescription })
            )
          })
          .catch((e) => {})
      })
    }
  }

  const gotMessageFromServer = (fromId, message) => {
    if (fromId === socket.id) return
    var signal = JSON.parse(message)
    if (signal.sdp) {
      connections[fromId]
        .setRemoteDescription(new RTCSessionDescription(signal.sdp))
        .then(() => {
          if (signal.sdp.type === 'offer') {
            connections[fromId].createAnswer().then((description) => {
              connections[fromId].setLocalDescription(description).then(() => {
                socket.emit(
                  'signal',
                  fromId,
                  JSON.stringify({
                    sdp: connections[fromId].localDescription,
                  })
                )
              })
            })
          }
        })
    }

    if (signal.ice) {
      connections[fromId].addIceCandidate(new RTCIceCandidate(signal.ice))
    }
  }

  const onAddMessage = (message, user, senderId) => {
    let tempMessageList = [
      ...outSideMessageList,
      {
        user,
        message,
        senderId,
      },
    ]
    setMessageList1(tempMessageList)
    outSideMessageList = tempMessageList
    if (senderId === socketId) return
    outSideUnreadMessage++
    setUnReadMessage(outSideUnreadMessage)
  }

  const onSendMessage = () => {
    socket.emit(
      'chat-message',
      inputMessageRef.current.value,
      'Duong lam',
      window.location.href,
      socketId
    )
    inputMessageRef.current.value = ''
  }

  const connectSocket = () => {
    socket = io.connect('https://tony-webrtc-server.herokuapp.com', {
      secure: true,
    })

    socket.on('signal', gotMessageFromServer)

    socket.on('connect', () => {
      socket.on('chat-message', onAddMessage)
      socket.emit('join-call', window.location.href)
      socketId = socket.id

      socket.on('user-left', (id) => {
        let video = document.querySelector(`[data-socket="${id}"]`)
        if (video !== null) {
          video.parentNode.remove()
        }
      })

      socket.on('user-joined', (id, clients) => {
        Object.keys(clients).forEach((clientId) => {
          connections[clientId] = new RTCPeerConnection(peerConnectionConfig)

          connections[clientId].onicecandidate = (event) => {
            if (event.candidate != null) {
              socket.emit(
                'signal',
                clientId,
                JSON.stringify({ ice: event.candidate })
              )
            }
          }

          connections[clientId].onaddstream = (event) => {
            const searchVid = document?.querySelector(
              `[data-socket="${clientId}"]`
            )
            if (searchVid !== null) {
              searchVid.srcObject = event.stream

              return
            }
            let app = document.getElementById('streamList')
            let video = document.createElement('video')
            let videoWrap = document.createElement('div')
            videoWrap.classList.add('streamItem')

            video.classList.add('streamVideo')
            video.setAttribute('data-socket', clientId)
            video.srcObject = event.stream
            video.autoplay = true
            video.playsinline = true
            videoWrap.appendChild(video)

            app.appendChild(videoWrap)
          }

          if (window.localStream !== undefined && window.localStream !== null) {
            connections[clientId].addStream(window.localStream)
            return
          }
          let blackSilence = (...args) =>
            new MediaStream([black(...args), silence()])
          window.localStream = blackSilence()
          connections[clientId].addStream(window.localStream)
        })

        if (id === socket.id) {
          for (let id2 in connections) {
            if (id2 === socket.id) continue

            try {
              connections[id2].addStream(window.localStream)
            } catch (e) {}

            connections[id2].createOffer().then((description) => {
              connections[id2].setLocalDescription(description).then(() => {
                socket.emit(
                  'signal',
                  id2,
                  JSON.stringify({ sdp: connections[id2].localDescription })
                )
              })
            })
          }
        }
      })
    })
  }

  const getDisplayMedia = () => {
    if (isShareScreen) {
      if (navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices
          .getDisplayMedia({ video: true, audio: true })
          .then(getDisplayMediaSuccess)
      }
    }
  }

  const getDisplayMediaSuccess = (stream) => {
    window.localStream.getTracks().forEach((track) => track.stop())

    window.localStream = stream
    videoRef.current.srcObject = stream

    for (let id in connections) {
      if (id === socketId) continue

      connections[id].addStream(window.localStream)

      connections[id].createOffer().then((description) => {
        connections[id].setLocalDescription(description).then(() => {
          socket.emit(
            'signal',
            id,
            JSON.stringify({ sdp: connections[id].localDescription })
          )
        })
      })
    }

    stream.getTracks().forEach(
      (track) =>
        (track.onended = () => {
          setShareScreen(false)

          try {
            let tracks = videoRef.current.srcObject.getTracks()
            tracks.forEach((track) => track.stop())
          } catch (e) {}

          let blackSilence = (...args) =>
            new MediaStream([black(...args), silence()])
          window.localStream = blackSilence()
          videoRef.current.srcObject = window.localStream

          getUserMedia()
        })
    )
  }

  return (
    <div className='streamPage'>
      {!isConnect && (
        <FormButton
          onClick={async () => {
            document.querySelector('.footer').style.display = 'none'
            document.querySelector('.header').style.display = 'none'
            await getPermissions()
            await connectSocket()
            setConnect(true)
          }}
        >
          Connect
        </FormButton>
      )}
      <div className={`largeStream ${isConnect ? '' : 'hide'}`}>
        <video
          id='my-video'
          ref={videoRef}
          autoPlay
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className='streamControl'>
          <div className='cs-icon'>
            <span className='icon-phone' />
          </div>
          <div
            className='cs-icon'
            onClick={() => {
              setShareScreen(true)
              getDisplayMedia()
            }}
          >
            <span className='icon-upload' />
          </div>
          <div
            className={`cs-icon message-icon ${
              showListNumber === 2 ? 'active' : ''
            }`}
            onClick={() => {
              setShowListNumber(2)
              outSideUnreadMessage = 0
              setUnReadMessage(0)
            }}
          >
            <span className='icon-bubbles' />
            {!!unReadMessage && (
              <span className='message-badge'>{unReadMessage}</span>
            )}
          </div>
          <div
            className={`cs-icon ${showListNumber === 1 ? 'active' : ''}`}
            onClick={() => {
              setShowListNumber(1)
            }}
          >
            <span className='icon-users' />
          </div>
        </div>
      </div>
      <div
        className={`streamList ${showListNumber === 1 ? 'show' : 'hide'} ${
          isConnect ? '' : 'hide'
        }`}
        id='streamList'
      />
      <div
        className={`streamList chat ${showListNumber === 2 ? 'show' : 'hide'} ${
          isConnect ? '' : 'hide'
        }`}
        id='chatList'
      >
        <div className='chat-list'>
          {messageList1?.map((message) => (
            <div
              className={`${
                message.senderId === socket.id ? 'chat-message--me' : ''
              } chat-message`}
              key={message.senderId}
            >
              <h4>{message.user}</h4>
              <p>{message.message}</p>
            </div>
          ))}
        </div>
        <div
          className='chat-box_wrap'
          onKeyDown={(e) => {
            if (e.keyCode !== 13) return
            onSendMessage()
          }}
        >
          <textarea
            ref={inputMessageRef}
            onFocus={() => {
              outSideUnreadMessage = 0
              setUnReadMessage(0)
            }}
            rows='2'
            className='chat-box'
          />
          <span className='icon-send cs-icon' onClick={onSendMessage} />
        </div>
      </div>
    </div>
  )
}

export default Stream
