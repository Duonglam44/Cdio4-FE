import React from 'react';
const Stream: React.FC = () => {
  return (
    <div className='stream'>
      {/* menu stream */}
      <div className='stream-navigator'>
        <div className='stream-navigator__logo'>Image</div>

        <div className='stream-navigator__logo-navigators'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>

        <div className='stream-navigator__profile'>image profile</div>
      </div>
      {/* video call */}
      <div className='stream-main__stream'>
        {/* navigator in main stream */}
        <div className='stream-main__stream-title'>
          <button>back</button>
          <span className='stream-main__stream-name--room-id'>123</span>
          <button>class x</button>
        </div>

        <div className='stream-main__info-stream'>
          <div className='stream-main__record-time'>
            <button>record</button>
            <span>Record 00:25:36</span>
          </div>
          <div className='stream-main__participate'>
            <button>invite people</button>
          </div>
        </div>

        {/* stream */}
        <div className='stream-main__video-call'>
          <div className='stream-main__author-stream'>author stream</div>
          <div className='button-option'>
            <div className='stream-chat--volume'>volume</div>
            <div className='stream-chat__button-option'>
              <button>Mic</button>
              <button>Cam</button>
              <button>Display</button>
              <button>Screen</button>
            </div>
            <div className='stream-chat--button-leave'>Leave</div>
          </div>
        </div>
      </div>
      {/* chat container */}
      <div className='stream-chat__container'>
        <div className='steam-chat__container--button'>
          <button>Message</button>
          <button>Participate</button>
        </div>

        <div className='stream-chat__show-message'>
          <div className='stream-chat__show-message'>
            <div className='stream-chat--show-logo'>Logo</div>
            <div className='stream-chat--show-message'>
              <span className='stream-chat__name'>David</span>
              <div className='stream-chat__mess-container'>
                <span>Hello</span>
              </div>
            </div>
          </div>
        </div>

        <div className='stream-chat__sent-message'>
          <input type='text' />
          <button>sent</button>
        </div>
      </div>
    </div>
  );
};
export default Stream;
