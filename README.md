# Qvest Consulting Website

A modern, responsive static website for Qvest Consulting, a Pennsylvania-based firm specializing in helping recent graduates and researchers gain experience with industry-grade ML & AI projects.

## Features

- Responsive design that works on all devices
- Modern and clean UI with animations
- Interactive components
- Contact form
- Testimonial slider
- Accessible navigation

## Technologies Used

- HTML5
- CSS3 (with CSS variables and Flexbox/Grid)
- JavaScript (Vanilla)
- Font Awesome icons
- Google Fonts

## Project Structure

```
qvest/
│
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Directory for images (to be added)
└── README.md           # This file
```

## Deployment on GitHub Pages

1. Push this repository to GitHub
2. Go to repository settings
3. Navigate to "Pages" section
4. Select "main" branch as the source
5. Click "Save"
6. Your site will be published at `https://[username].github.io/qvest/`

## Customization Guide

### Replacing Placeholder Content

- Replace the placeholder text in `index.html` with your actual content
- Add your own images to the `images/` directory and update the image paths in HTML
- Update contact information and social media links

### Changing Colors

The color scheme can be easily modified by updating the CSS variables in the `:root` section of the CSS file:

```css
:root {
    --primary-color: #6366f1;
    --primary-light: #818cf8;
    --primary-dark: #4f46e5;
    /* other variables */
}
```

### Adding New Sections

To add a new section, follow the existing pattern in the HTML file:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <div class="section-header">
            <h2>Section <span class="highlight">Title</span></h2>
            <p>Section description</p>
        </div>
        <!-- Section content here -->
    </div>
</section>
```

Then add corresponding styles in the CSS file.

## License

This project is available for use by Qvest Consulting.

## Acknowledgements

- Font Awesome for icons
- Google Fonts for typography
