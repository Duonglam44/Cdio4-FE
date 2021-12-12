import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { Grid } from '@material-ui/core';
import { AiFillSafetyCertificate } from 'react-icons/ai';
const courseEnroll = [
  {
    id: 1,
    name: 'React Native',
    certificate: 1,
  },
  {
    id: 2,
    name: 'C#',
    certificate: 2,
  },
  {
    id: 3,
    name: 'C++',
    certificate: 1,
  },
  {
    id: 4,
    name: 'React JS',
    certificate: 1,
  },
  {
    id: 5,
    name: 'JavaScrip',
    certificate: 2,
  },
  {
    id: 6,
    name: 'Node JS',
    certificate: 1,
  },
];
const stateCourse = true;
const loadFull = () =>
  courseEnroll.map((value, key) => {
    return (
      <div className='content' key={key}>
        <p className='nameTitle'>Course</p>
        <div className='nameCourse'>{value.name}</div>
      </div>
    );
  });
const loadDemo = () =>
  courseEnroll.map((value, key) => {
    // eslint-disable-next-line
    /* if (value.id === 1 || value.id === 2 || value.id === 3) {
      return (
        <div className='content'>
          <p className='nameTitle'>Course</p>
          <div className='nameCourse'>{value.name}</div>
        </div>
      );
    } */
  });
const loadCourse = () => {
  // if (stateCourse === true){
  //   return loadDemo();
  // }else{
  return loadFull();
  // }
};
export const Courses: React.FC = () => {
  return (
    <Grid container className='learner'>
      <Grid item sm={4} className='profile'>
        <div className='content'>
          <div className='avatar'>
            <img src='../../assets/images/chienpro.png' alt='avatar' />
            <div className='fullName'>Dang Xuan Chien </div>
          </div>
          <div className='info'>
            <ul>
              <li>Việt Nam</li>
              <li>Last active 4 days ago</li>
              <li>Joined Mar 20, 2021 </li>
            </ul>
          </div>
          <button className='btnEditInfo'>
            <FaPencilAlt className='iconPen' />
            <p> Edit your profile</p>
          </button>
        </div>
      </Grid>

      <Grid item sm={8} className='course'>
        <div className='enroll'>
          <div className='title'>Course Enrolled</div>
          {loadCourse()}
          <button className='btnShow'>Show all</button>
        </div>
        <div className='enroll certificate'>
          <div className='title'>Course Enrolled</div>
          {courseEnroll.map((value, key) => {
            // eslint-disable-next-line
            /* if (value.certificate === 2) {
              return (
                <div className='content' key={key}>
                  <AiFillSafetyCertificate className='iconCertifi' />
                  <div className='contentCertifi'>
                    <p className='nameTitle'>Course</p>
                    <div className='nameCourse'>{value.name}</div>
                  </div>
                  <button className='btnCertifi'>Certificate</button>
                </div>
              );
            } */
          })}
          <button className='btnShow'>Show all</button>
        </div>
      </Grid>
    </Grid>
  );
};
