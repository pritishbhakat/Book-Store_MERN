import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {CreateBook,EditBook,DeleteBook,Home,ShowBook} from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>

    </Routes>
  )
}

export default App