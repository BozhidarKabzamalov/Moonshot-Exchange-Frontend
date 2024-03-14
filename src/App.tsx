import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import './i18next.ts';
import './App.scss';
import Header from './components/Header.tsx';

const App = () => {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    );
};

export default App;
