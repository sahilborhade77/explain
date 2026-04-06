# 🎨 Customization Guide

Learn how to customize the website to match your branding and needs.

---

## 🎯 Change Colors & Theme

### Edit the Color Theme
Open `styles.css` and find the `:root` section (line 1-10):

```css
:root {
    --primary: #007bff;
    --primary-dark: #0056b3;
    --secondary: #6c757d;
    --success: #28a745;
    --danger: #dc3545;
    --warning: #ffc107;
    --info: #17a2b8;
    --light: #f8f9fa;
    --dark: #343a40;
    --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**Example:** Change from purple to blue gradient:
```css
--gradient: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
```

### Common Color Changes
- **Navigation bar background:** Search `navbar` in styles.css
- **Button colors:** Search `.btn-primary` and `.btn-outline-light`
- **Accent color:** Search `#ffc107` (golden yellow)
- **Text color:** Search `color: #333` or `color: #666`

---

## 📝 Update Content

### Edit Project Name
In `index.html`, find and replace:
- `Traffic Intelligence System` → Your project name
- `🚦 Traffic Intelligence System v2.0` → Your title

### Edit Hero Section
Lines 55-60 in `index.html`:
```html
<h1 class="display-4 fw-bold mb-4">🚦 Traffic Intelligence System v2.0</h1>
<p class="lead mb-4">AI-Powered Traffic Enforcement & Management Platform</p>
<p class="subtitle mb-4">Real-time vehicle detection, predictive analytics, and intelligent signal control</p>
```

Update these to match your project.

### Edit Overview Cards
Lines 130-170 in `index.html` - Update the 4 overview cards with your features.

### Edit Features Section
Lines 190-230 - Modify the feature lists to highlight your specific capabilities.

### Edit Architecture
Lines 260-310 - Update the 4 architecture layers to match your system.

### Edit FAQ Answers
Lines 450-800 - Modify each accordion answer with your specific details:
```html
<div id="q1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
    <div class="accordion-body">
        <!-- Edit this content -->
    </div>
</div>
```

---

## 🖼️ Add Your Logo

### Option 1: Replace Traffic Light Icon
Line 33 in `index.html`:
```html
<i class="fas fa-traffic-light"></i> Traffic Intelligence System
```

Change to:
```html
<img src="your-logo.png" alt="Logo" style="height: 40px; margin-right: 10px;">
Your Project Name
```

### Option 2: Add Logo Image in Hero
Add after line 72:
```html
<img src="path/to/logo.png" alt="Logo" style="max-width: 200px; margin-bottom: 20px;">
```

### Supported Image Formats
- PNG (recommended, with transparency)
- JPG
- SVG (scalable vector)
- WebP (modern format)

---

## 🎬 Change Animations

### Disable Animations (for slower devices)
Add to the top of `script.js`:
```javascript
// Disable animations
document.documentElement.style.setProperty('--animation-duration', '0s');
```

### Change Animation Speed
In `styles.css`, find animation definitions:
```css
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(30px); }
}
```

### Modify Hover Effects
Search `.card:hover` in styles.css to change card hover effects.

---

## 📱 Customize for Mobile

### Change Mobile Breakpoints
In `styles.css`, find `@media (max-width: 768px)` and adjust values:
```css
@media (max-width: 1024px) {  /* Change 768px to 1024px for larger tablets */
    /* ... mobile styles ... */
}
```

### Modify Mobile Menu
Lines 35-40 in `index.html` - Adjust navbar collapse button behavior.

---

## 🔤 Change Fonts

### Use Google Fonts
Add to `<head>` section in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Then in `styles.css`, change:
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Available Font Weights
```css
font-weight: 400;  /* Regular */
font-weight: 600;  /* Semi-bold */
font-weight: 700;  /* Bold */
font-weight: 800;  /* Extra-bold */
```

---

## 🎨 Customize Sections

### Hide Sections
Add to a section's opening tag: `style="display: none;"`
```html
<section id="overview" class="overview-section py-5" style="display: none;">
```

