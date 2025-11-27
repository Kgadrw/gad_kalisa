import { Router, Request, Response } from 'express';
import { resources } from '../data';

const router = Router();

/**
 * @swagger
 * /api/resources:
 *   get:
 *     summary: Get all resources/guides
 *     tags: [Resources]
 *     responses:
 *       200:
 *         description: List of all resources
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Resource'
 */
router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: resources,
  });
});

export default router;

