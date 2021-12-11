import React from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
export const KeepUpToUpdate = () => {
  return (
    <div className='keep-up'>
      <Grid container spacing={3} justifyContent='center'>
        <Grid container spacing={3}>
          <Grid item lg={1.5} />
          <Grid item lg>
            <h2 className='keep-up__header'>keep up to date</h2>
            <p className='keep-up__ads'>
              Discover more about
              <br />
              GuruAcademy
            </p>
          </Grid>
        </Grid>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item lg={2.5} key={index} >
            <Card className='keep-up__card py-3'>
              <div
                className='position-relative overflow-hidden'
                style={{ borderRadius: '10px' }}
              >
                <Link href=''>
                  <Card.Img
                    src='../../assets/images/errorCourse.png'
                    className='keep-up__card-img'
                  />
                </Link>
              </div>
              <Card.Body className='keep-up__card-body px-3'>
                <Card.Title className='keep-up__card-title'>
                  Clound every thing around me
                </Card.Title>
                <Card.Text className='keep-up__card-text'>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
