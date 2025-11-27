import swaggerJsdoc from 'swagger-jsdoc';
import { SwaggerDefinition } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'gadkalisa.dev API',
    version: '1.0.0',
    description: 'Backend API documentation for gadkalisa.dev - Web development services, projects, blog, and resources management',
    contact: {
      name: 'API Support',
      email: 'hello@gadkalisa.dev',
    },
  },
  servers: [
    {
      url: 'http://localhost:3001',
      description: 'Development server',
    },
    {
      url: 'https://api.gadkalisa.dev',
      description: 'Production server',
    },
  ],
  tags: [
    {
      name: 'Services',
      description: 'Services management endpoints',
    },
    {
      name: 'Projects',
      description: 'Projects and work portfolio endpoints',
    },
    {
      name: 'Blog',
      description: 'Blog posts management endpoints',
    },
    {
      name: 'Resources',
      description: 'Resources and guides endpoints',
    },
    {
      name: 'Domains',
      description: 'Domain management endpoints',
    },
    {
      name: 'About',
      description: 'About page information endpoints',
    },
    {
      name: 'Process',
      description: 'Process steps endpoints',
    },
    {
      name: 'Contact',
      description: 'Contact form submission endpoints',
    },
    {
      name: 'Upload',
      description: 'Image upload endpoints using Cloudinary',
    },
  ],
  components: {
    schemas: {
      Service: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            example: 'AI and the web',
          },
          description: {
            type: 'string',
            example: 'Discover resources created to help you understand and build performant, web-first experiences with AI.',
          },
          link: {
            type: 'string',
            example: 'Learn more',
          },
          image: {
            type: 'string',
            example: '/ai.png',
          },
        },
      },
      Project: {
        type: 'object',
        properties: {
          tag: {
            type: 'string',
            example: 'Project',
          },
          title: {
            type: 'string',
            example: 'TheBen',
          },
          description: {
            type: 'string',
            example: 'A modern web solution built with clean design and optimal performance.',
          },
          link: {
            type: 'string',
            example: 'View case study →',
          },
          image: {
            type: 'string',
            example: '/theben.PNG',
          },
          url: {
            type: 'string',
            example: 'https://thebenofficial.com',
          },
        },
      },
      BlogPost: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            example: 1,
          },
          title: {
            type: 'string',
            example: 'Why your website speed matters more than you think',
          },
          excerpt: {
            type: 'string',
            example: 'A slow website doesn\'t just frustrate users—it directly impacts your bottom line.',
          },
          date: {
            type: 'string',
            example: 'March 15, 2024',
          },
          readTime: {
            type: 'string',
            example: '5 min read',
          },
          category: {
            type: 'string',
            example: 'Performance',
          },
          bgColor: {
            type: 'string',
            example: 'bg-blue-50',
          },
        },
      },
      Resource: {
        type: 'object',
        properties: {
          label: {
            type: 'string',
            example: 'Guide',
          },
          title: {
            type: 'string',
            example: 'How to choose a domain name that doesn\'t suck',
          },
          description: {
            type: 'string',
            example: 'Practical tips for picking a domain that\'s memorable and actually available.',
          },
          link: {
            type: 'string',
            example: 'Read guide →',
          },
          bgColor: {
            type: 'string',
            example: 'bg-blue-50',
          },
        },
      },
      ContactForm: {
        type: 'object',
        required: ['name', 'email', 'message'],
        properties: {
          name: {
            type: 'string',
            example: 'John Doe',
          },
          email: {
            type: 'string',
            format: 'email',
            example: 'john@example.com',
          },
          project: {
            type: 'string',
            enum: ['website', 'landing', 'domain', 'other'],
            example: 'website',
          },
          message: {
            type: 'string',
            example: 'I need a new website for my business.',
          },
        },
      },
      UploadResponse: {
        type: 'object',
        properties: {
          url: {
            type: 'string',
            example: 'https://res.cloudinary.com/dv5tcjqww/image/upload/v1234567890/gadkalisa/image.jpg',
          },
          public_id: {
            type: 'string',
            example: 'gadkalisa/image',
          },
          width: {
            type: 'number',
            example: 1920,
          },
          height: {
            type: 'number',
            example: 1080,
          },
          format: {
            type: 'string',
            example: 'jpg',
          },
          bytes: {
            type: 'number',
            example: 245678,
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
            example: false,
          },
          message: {
            type: 'string',
            example: 'Error message here',
          },
        },
      },
      SuccessResponse: {
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
            example: true,
          },
          data: {
            type: 'object',
          },
        },
      },
    },
  },
};

const options = {
  definition: swaggerDefinition,
  apis: ['./src/routes/*.ts', './src/index.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);

