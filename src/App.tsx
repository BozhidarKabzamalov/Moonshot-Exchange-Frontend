import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18next.ts';
import './App.scss';

const App = () => {
    const { t } = useTranslation();

    const hehe = useCallback(async () => {
        const response = await axios.get('http://localhost:3000/cryptocurrency');

        console.log(response);
    }, []);

    useEffect(() => {
        hehe()
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return <p className="test">{t('initial_translation')}</p>;
};

export default App;
