import { Router, Request, Response } from 'express';
import { blogPosts } from '../data';

const router = Router();

/**
 * @swagger
 * /api/blog:
 *   get:
 *     summary: Get all blog posts
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: List of all blog posts
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
 *                     $ref: '#/components/schemas/BlogPost'
 */
router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: blogPosts,
  });
});

/**
 * @swagger
 * /api/blog/{id}:
 *   get:
 *     summary: Get a single blog post by ID
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Blog post ID
 *         example: 1
 *     responses:
 *       200:
 *         description: Blog post details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/BlogPost'
 *       404:
 *         description: Blog post not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: 'Blog post not found',
    });
  }

  res.json({
    success: true,
    data: post,
  });
});

export default router;

