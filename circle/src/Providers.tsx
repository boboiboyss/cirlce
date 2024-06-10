import { ReactNode } from "react";
import {ChakraProvider} from '@chakra-ui/react'
import {Provider as ProviderRedux} from 'react-redux'
import { store } from './redux/store/store.ts'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

export default function Providers ({children} : {children : ReactNode}) {
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}> 
          <ProviderRedux store={store}>
            <ChakraProvider>  
                {children}
            </ChakraProvider>
          </ProviderRedux> 
         <ReactQueryDevtools initialIsOpen ={true} />
        </QueryClientProvider>

    )
}