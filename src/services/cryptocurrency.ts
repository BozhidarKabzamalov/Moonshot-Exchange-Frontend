import axioxInstance from './axiosInstance';

export const getCryptocurrencies = async () => {
    try {
        const response = await axioxInstance.get('cryptocurrency');

        return response;
    } catch (error) {
        console.log(error);
    }
};
