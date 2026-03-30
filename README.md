# Mariam - Personal Portfolio Website

## Project Title
Personal Portfolio Website



## Live Demo
[View Live Demo](https://mariem-sherif.netlify.app/) <!-- Replace with your actual deployed URL -->

## Technologies Used
- **HTML5**: Semantic markup for structure
- **CSS3**: Custom styling with Tailwind CSS framework
- **JavaScript**: Interactive features and form validation
- **React**: Component-based UI development
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Zod**: Form validation schema

## Setup Instructions

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/zezao7op-lang/fiinal-project2
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure
```
src/
├── components/
│   ├── ui/          # Reusable UI components (shadcn/ui)
│   ├── Layout.tsx   # Main layout wrapper
│   ├── Navbar.tsx   # Responsive navigation bar
│   ├── Footer.tsx   # Site footer
│   └── BackToTop.tsx # Back-to-top button
├── pages/
│   ├── Index.tsx    # Homepage/Hero section
│   ├── About.tsx    # About me page
│   ├── Projects.tsx # Projects showcase
│   ├── Contact.tsx  # Contact form and info
│   └── NotFound.tsx # 404 page
├── lib/
│   └── utils.ts     # Utility functions
└── App.tsx          # Main app component
```

## Features
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Dark/Light Mode**: Theme toggle with local storage persistence
- **Mobile Navigation**: Collapsible hamburger menu for mobile devices
- **Form Validation**: Client-side form validation with error messages
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Back-to-Top Button**: Scroll-to-top functionality
- **SEO Optimized**: Proper meta tags and semantic HTML

## Key Interactive Features
1. **Mobile Menu Toggle**: Hamburger menu that expands/collapses on mobile
2. **Dark/Light Mode Toggle**: Switch between themes with smooth transitions
3. **Form Validation**: Real-time validation for contact form fields
4. **Back-to-Top Button**: Appears on scroll and smoothly scrolls to top

## Reflection
This portfolio website represents my journey as a web developer student. Through this project, I learned:
- Modern React development with TypeScript
- Responsive design principles using Tailwind CSS
- Component-based architecture
- Form handling and validation
- Animation libraries like Framer Motion
- Deployment and hosting best practices

The project challenged me to balance aesthetics with functionality, ensuring the site works seamlessly across all devices while maintaining a professional appearance.