### Reorder Sections
Simply move the entire `<section>` block to a different position in `index.html`.

### Change Section Background
Edit the section's class in styles.css:
```css
.overview-section {
    background: #f8f9fa;  /* Change this color */
}
```

### Add New Section
Copy an existing section and modify:
```html
<section id="newsection" class="new-section py-5">
    <div class="container">
        <!-- Your content here -->
    </div>
</section>
```

Then add CSS in styles.css:
```css
.new-section {
    padding: 80px 0;
    background: #fff;
}
```

---

## 🔗 Update Links

### Add External Links
In navigation or buttons, update `href`:
```html
<a href="https://your-website.com">Visit Project</a>
```

### Link to Documents
```html
<a href="path/to/document.pdf" target="_blank">Download PDF</a>
```

### Add Email Contact
```html
<a href="mailto:contact@example.com">Email Us</a>
```

---

## 📊 Update Metrics

### Change Metric Values
Lines 350-370 in `index.html`:
```html
<h3 class="metric-number">+34%</h3>
<p class="metric-label">Higher Throughput vs Fixed Timing</p>
```

Update numbers and labels to your actual metrics.

### Add/Remove Metrics
The grid is 3 columns. To add more, add a new `<div class="col-md-4">` block.

---

## 🌐 Deploy to Hosting

### Option 1: GitHub Pages (Free)
1. Create GitHub account
2. Create repo named `username.github.io`
3. Push files there
4. Your site goes live at `username.github.io`

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Drag and drop the `explain` folder
3. Your site gets a live URL instantly

### Option 3: Your Own Server
1. Upload all files to your web server
2. Make sure `index.html` is the default file
3. Access via your domain

### Option 4: Cloud Platforms
- **AWS S3** - Static website hosting
- **Google Cloud Storage** - Similar to S3
- **Azure Static Web Apps** - Free tier available
- **DigitalOcean App Platform** - Simple deployment

---

## 🔐 Add Password Protection

Add this to `<head>` in `index.html` for basic protection:
```html
<script>
var password = prompt("Enter password:");
if (password != "your-password-here") {
    document.body.innerHTML = "<h1>Access Denied</h1>";
}
</script>
```

⚠️ **Note:** This is basic protection only. Use server-side authentication for real security.

---

## 📈 Add Analytics

### Google Analytics
Add to `<head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your Google Analytics ID.

---

## ⚡ Performance Optimization

### Compress Images
Use online tools:
- TinyPNG.com
- Compressor.io
- ImageOptim (Mac)

### Lazy Load Images
Add `loading="lazy"` to img tags:
```html
<img src="image.jpg" alt="Description" loading="lazy">
```

### Minify CSS/JS
Online tools:
- CSSNano.co
- Minify.tools
- UglifyJS

---

## 🐛 Debugging

### Check Browser Console
1. Open DevTools: `F12` or `Ctrl+Shift+I`
2. Go to "Console" tab
3. Look for error messages
4. Fix and refresh

### Common Issues
- **Styles not applying?** Clear cache (Ctrl+Shift+Delete)
- **Images not loading?** Check file paths are correct
- **JavaScript not working?** Check console for errors

---

## 📚 Additional Resources

- **HTML Cheat Sheet:** https://htmlcheatsheet.com/
- **CSS Tricks:** https://css-tricks.com/
- **Bootstrap Docs:** https://getbootstrap.com/docs/
- **FontAwesome Icons:** https://fontawesome.com/icons
- **Color Picker:** https://coolors.co/

---

## 🎓 Learning Resources

- **Learn HTML:** https://www.codecademy.com/learn/learn-html
- **Learn CSS:** https://www.codecademy.com/learn/learn-css
- **Learn JavaScript:** https://www.codecademy.com/learn/introduction-to-javascript

---

**Tips:**
- Always keep backups of original files
- Test changes in different browsers
- Use browser DevTools (F12) to debug
- Read error messages carefully
- Search online for help with specific issues

Happy customizing! 🎨
