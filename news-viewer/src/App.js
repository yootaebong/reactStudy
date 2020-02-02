import React, { useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './component/NewsList';
import Categories from './component/Categories';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//          '',
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

// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback(category => setCategory(category), []);

//   return (
//     <>
//       <Categoris category={category} onSelect={onSelect} />
//       <NewsList category={category} />
//     </>
//   );
// };

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};
export default App;
