# gadkalisa.dev Backend API

Backend API server for gadkalisa.dev

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend directory:
```bash
PORT=3001
NODE_ENV=development
MONGODB_URI=mongodb+srv://jimmygateterwanda_db_user:Kigali20@@cluster0.tn5gjrc.mongodb.net/gadkalisa?retryWrites=true&w=majority&appName=Cluster0

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=dv5tcjqww
CLOUDINARY_API_KEY=862322526388271
CLOUDINARY_API_SECRET=2JBe6ETFPKlBveypyWauaUPypC4
CLOUDINARY_URL=cloudinary://862322526388271:2JBe6ETFPKlBveypyWauaUPypC4@dv5tcjqww
```

Note: The MongoDB password and Cloudinary credentials are already configured in the code, but you can override them with environment variables if needed.

3. Start development server:
```bash
npm run dev
```

The server will run on `http://localhost:3001`

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run type-check` - Type check without building

## API Documentation

Interactive API documentation is available at `/api-docs` when the server is running.

Visit: `http://localhost:3001/api-docs`

The Swagger UI provides:
- Complete API endpoint documentation
- Request/response schemas
- Try-it-out functionality
- Example requests and responses

## API Endpoints

### General
- `GET /` - API info and available endpoints
- `GET /health` - Health check

### Services
- `GET /api/services` - Get all services

### Projects/Work
- `GET /api/projects` - Get all projects
- `GET /api/work` - Alias for projects
- `GET /api/projects/:id` - Get single project by slug

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:id` - Get single blog post by ID

### Resources
- `GET /api/resources` - Get all resources/guides

### Domains
- `GET /api/domains` - Get all domain data (extensions + features)
- `GET /api/domains/extensions` - Get domain extensions
- `GET /api/domains/features` - Get domain features

### About
- `GET /api/about` - Get about page information

### Process
- `GET /api/process` - Get process steps (HTML, CSS, JavaScript)

### Contact
- `POST /api/contact` - Submit contact form
  - Body: `{ name, email, project?, message }`

### Upload
- `POST /api/upload/image` - Upload single image
  - Form data: `image` (file), optional `folder` (string)
  - Returns: `{ url, public_id, width, height, format, bytes }`
- `POST /api/upload/images` - Upload multiple images (max 10)
  - Form data: `images[]` (files), optional `folder` (string)
  - Returns: Array of image data
- `DELETE /api/upload/image/:publicId` - Delete image from Cloudinary

## Response Format

All endpoints return JSON in the following format:

```json
{
  "success": true,
  "data": { ... }
}
```

Error responses:
```json
{
  "success": false,
  "message": "Error message"
}
```

## Example Requests

### Get all services
```bash
curl http://localhost:3001/api/services
```

### Get all projects
```bash
curl http://localhost:3001/api/projects
```

### Submit contact form
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "project": "website",
    "message": "I need a new website"
  }'
```

### Upload image
```bash
curl -X POST http://localhost:3001/api/upload/image \
  -F "image=@/path/to/image.jpg" \
  -F "folder=gadkalisa"
```

### Upload multiple images
```bash
curl -X POST http://localhost:3001/api/upload/images \
  -F "images=@/path/to/image1.jpg" \
  -F "images=@/path/to/image2.jpg" \
  -F "folder=gadkalisa"
```

### Delete image
```bash
curl -X DELETE http://localhost:3001/api/upload/image/gadkalisa/public_id
```
