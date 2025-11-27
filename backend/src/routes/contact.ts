import { Router, Request, Response } from 'express';
import { ContactForm } from '../types';

const router = Router();

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Submit contact form
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContactForm'
 *           example:
 *             name: John Doe
 *             email: john@example.com
 *             project: website
 *             message: I need a new website for my business.
 *     responses:
 *       201:
 *         description: Contact form submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Thank you for your message! I'll get back to you within 24-48 hours.
 *                 data:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     project:
 *                       type: string
 *                     submittedAt:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', (req: Request, res: Response) => {
  const { name, email, project, message }: ContactForm = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required',
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email address',
    });
  }

  // Here you would typically:
  // 1. Save to database
  // 2. Send email notification
  // 3. Add to CRM system
  
  // For now, just return success
  console.log('Contact form submission:', { name, email, project, message });

  res.status(201).json({
    success: true,
    message: 'Thank you for your message! I\'ll get back to you within 24-48 hours.',
    data: {
      name,
      email,
      project,
      submittedAt: new Date().toISOString(),
    },
  });
});

export default router;

