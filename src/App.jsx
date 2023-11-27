import { Route, Routes } from 'react-router-dom';
import {Register, Genre, Home} from './pages/p.index';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/category' element={<Genre/>}/>
      </Routes>
    </>
  )
}

export default App
