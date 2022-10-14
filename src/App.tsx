import { Routes, Route } from 'react-router-dom'
import DayPage from './pages/DayPage/DayPage'
import DashBoard from './pages/DashBoard/DashBoard'
import SignInPage from './pages/SignInPage/SignInPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import HomePage from './pages/HomePage/HomePage'

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/day/:id" element={<DayPage />} />
        </Routes>
    )
}

export default App
