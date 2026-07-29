# JobConnect – Job Portal Web Application

## Overview

JobConnect is a modern job portal web application developed using Next.js, TypeScript, and Tailwind CSS. The platform provides a clean and responsive interface where users can browse job opportunities, view job details, and explore career options.

This project was developed as part of a Software Developer technical assessment.

---

## Features

- Home page with modern landing section
- Browse available job listings
- Dynamic Job Details page
- About page
- Contact page
- Post Job page
- Responsive user interface
- Reusable React components
- Clean navigation between pages

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Git & GitHub
- GitHub Actions (CI)
- Vercel

---

## Project Structure

```text
app/
├── about/
├── contact/
├── jobs/
│   └── [id]/
├── post-job/
├── layout.tsx
└── page.tsx

components/
├── Navbar.tsx
├── Hero.tsx
├── SearchBar.tsx
├── FeaturedJobs.tsx
├── JobCard.tsx
├── JobCategories.tsx
├── TopCompanies.tsx
└── Footer.tsx
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/DSravya610/jobconnect.git
```

Move into the project:

```bash
cd jobconnect
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## CI/CD Pipeline

The project uses **GitHub Actions** for Continuous Integration.

The workflow automatically:

- Installs dependencies
- Runs ESLint
- Builds the application
- Verifies the project on every push to the `main` branch

---

## Deployment

The application is deployed on **Vercel**.

**Live Demo**

https://jobconnect-cc2e6c6jb-sravya3.vercel.app

---

## GitHub Repository

https://github.com/DSravya610/jobconnect

---

## Future Enhancements

- User authentication
- Job application functionality
- Employer dashboard
- Search and filtering
- Database integration
- User profiles
- Bookmark jobs

---

## Author

**Dodike Sravya**

Software Developer Candidate

---

## License

This project was created for educational and technical assessment purposes.