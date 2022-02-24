import React, { useState } from 'react';
import axios from 'axios';

const Email = () => {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState('');

  const handleSend = async () => {
    setSent(true);
    try {
      await axios.post('http://localhost:8080/send_mail', {
        text,
      });
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div>
      <h1>EMAIL YO!</h1>
      {!sent ? (
        <form onSubmit={handleSend}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="subimt">Send Email</button>
        </form>
      ) : (
        <h3>Email Sent!</h3>
      )}
    </div>
  );
};

export default Email;
