import DetailPostPage from '@/pages/DetailPostPage'
import Home from '@/pages/Home'
import SignIn from '@/pages/auth/SignIn'
import SignUp from '@/pages/auth/SignUp'
import { Box, Text, useToast } from '@chakra-ui/react'
// import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { api } from './libs/api'
import SearchPage from './pages/Search'
import { SET_USER } from './redux/slices/AuthSlices'
// import { RootState } from './redux/store/store'
import ProfilePage from './pages/ProfilePage'
import { useQuery } from '@tanstack/react-query'
// import RootLayout from './layout/RootLayout'

function App() {
  // const [isLoading, setisLoading] = useState<boolean>(true)
  const dispatch = useDispatch()
  // const currentUser = useSelector((state: RootState) => state.auth.user);
  const toast = useToast()

  const {data: authUser, isPending} = useQuery({
    queryKey: ["authUser"],
    queryFn: AuthCheck
  })

  // const PrivateRoute = () => {
  //   if(!isLoading) {
  //     if(currentUser.email) return <Outlet />;
  //     return <Navigate to={"/auth/login"} />
  //   }
  // }

  async function AuthCheck() {
    const token = localStorage.token;
    if(token) {
    try {
      const response = await api.post('/auth/check', {}, {
        headers: {
          Authorization : `Bearer ${token}`,
        }
      });
      dispatch(SET_USER(response.data));
      return response.data
      // setisLoading(false);
    } catch (error) {
      localStorage.removeItem("token");
      // setisLoading(false);
      toast({
        title : 'User not authenticated',
        status : 'error',
        duration : 3000,
        isClosable : true
      });
    }
  }
}

  // useEffect(() => {
  //   const token = localStorage.token;
  //   if(token) AuthCheck();
  
  // }, []);

  if(isPending) 
      return (
        <Box>
            <Text>Loading...</Text>
        </Box>
    )

  return (
    <>
    <Routes>
      {/* <Route element={<PrivateRoute />}> */}
        
      <Route 
        path='/auth/register' 
        element = {
          !authUser? <SignUp /> : <Navigate to={'/'} />
        } 
      />
      
      <Route 
        path='/auth/login' 
        element = {
          !authUser? <SignIn /> : <Navigate to={'/'} />
        } 
      />

        <Route 
          path='/' 
          element={
            authUser ? <Home /> : <Navigate to={"/auth/login"} replace/>
          } 
        />

        <Route 
          path='/search' 
          element={
            authUser ? <SearchPage /> : <Navigate to={"/auth/login"} replace/>
          } 
        />

        <Route 
          path='profile' 
          element={
            authUser? <ProfilePage /> : <Navigate to={"/auth/login"} replace/>
          } 
        />
      {/* </Route> */}

      <Route path='/post/:id' element = {<DetailPostPage />} />

    </Routes>
    </>
  )
}

export default App
