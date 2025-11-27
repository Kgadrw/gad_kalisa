import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dv5tcjqww',
  api_key: process.env.CLOUDINARY_API_KEY || '862322526388271',
  api_secret: process.env.CLOUDINARY_API_SECRET || '2JBe6ETFPKlBveypyWauaUPypC4',
});

export default cloudinary;

