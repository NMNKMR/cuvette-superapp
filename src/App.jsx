import { Route, Routes } from 'react-router-dom';
import {Register, Genre, Home, Browse} from './pages/p.index';
import {AuthCheck} from './components/c.index'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <AuthCheck authentication>
            {" "}
            <Home />
          </AuthCheck>} 
        />
        <Route path='/browse' element={
          <AuthCheck authentication>
            {" "}
            <Browse />
          </AuthCheck>} 
        />
        <Route path='/register' element={
          <AuthCheck authentication={false}>
            {" "}
            <Register />
          </AuthCheck>} 
        />
        <Route path='/category' element={
          <AuthCheck authentication>
            {" "}
            <Genre />
          </AuthCheck>} 
        />
      </Routes>
    </>
  )
}

export default App
