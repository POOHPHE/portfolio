import { Route, Routes } from 'react-router-dom'
import RootPage from './modules/RootPage'
import NotFoundPage from './modules/NotFoundPage'
import CatniPage from './modules/CatniPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<RootPage/>}/>
      <Route path="/catni" element={<CatniPage/>}/>
      <Route path="/*" element={<RootPage/>}/>
    </Routes>
  );
}

export default App;
