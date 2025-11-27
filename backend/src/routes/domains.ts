import { Router, Request, Response } from 'express';
import { domainExtensions, domainFeatures } from '../data';

const router = Router();

/**
 * @swagger
 * /api/domains/extensions:
 *   get:
 *     summary: Get all domain extensions with pricing
 *     tags: [Domains]
 *     responses:
 *       200:
 *         description: List of domain extensions
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
 *                       extension:
 *                         type: string
 *                         example: .com
 *                       price:
 *                         type: string
 *                         example: $12.99/yr
 *                       color:
 *                         type: string
 *                         example: text-blue-600
 *                       featured:
 *                         type: boolean
 */
router.get('/extensions', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: domainExtensions,
  });
});

/**
 * @swagger
 * /api/domains/features:
 *   get:
 *     summary: Get all domain features
 *     tags: [Domains]
 *     responses:
 *       200:
 *         description: List of domain features
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
 *                         example: Easy domain management
 *                       bgColor:
 *                         type: string
 *                         example: bg-blue-500
 *                       buttonText:
 *                         type: string
 *                         example: More
 *                       image:
 *                         type: string
 *                         example: /domain.avif
 */
router.get('/features', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: domainFeatures,
  });
});

/**
 * @swagger
 * /api/domains:
 *   get:
 *     summary: Get all domain data (extensions and features)
 *     tags: [Domains]
 *     responses:
 *       200:
 *         description: Complete domain data
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
 *                     extensions:
 *                       type: array
 *                     features:
 *                       type: array
 */
router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      extensions: domainExtensions,
      features: domainFeatures,
    },
  });
});

export default router;

