import { Router, Request, Response } from 'express';
import { aboutInfo } from '../data';

const router = Router();

/**
 * @swagger
 * /api/about:
 *   get:
 *     summary: Get about page information
 *     tags: [About]
 *     responses:
 *       200:
 *         description: About page content
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: About
 *                     subtitle:
 *                       type: string
 *                       example: Freelance web developer & domain dealer
 *                     content:
 *                       type: array
 *                       items:
 *                         type: string
 *                     beliefs:
 *                       type: array
 *                       items:
 *                         type: string
 */
router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: aboutInfo,
  });
});

export default router;

