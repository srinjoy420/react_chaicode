import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import { Outlet,Routes,Router,Route } from 'react-router'
import Home from './components/Home/Home'

const App = () => {
  function Layout(){
    return(
     <>
        <Header/>
      <main className="min-h-screen">
        <Outlet/>
      </main>
      <Footer/>
     </>
    )
  }
  return (
    <div>
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
       
      </Route>
     </Routes>
    </div>
  )
}

export default App