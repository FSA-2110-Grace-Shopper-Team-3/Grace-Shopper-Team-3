import React from 'react';
import SendIcon from '@material-ui/icons/Send';

const NewsLetter = () => {
  return (
    <div className="nl">
      <h1>NEWSLETTER</h1>
      <div className="nl-desc">
        Stay up to date with UNPLGD! Sign up now for our newsletter and latest
        offers by entering your email.
      </div>
      <div className="nl-input-wrap">
        {' '}
        <input className="nl-input" placeholder="Email Address" />
        <div className="nl-button">
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
