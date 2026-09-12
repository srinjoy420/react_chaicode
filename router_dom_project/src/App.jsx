import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router'
import Home from './components/Home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Github from './components/github/Github'
import { giHubLoader } from './components/github/githubLoader'
import User from './components/user/User'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route loader={giHubLoader} path='github' element={<Github />} />
      <Route path='user/:userId' element={<User />} />
    </Route>,
  ),
)

function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

const App = () => {
  return <RouterProvider router={router} />
}

export default App