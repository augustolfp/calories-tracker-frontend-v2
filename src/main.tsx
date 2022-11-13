import '@fontsource/montserrat';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './assets/styles/theme';
import NavBar from './components/Navbar';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <ChakraProvider theme={theme}>
                        <NavBar />
                        <App />
                    </ChakraProvider>
                </QueryClientProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
