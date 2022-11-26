import SignInPage from '../pages/SignInPage';
import { useAuth } from '../hooks/useAuth';

export default function RequireAuth({ children }: { children: JSX.Element }) {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return <SignInPage />;
    }

    return children;
}
