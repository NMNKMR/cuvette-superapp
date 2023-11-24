import { Route, Routes } from 'react-router-dom';
import {Register, SelectCategory} from './pages/p.index';

function App() {

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/category' element={<SelectCategory/>}/>
      </Routes>
    </>
  )
}

export default App
