<!-- My Portfolio -->

- This is a fully responsive personal portfolio website built using HTML, CSS, JavaScript, and jQuery.

- The website showcases my skills, projects, and contact information with a modern UI, smooth animations, interactive effects, and SEO‑friendly structure. jQuery is used to enhance UI behavior such as navigation toggles, animations, and scroll interactions. It is optimized for performance and works well across all screen sizes.

- The project has been successfully completed and deployed.

<!-- Features -->

- Fully responsive layout
- Mobile hamburger navigation (jQuery powered)
- Smooth reveal‑on‑scroll animations
- Scroll‑spy active links
- Interactive UI using jQuery
- Clean and reusable CSS structure
- SEO‑friendly markup
- Fast loading static pages
- Contact cards with social links
- Project showcase section

<!-- Technologies Used -->

- HTML5
- CSS3
- JavaScript (ES6)
- jQuery
- FontAwesome Icons
- Google Fonts (Poppins)

<!-- CDN link -->

<!-- Google Font -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">

<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<!-- jQuery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<!-- Project Structure -->

├── assets/
│ └── images/
├── css/
│ └── style.css
├── js/
│ └── script.js
├── index.html
├── about.html
├── skills.html
├── projects.html
├── contact.html
├── robots.txt
├── .gitignore
├── .env
└── README.md

<!-- Code Logic Explanation -->

<!-- Navigation (Hamburger Menu – jQuery) -->

jQuery toggles the mobile menu using:

- menuToggle → hamburger icon
- navList → navigation list
- Adds/removes .active class
- Animates hamburger into an X
- Enables smooth open/close behavior
- Added Dark and Light mode Toggle

<!-- Reveal On Scroll Animation -->

- Selects elements like: .hero, .highlight-card, .about-container, .skill-card, .project-card

Logic:

- Gets element position using getBoundingClientRect()
- Compares with viewport height
- Adds .reveal-active when visible
- Creates smooth entrance animations while scrolling

<!-- Active Navigation Highlight (jQuery) -->

- Removes active from all links
- Adds active to the clicked link
- Shows current page visually

<!-- Card Hover Lift Effect -->

Each card listens for:

- mouseenter → move up
- mouseleave → reset position
- This gives a modern floating UI effect.

<!--  CSS Layout Logic -->

Uses grid and flex for layout

- auto-fit and minmax() for responsiveness
- @media queries for mobile
- Box-shadow and glow effects
- Fixed height + object-fit: cover for images
- Ensures all pages adapt properly on desktop and mobile.

<!--  SEO & Accessibility Logic -->

- Proper meta viewport
- Semantic tags (header, section, footer)
- robots.txt for indexing
- Image alt attributes
- These improve search visibility and usability.

<!--  SEO & Performance -->

- Semantic HTML
- robots.txt configured
- Responsive images
- Optimized layout
- Minimal and optimized JS + jQuery usage

Gourab Roy
Java & Frontend Developer

🌐 Portfolio: https://gourabroy.online
💼 LinkedIn: https://www.linkedin.com/in/gourab-roy-76b706372
🐙 GitHub: https://github.com/gourabroy8981-droid
📘 Facebook: https://www.facebook.com/share/1CWNRqF3QG/
📸 Instagram: https://www.instagram.com/royy_gourab?igsh=YmJ3aThtemJ3OW12
🐦 Twitter (X): https://x.com/GourabRoy9861

<!--my images -->

- https://gourabroy.online/assets/images/profile.jpg
- https://gourabroy.online/assets/images/profile2.jpg
- https://gourabroy.online/assets/images/project1.jpeg
- https://gourabroy.online/assets/images/project2.jpg
- https://gourabroy.online/assets/images/project3.png
- https://gourabroy.online/assets/images/project4.png

<!-- All feature links here -->

Use below URL link for getting Social icon
https://fontawesome.com/

Use below URL link for getting Fonts
https://fonts.google.com/

<!-- Future Use -->

Use below URL link for getting Css class
https://getbootstrap.com/

Use below URL link for getting Chart(Bar , pie , donut , line)
https://www.chartjs.org/

Use below URL link for getting HD quality image
https://www.freepik.com/

<!-- Future Use CDN -->

bootstrap 5 CDN
https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css

Bundle CDN
https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js

chart.js CDN
https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.5.0/chart.min.js

📜 License

- This project is open for learning, personal use, and portfolio purposes..
