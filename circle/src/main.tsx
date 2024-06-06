import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider as ProviderRedux} from 'react-redux'
import { store } from './redux/store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ProviderRedux store={store}>
      <Router>
        <App />
      </Router>
      </ProviderRedux>
    </ChakraProvider>
  </React.StrictMode>
  ,
)
