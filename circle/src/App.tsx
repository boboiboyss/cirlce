import DetailPostPage from '@/pages/DetailPostPage'
import Home from '@/pages/Home'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import SignIn from '@/pages/auth/SignIn'
import SignUp from '@/pages/auth/SignUp'
import { api } from './libs/api'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store/store'
import { SET_USER } from './redux/slices/AuthSlices'

function App() {
  const [isLoading, setisLoading] = useState<boolean>(true)
  const dispatch = useDispatch()
  const currentUser = useSelector((state: RootState) => state.auth.user);

  const PrivateRoute = () => {
    // if(isLoading) {
      if(currentUser.email) return <Outlet />;
      return <Navigate to={"/auth/login"} />
    // }
  }

  async function AuthCheck() {
    try {
      const token = localStorage.token;
      const response = await api.post('/auth/check', {}, {
        headers: {
          Authorization : `Bearer ${token}`,
        }
      });
      dispatch(SET_USER(response.data));
      setisLoading(false);
    } catch (error) {
      localStorage.removeItem("token");
      setisLoading(false);
    }
  }

  useEffect(() => {
    const token = localStorage.token;
    if(token) AuthCheck();
  
  }, []);

  return (
    <>
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
      </Route>

      <Route path='/post/:id' element = {<DetailPostPage />} />
      <Route path='/auth/login' element = {<SignIn />} />
      <Route path='/auth/register' element = {<SignUp />} />
    </Routes>
    </>
  )
}

export default App
