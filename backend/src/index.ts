import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { connectDB } from './config/database';
import { swaggerSpec } from './config/swagger';

// Routes
import servicesRouter from './routes/services';
import projectsRouter from './routes/projects';
import blogRouter from './routes/blog';
import resourcesRouter from './routes/resources';
import domainsRouter from './routes/domains';
import aboutRouter from './routes/about';
import processRouter from './routes/process';
import contactRouter from './routes/contact';
import uploadRouter from './routes/upload';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'gadkalisa.dev API Documentation',
}));

// API Routes
app.use('/api/services', servicesRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/work', projectsRouter); // Alias for projects
app.use('/api/blog', blogRouter);
app.use('/api/resources', resourcesRouter);
app.use('/api/domains', domainsRouter);
app.use('/api/about', aboutRouter);
app.use('/api/process', processRouter);
app.use('/api/contact', contactRouter);
app.use('/api/upload', uploadRouter);

/**
 * @swagger
 * /:
 *   get:
 *     summary: API information and available endpoints
 *     tags: [General]
 *     responses:
 *       200:
 *         description: API information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: gadkalisa.dev API
 *                 status:
 *                   type: string
 *                   example: running
 *                 version:
 *                   type: string
 *                   example: 1.0.0
 *                 endpoints:
 *                   type: object
 */
// Root and health check
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'gadkalisa.dev API',
    status: 'running',
    version: '1.0.0',
    documentation: '/api-docs',
    endpoints: {
      services: '/api/services',
      projects: '/api/projects',
      work: '/api/work',
      blog: '/api/blog',
      resources: '/api/resources',
      domains: '/api/domains',
      about: '/api/about',
      process: '/api/process',
      contact: '/api/contact (POST)',
      upload: '/api/upload',
    }
  });
});

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     tags: [General]
 *     responses:
 *       200:
 *         description: Server is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
  });
});

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📡 API endpoints available at http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

