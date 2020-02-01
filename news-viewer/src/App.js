import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './component/NewsList';

// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&category=technology&apiKey=9a8b41d6457e44debd42d8b8f98cada4',
//       );
//       setData(response);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>load Data</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         />
//       )}
//     </div>
//   );
// };

const App = () => {
  return <NewsList />;
};

export default App;
