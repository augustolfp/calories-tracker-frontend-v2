import { Routes, Route } from 'react-router-dom';
import DayPage from './pages/DayPage';
import DashBoard from './pages/DashBoard';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import RequireAuth from './contexts/RequireAuth';

function App() {
    return (
        <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route
                path="/dashboard"
                element={
                    <RequireAuth>
                        <DashBoard />
                    </RequireAuth>
                }
            />
            <Route
                path="/day/:id"
                element={
                    <RequireAuth>
                        <DayPage />
                    </RequireAuth>
                }
            />
        </Routes>
    );
}

export default App;
