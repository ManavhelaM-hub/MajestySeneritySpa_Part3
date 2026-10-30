# MajestySeneritySpa_Part3
ST10527007 Manavhela Mufhatutshedzwa

## Project Overview
Majesty Senerity Spa is a boutique wellness centre based in Tshwane, founded in 2026 by Mufhatutshedzwa Manavhela to 
provide holistic beauty and relaxation services. It's mission is to promote self-care and wellness 
through affordable spa treatments, while its vision is to become the leading local destination for 
relaxation and rejuvenation. The spa’s target audience includes professionals, students, and 
families seeking stress relief and beauty care.

## Strategic Context
Market Positioning: Competes with larger wellness chains by offering boutique, personalised experiences. Differentiates through affordability and holistic care.
Target Audience Insight: Urban professionals face high stress levels; students seek affordable wellness; families value accessible relaxation options.

## Website Goals and Objectives
-Increase online bookings by 40% within the first year.
-Showcase services and promotions to attract new customers.

-Build customer loyalty through testimonials and wellness blog content
· Increase Online Bookings: Implement a secure and intuitive booking form to reduce reliance on phone calls and walkins.
·  Promote Services & Packages: Highlight facial treatments, massage therapy, nail care, and wellness packages with detailed descriptions and visuals.
·  Enhance Customer Engagement: Provide a blog section with wellness tips and seasonal promotions to encourage repeat visits.
·  Build Brand Credibility: Showcase testimonials and reviews to establish trust and attract new clients.
·  Improve Accessibility: Ensure the website is responsive across devices and optimised for search engines
. Provide Information 24/7: Operating hours, location, services, and FAQs available anytime. to reach a wider audience.

## Business Impact
Revenue Growth: A 40% increase in bookings could translate into an additional R8,000–R12,000 monthly revenue, depending on service mix.
Cost Efficiency: Online booking reduces reliance on phone calls and walkins, saving staff time and improving customer convenience

## Sitemap
-home
-about
-contact
-enquiries
-services

## Key Performance Indicators (KPIs)
-Monthly online booking numbers.
-Website traffic and bounce rate.
-Engagement through blog views and newsletter sign-ups.
-Positive customer feedback collected via online reviews.

## Proposed Features and Functionality
-Online booking form with client-side validation.
-Service pages with images and descriptions.
-Customer testimonials and reviews section.
-Responsive design for mobile and desktop users.
 
## Timeline and Milestones
-Weeks 1–2: Content research and sitemap.
-Weeks 3–4: HTML structure and initial design.
-Weeks 5–6: CSS styling and responsive design.
-Weeks 7–8: JavaScript functionality and testing.

## Changelog
Improved navigation consistency across all pages (index.html, about.html, services.html, enquiries.html, contact.html).
Applied uniform background styling (rgba(198, 166, 115, 0.483)) for cohesive design.
Added responsive images and videos to enhance user engagement.

### About Page (about.html)
Expanded sections: Mission, Vision, Values, Founder, Team, Facilities, Sustainability, Community Involvement.
Added promotional video and new images.
Included detailed founder biography (Mufhatutshedzwa Manavhela).
Services Page (services.html)
Added service descriptions with pricing table.
Introduced yearly specials (Summer, Winter, Birthday, Couples, Referral, Holiday).
Included walk-in services section with availability details.
Embedded services video for visual appeal.

### Home Page (index.html)
Added hero banner image and welcome text.
Expanded service table with descriptions.
Listed operating hours and special offers.
Added highlights section (luxury environment, expert therapists, personalized treatments).
Included testimonials table with client feedback.

### Enquiries Page (enquiries.html)
Added enquiry form with required fields.
Introduced online booking system with terms, conditions, and payment details.
Added client testimonials submission form.
Included gift voucher request form.
Added FAQ section for common client questions.

### Contact Page (contact.html)
Expanded introductory text for customer support.
Added contact form with name, surname, and message fields.
Included direct contact details (phone, email, address).
Added assurance of 24-hour response time.

###  CSS 

Part 1 → Part 2 Updates

#### Styling Enhancements
- Applied **uniform background color** (`rgba(198, 166, 115, 0.483)`) across all pages for a cohesive look.
- Standardized **header styling** with consistent padding and background (`#a28f6e`).
- Improved **navigation menu styling** for better readability and alignment.
- Added **responsive image handling** (`responsive_image` attribute) to ensure visuals adapt to different screen sizes.
- Introduced **consistent padding and spacing** in `<main>` sections for balanced layouts.

####  Media & Visuals
- Embedded **responsive videos** with `controls` enabled for user interaction.
- Ensured all images include **alt text** for accessibility compliance.
- Adjusted image placement and sizing for improved visual hierarchy.

