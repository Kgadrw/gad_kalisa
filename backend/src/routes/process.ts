import { Router, Request, Response } from 'express';
import { processSteps } from '../data';

const router = Router();

/**
 * @swagger
 * /api/process:
 *   get:
 *     summary: Get process steps (HTML, CSS, JavaScript)
 *     tags: [Process]
 *     responses:
 *       200:
 *         description: List of process steps
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
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         example: HTML
 *                       description:
 *                         type: string
 *                         example: HTML is the document layer of the web, providing structure and semantics for pages.
 *                       link:
 *                         type: string
 *                         example: Learn more
 *                       icon:
 *                         type: string
 *                         example: html
 *                       bgColor:
 *                         type: string
 *                         example: bg-blue-50
 */
router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: processSteps,
  });
});

export default router;

