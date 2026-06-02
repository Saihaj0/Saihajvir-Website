# Personal Portfolio Website

A modern and responsive personal portfolio website built using Next.js, TypeScript, and Tailwind CSS.  
This project showcases skills, projects, certifications, blogs, achievements, and contact information in a clean and interactive interface.

---

## Features

- Fully responsive design  
- Dark and Light theme support  
- Hero and About sections  
- Skills showcase  
- Projects display  
- Achievements section  
- Education timeline  
- Certifications section  
- Blog section  
- Stats dashboard  
- Resume download functionality  
- Contact form section  
- Smooth navigation  
- Fast performance using Next.js  

---

## Tech Stack

### Frontend
- Next.js  
- React  
- TypeScript  
- Tailwind CSS  
- shadcn/ui  
- Radix UI  
- Lucide Icons  

### Libraries and Tools
- React Hook Form  
- Zod Validation  
- Recharts  
- Next Themes  
- Vercel Analytics  

---

## Project Structure

project-root/

├── app/
│ ├── api/
│ │ └── resume/
│ │ └── route.ts
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
│
├── components/
│ ├── hero-section.tsx
│ ├── about-section.tsx
│ ├── skills-section.tsx
│ ├── projects-section.tsx
│ ├── achievements-section.tsx
│ ├── certifications-section.tsx
│ ├── blog-section.tsx
│ ├── education-section.tsx
│ ├── contact-section.tsx
│ ├── navbar.tsx
│ ├── footer.tsx
│ └── ui/
│
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md

---

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/your-username/portfolio.git

Navigate into the project:

cd portfolio

Install dependencies:

npm install

Run the development server:

npm run dev

Open your browser and go to:

http://localhost:3000
Deployment

This project can be deployed easily using Vercel.

Steps:

Push the project to GitHub
Go to Vercel
Import the repository
Click Deploy

Your site will be live within minutes.

Customization

You can customize the portfolio by editing the following files:

Hero Section
components/hero-section.tsx
About Section
components/about-section.tsx
Skills Section
components/skills-section.tsx
Projects Section
components/projects-section.tsx
Education Section
components/education-section.tsx
Certifications Section
components/certifications-section.tsx
Contact Section
components/contact-section.tsx
Resume Download API

The resume download feature is handled through:

/api/resume

Update your resume file inside:

app/api/resume/
Stats Dashboard

Includes:

Skills visualization
Charts and analytics
Performance metrics

Powered using Recharts.

Environment Variables (Optional)

Create a .env.local file if needed:

NEXT_PUBLIC_SITE_URL=http://localhost:3000
Contributing

Contributions are welcome.

Steps:

Fork the repository
Create a new branch
git checkout -b feature-name
Commit your changes
git commit -m "Added new feature"
Push to GitHub
git push origin feature-name
Open a Pull Request
License

This project is licensed under the MIT License.

Author

Saihajvir Singh
B.Tech Computer Engineering
MPSTME
