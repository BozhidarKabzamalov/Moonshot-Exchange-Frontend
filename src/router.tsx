import { createBrowserRouter } from 'react-router-dom';
import Cryptocurrencies from './views/Cryptocurrencies';
import Error from './views/Error';
import Cryptocurrency from './views/Cryptocurrency';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Cryptocurrencies />,
        errorElement: <Error />,
    },
    {
        path: 'cryptocurrency/:currencyName',
        element: <Cryptocurrency />,
    },
]);

export default router;
