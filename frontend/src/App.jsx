import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Map from './pages/Map';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/map" element={<Map />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
