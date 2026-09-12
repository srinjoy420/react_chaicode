import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import { Outlet,Routes,Router,Route } from 'react-router'
import Home from './components/Home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Github from './components/github/Github'
import User from './components/user/User'

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
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/github' element={<Github/>}/>
        <Route path='/user/:userId' element={<User/>}/>
       
      </Route>
     </Routes>
    </div>
  )
}

export default App