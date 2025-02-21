import { Router, Request, Response } from 'express';
import apiService from './apiService';

const router = Router();

router.get('/data', async (req: Request, res: Response) => {
    try {
        const data = await apiService.fetchData();
        res.json(data);
    } catch (error) {
        const err = error as Error;
        console.error('Error fetching data:', err);
        res.status(500).json({ error: err.message || 'Failed to fetch data' });
    }
});

export default router;