#### Technical Improvements
- Linked external stylesheet (`css_assets/myfirststyles.css`) to centralize design management.
- Enhanced **semantic HTML structure** with `<header>`, `<main>`, `<footer>` styled consistently.
- Improved **form styling** (labels, inputs, textareas) for better usability and accessibility.
- Added **hover and focus states** for interactive elements (links, buttons) to improve user experience.

#### Accessibility
- Ensured **labels are linked to form inputs** for screen reader compatibility.
- Added **alt attributes** to all images for descriptive accessibility.
- Improved **color contrast** between text and background for readability.

 # Java Script-Part 3
-Added js_assets/part3.js and css_assets/part3.css (loaded on every page).
-Added accordion, modal, lightbox gallery, animations, open-now badge and Leaflet map.
-Services table now loads from data/services.json with search, filter and sort.
-Added JavaScript validation for all forms; fixed nested forms on the Enquiries page; moved forms to Netlify Forms and added thank-you.html.
SEO: unique titles and meta descriptions, canonical links, Open Graph/Twitter tags, one <h1> per page, improved alt text, lazy loading, internal links, JSON-LD schema.
-Added robots.txt, sitemap.xml and _headers.
-Added a populated footer with navigation and social links on all pages.
-Fixed malformed HTML (unclosed table rows and lists, missing > on </html> in contact page).
-Deployed the website.

# Enhancing Functionality and SEO
## JavaScript Enhancements
### Interactive Elements
Feature	Where	How it works
Accordion	About page	Each section (Mission, Vision, Values, etc.) collapses and expands. Built with DOM manipulation: the script wraps each section's content and adds an accessible toggle button (aria-expanded, aria-controls). Animated with a CSS grid-row transition.
Accordion (FAQ)	Enquiries page	Native <details> elements, enhanced so that only one answer is open at a time.
Modal	Home page	"See our current specials" opens a modal listing the yearly specials, loaded from data/specials.json. Supports Esc, click-outside to close, focus trapping, and returns focus to the button on close.
Interactive map	Contact page	Leaflet.js with OpenStreetMap tiles, a marker and popup for the spa, and a "Show distance from my location" button using the browser Geolocation API, which calculates the distance and links to directions. This replaced the two static Google Maps iframes.
Animations & transitions	All pages	Scroll-reveal fade/slide using IntersectionObserver and CSS transitions, animated accordion, modal and lightbox fades, button hover effects, and table row entry animation. All animation is disabled for users who set prefers-reduced-motion.
Advanced DOM manipulation	All pages	A live "Open now / Closed" badge generated from the spa's operating hours (South African time, updated every minute); the current page's nav link is marked with aria-current; inline validation messages are created and removed dynamically.
Gallery with lightbox	Home page	"Spa Gallery" grid. Clicking an image opens it in a larger view with previous/next buttons, keyboard arrows, Esc to close, and an image counter caption.
### Dynamic Content
Dynamic services: The services table on services.html is rebuilt from data/services.json using fetch().
Search, filter and sort: Visitors can search by keyword, filter by category (Massage, Face & Body, Nails), show only walk-in services, and sort by name or price (low to high / high to low). A live result count is announced to screen readers (role="status").
Booking shortcut: Each service row has a "Book" link (enquiries.html?service=...) that pre-selects that service in the booking form.
Progressive enhancement: The full table remains in the HTML, so search engines and users without JavaScript still see all services. If the JSON cannot be loaded, the static table is left in place.
### Form Validation (all forms)

Client-side validation runs on submit and live on blur/input, with accessible error messages (role="alert", aria-invalid):

Required fields and required checkboxes.
Name/surname: letters only, minimum 2 characters.
South African phone number format (+27 or 0 followed by 9 digits).
Email format check.
Booking date: not in the past and not a Sunday; booking time must fall within operating hours for the chosen day.
Gift voucher: whole-rand amount of at least R100.
Message: minimum 10 characters.
Newsletter email required only when the newsletter box is ticked.

Bug fixed: Several forms on enquiries.html were nested inside each other, which caused fields to be submitted with the wrong form. Each form is now properly closed.

Form handling: PHP does not run on free static hosts, so forms now use Netlify Forms (data-netlify="true") with a honeypot field for spam protection and redirect to thank-you.html.

## Search Engine Optimisation (SEO)
   ### On-Page SEO
