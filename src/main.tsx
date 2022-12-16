import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/900.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider, Container } from '@chakra-ui/react';
import theme from './assets/themes';
import NavBar from './components/Navbar';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <ChakraProvider theme={theme}>
                        <Container centerContent variant="centerVariant">
                            <NavBar />
                            <App />
                        </Container>
                    </ChakraProvider>
                </QueryClientProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
