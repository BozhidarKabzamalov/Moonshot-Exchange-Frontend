import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getCryptocurrencies } from '../services/cryptocurrency';

const Cryptocurrencies = () => {
    const { t } = useTranslation();

    const hehe = useCallback(async () => {
        const response = await getCryptocurrencies();

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

    return <p>Hehe</p>;
};

export default Cryptocurrencies;
