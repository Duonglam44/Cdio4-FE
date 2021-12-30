import React from 'react';
import { FormButton as Button } from '../../../components/Form-Button';

import { Fragment } from 'hoist-non-react-statics/node_modules/@types/react';
const streamForm: React.FC = () => {
  return (
    <Fragment>
      <div className='stream-container'>
        <div className='stream-container__nav'>
          <div>
            <Button>Logo</Button>
            {'main logo'}
            <Button></Button>
            {'Home'}
            <Button></Button>
            {'Stream'}
            <Button></Button>
            {'Notify'}
            <Button></Button>
            {'Mess'}
            <Button></Button>
            {'Participate'}
          </div>
        </div>
        <div className='stream-container__main__stream'>
          <div></div>
        </div>
        <div className='stream-container__chat-box'>
          <div></div>
        </div>
      </div>
    </Fragment>
  );
};

export default streamForm;
