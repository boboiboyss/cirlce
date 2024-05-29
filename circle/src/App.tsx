import DetailPostPage from './pages/DetailPostPage'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail-post/:id' element = {<DetailPostPage />} />
      <Route path='/sign-in' element = {<SignIn />} />
      <Route path='/sign-up' element = {<SignUp />} />

      {/* <Route path='/coba' element = {<Coba />} /> */}

    </Routes>
    </>
  )
}

export default App
