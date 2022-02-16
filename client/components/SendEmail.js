// import React, { useState } from 'react';
// import axios from 'axios';

// export const SendEmail = () => {
//   const [sent, setSent] = useState(false);
//   const [text, setText] = useState('');

//   const handleSend = async () => {
//     setSent(true);
//     try {
//       await axios.post('http://localhost:8080/api/send-mail', { text });
//     } catch (er) {
//       console.log(er);
//     }
//   };

//   return (
//     <div>
//       {!sent ? (
//         <form onSubmit={handleSend}>
//           <input
//             type="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//           <button type="submit">Send Email!</button>
//         </form>
//       ) : (
//         <h1>Email Sent</h1>
//       )}
//     </div>
//   );
// };
