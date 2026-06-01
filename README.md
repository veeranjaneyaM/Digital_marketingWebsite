# ELIVATX

ELIVATX is a premium full-stack digital marketing consultancy platform built as a sub-brand of INCUXAI.

## Stack

- Next.js 15 + React 19 + Tailwind CSS
- Framer Motion + React Three Fiber + Three.js + Lenis
- Node.js + Express.js
- MongoDB + Mongoose
- Cloudinary-ready media configuration

## Project Structure

- `apps/web`: immersive marketing frontend and admin UI shell
- `apps/api`: Express API, MongoDB models, admin auth, and CMS endpoints

## Local Setup

1. Install dependencies with `npm install`
2. Copy `.env.example` to `.env`
3. Start frontend with `npm run dev:web`
4. Start backend with `npm run dev:api`
5. Or run both with `npm run dev`

## Deployment

- Frontend: Vercel using `apps/web`
- Backend: Render or Railway using `apps/api`
- Database: MongoDB Atlas
- Media: Cloudinary

## Included Features

- Cinematic multi-page Next.js frontend with immersive motion styling
- React Three Fiber hero scene and Lenis smooth scroll
- GSAP ScrollTrigger showcase animations
- Contact, consultation, and newsletter API integrations
- Admin-ready Express routes for blogs, leads, testimonials, services, and case studies
- SEO metadata, JSON-LD, sitemap, and robots configuration