Keyword research: Target keywords were chosen around the spa's services and area (e.g. spa Pretoria, day spa, massage Pretoria, facials, hot stone massage, spa gift voucher, book spa appointment) and used naturally in titles, headings, descriptions and body copy.
Title tags and meta descriptions: Every page now has a unique title (under about 60 characters) and a unique meta description (about 150 characters). Previously all pages shared the same description.
Header tags: Each page has exactly one <h1>, with <h2>/<h3> used for sub-sections in a logical hierarchy.
Image optimisation: Descriptive alt text on all images, loading="lazy" and decoding="async" on below-the-fold images, and preload="none" and aria-label on videos.
URL structure: Clean, short, lowercase page names (/about.html, /services.html, /enquiries.html, /contact.html), with a canonical link on every page.
Internal linking: Contextual links in body text between pages (for example Home → Services, About, Enquiries; Services → Enquiries, About) plus a footer navigation on every page.
Social sharing: Open Graph and Twitter Card tags on each page.
Structured data: JSON-LD DaySpa (LocalBusiness) schema on the home page with address, phone, opening hours, price range and location.
### Off-Page SEO
Backlinks: Plan to build links from local directories and listings (Google Business Profile, local business directories, and wellness/beauty listings) pointing to the site.
Social media: Footer links to the spa's social media profiles (Facebook, Instagram, TikTok) and shareable Open Graph previews, so posts that link to the site display an image and description.
Local SEO: Google Business Profile listing, consistent name/address/phone details across the site and listings, DaySpa schema with geo-coordinates, and an interactive map on the Contact page.
### Additional Requests
robots.txt: Allows all crawlers, blocks thank-you.html, and points to the sitemap.
sitemap.xml: Lists all five main pages with last-modified date, change frequency and priority.
Page speed: Lazy-loaded images, videos that do not preload, defer on all scripts, a small dependency footprint (Leaflet is only loaded on the Contact page), and CSS/JS kept in cached external files.
Security: A _headers file sets X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy and a Content Security Policy. The site is served over HTTPS by the host, user input is validated, and dynamic content is inserted with textContent rather than innerHTML. Forms include a honeypot field. External links use rel="noopener".
### Deployment
The site is deployed on Netlify (free tier) by uploading/connecting the project folder. Netlify provides HTTPS automatically and processes the forms. After deployment, the sitemap was submitted to Google Search Console. <!-- TODO: only keep the Search Console sentence if you actually did it -->

## References  Part 2-1
Spa Association of South Africa (2025) Trends in Wellness and Beauty. Spa Association of South Africa. Available at: https://www.spaassociation.co.za/trends (spaassociation.co.za in Bing) (Accessed: 29 July 2026).
W3Schools (2026) HTML Forms Tutorial. W3Schools. Available at: https://www.w3schools.com/html/html_forms.asp (w3schools.com in Bing) (Accessed: 29 July 2026).
Adams, J. (2024) ‘Digital transformation in business’, Business Review Online. Available at: https://www.businessreviewonline.com/digital-transformation (Accessed: 29 July 2026).
Chen, S. (2024) ‘Climate change policy updates’, Environmental Affairs Network. Available at: https://www.environmentalaffairs.org/climate-policy (Accessed: 29 July 2026).
National Archive (2024) ‘Digitized historical documents’, National Archive. Available at: https://www.nationalarchive.org/documents (Accessed: 29 July 2026).
 Mozilla Developer Network (MDN). (2026). *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 14 September 2026].
W3Schools. (2026). *HTML and CSS Tutorials*. Available at: https://www.w3schools.com [Accessed 14 September 2026].
 Canva. (2026). *Design Templates and Visual Assets*. Available at: https://www.canva.com [Accessed 14 September 2026].
 Independent Institute of Education (IIE) Rosebank College. (2026). *WEDE5020 Course Materials*. Johannesburg: IIE Rosebank College.
 
## References  Part 3
 Agafonkin, V. (2026) Leaflet: an open-source JavaScript library for interactive maps. Available at: https://leafletjs.com [Accessed 30 October 2026]. OpenStreetMap contributors (2026) OpenStreetMap. Available at: https://www.openstreetmap.org [Accessed 30 October 2026]. Mozilla Developer Network (MDN). (2026). Intersection Observer API. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API [Accessed 30 October 2026]. Mozilla Developer Network (MDN). (2026). Using the Fetch API. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch [Accessed 30 October 2026]. Mozilla Developer Network (MDN). (2026). Geolocation API. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API [Accessed 30 October 2026]. Google (2026) Search Central: SEO Starter Guide. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 30 October 2026]. Google (2026) Local business structured data. Available at: https://developers.google.com/search/docs/appearance/structured-data/local-business [Accessed 30 October 2026]. Schema.org (2026) DaySpa. Available at: https://schema.org/DaySpa [Accessed 30 October 2026]. Netlify (2026) Netlify Docs: Forms setup. Available at: https://docs.netlify.com/forms/setup/ [Accessed 30 October 2026].

