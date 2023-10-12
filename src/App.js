import { Route, Routes } from 'react-router-dom'
import RootPage from './modules/RootPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootPage/>}/>
      <Route path="/*" element={<RootPage/>}/>
    </Routes>
  );
}

export default App;
