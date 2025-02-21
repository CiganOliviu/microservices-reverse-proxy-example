import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.API_URL as string;

type ApiResponse = {
    id: string;
    name: string;
    data: {
        [key: string]: string | number | undefined;
    } | null;
};

class ApiService {
    async fetchData(): Promise<ApiResponse[]> {
        try {
            const response = await axios.get<ApiResponse[]>(API_URL);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error fetching data:', error.message);
            } else {
                console.error('Unexpected error fetching data:', error);
            }
            throw error;
        }
    }
}

export default new ApiService();