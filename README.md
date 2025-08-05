# Capstone Project 3: Personal Blog Website

This repository showcases my third capstone project from the Web Development Bootcamp. The project involves building a **personal blog web application** using **Node.js**, **Express.js**, and **EJS**, with responsive styling via **Bootstrap 5** and **Font Awesome**.

## Features

* **Post Creation:** Users can create new blog posts with title and content
* **Post Viewing:** Home page displays all created posts in a clean, organized layout
* **Post Management:** Users can edit and delete existing posts with confirmation dialogs
* **Responsive Design:** Mobile-friendly interface using Bootstrap 5 grid system
* **Interactive UI:** Smooth animations, hover effects, and modern card-based layout
* **Navigation System:** Fixed navbar with active page indicators
* **Empty State Handling:** Friendly messaging when no posts exist
* **Form Validation:** Required field validation for post creation and editing

## Technologies Used

* **Node.js** - JavaScript runtime for server-side development
* **Express.js** - Web application framework for routing and middleware
* **EJS** - Embedded JavaScript templating engine for dynamic HTML
* **Bootstrap 5.3** - CSS framework for responsive design
* **Font Awesome 6.4** - Icon library for enhanced UI elements
* **CSS3** - Custom styling with CSS variables and animations
* **HTML5** - Semantic markup structure

## Project Structure

```
├── index.js              # Main server file with Express routes
├── views/
│   ├── partials/
│   │   ├── header.ejs    # Navigation and HTML head
│   │   └── footer.ejs    # Footer and script includes
│   ├── home.ejs          # Homepage displaying all posts
│   ├── new.ejs           # Create new post form
│   └── edit.ejs          # Edit existing post form
├── public/
│   └── styles.css        # Custom CSS with Bootstrap enhancements
└── package.json          # Project dependencies and scripts
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/capstone-blog.git
   cd capstone-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   node index.js
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Technical Implementation

* **Server-Side Rendering:** Uses EJS templating for dynamic content generation
* **In-Memory Storage:** Posts stored in server memory (no database required)
* **RESTful Routing:** Implements GET and POST routes for CRUD operations
* **Middleware Integration:** Uses body-parser for form data handling
* **Static Asset Serving:** Serves CSS and other static files via Express
* **Responsive Breakpoints:** Mobile-first design with tablet and desktop optimizations

## Live Demo

Check out the live version of my blog application here:
**[LIVE DEMO LINK](https://sobis-blog.onrender.com/)**
