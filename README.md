# PAWAN STEEL ALLOYS — Premium Industrial Web Application (Redesigned)

> **Official Website for PAWAN STEEL ALLOYS**, Mumbai, India.  
> An **ISO 9001:2015 Certified Company** & **Government of India MSME Registered Enterprise (UDYAM-MH-19-0449426)**.

---

## 🏗️ Brand Identity & Color Theme

- **Primary Red:** `#D71932`
- **Navy Blue:** `#123467`
- **Dark Navy:** `#0A1F3D`
- **Light Blue-Grey Background:** `#F3F7FB`
- **Main Text:** `#172033`
- **Company Logo:** Larger, crisp, properly aligned in navbar and footer while preserving original red and navy-blue emblem proportions.

---

## 🌐 Routes & Page Architecture

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Split hero reference slider (4 slides), continuous marquee, company intro & why choose us, 8 product cards with animations, 13 materials, 8 image-led industries, specification guide, prominent inquiry form, 22 global markets, and contact preview. |
| `/about` | **About Us** | Factual company overview, product portfolio scope, metallurgy spectrum, customer service approach, and industrial applications. |
| `/products` | **All Products** | Real-time search, category filters, material filters, specifications preview, and fast quote triggers. |
| `/products/:slug` | **Product Details** | Full technical specifications table, ASME/ASTM standards, dimension schedules, compatible materials, typical applications, pre-filled inquiry form, and related items. |
| `/materials` | **All Materials** | Metallurgy guide covering all 13 metal categories with properties, standard grades, and product counts. |
| `/materials/:slug` | **Material Products** | Dynamically filters and displays **only** products compatible with the selected material (e.g. `/materials/duplex`). |
| `/certificate` | **Certificates & Docs** | Interactive tabbed PDF viewer for **ISO 9001:2015** and **MSME Udyam Registration** with view, download, and open-in-new-tab features. |
| `/contact` | **Contact Us** | Office telephone, mobile, WhatsApp, full Mumbai address, interactive Google Map, and validated quotation form. |
| `*` | **404 Not Found** | Custom styled error page with working return home and product links. |

---

## ⚡ Key Upgraded Features

1. **Prominent Navbar & Mega Menus**:
   - **Products Mega Menu**: 8 categories with image thumbnails, key highlights, and direct navigation.
   - **Materials Mega Menu**: 3-column metallurgical grid covering all 13 metal categories.
   - **Certificate Dropdown**: Direct preview cards and PDF links for ISO 9001:2015 and MSME Udyam certificates.
   - **Mobile Drawer Accordions**: Touch-friendly expandable menus for smaller viewports.
2. **Split Hero Slider (Inspired by Logistics Ref)**:
   - Left side: Red eyebrow badge, large bold headline, description, and dual CTAs.
   - Right side: Large crystal-clear industrial photography, geometric framing, and a floating spec card.
   - Bottom benefit indicators: Ready Stock, ISO 9001:2015, Mill Test Reports (MTC), Direct Mumbai Dispatch.
   - Autoplay, pause on hover, previous/next controls, and pagination dots.
3. **Continuous Smooth Marquee**:
   - Seamless infinite ticker: `STAINLESS STEEL • CARBON STEEL • ALLOY STEEL • DUPLEX • SUPER DUPLEX • MONEL • INCONEL • HASTELLOY • TITANIUM • INDUSTRIAL PIPE FITTINGS • FLANGES`.
4. **Image-Led Industries We Serve**:
   - 8 authentic industrial photos: Oil & Gas, Petrochemical, Chemical Processing, Power Generation, Engineering & Manufacturing, Infrastructure & Construction, Water Treatment, and Marine & Shipbuilding.
5. **Quality & Specification Guide**:
   - Parameter breakdown (Grade, Category, Dimensions/Schedule, MTC documentation) for submitting accurate RFQs.
6. **Prominent Homepage Inquiry Form**:
   - 9-field form with client-side validation, RFC-compliant email formatting to `pawansteelalloys1986@gmail.com`, and WhatsApp direct action.
7. **Connecting with Customers Across Global Markets**:
   - Responsive grid of 22 target inquiry destinations with ISO country codes and regions.
8. **Fixed Floating Call and WhatsApp Buttons**:
   - Bottom-right action buttons with official WhatsApp vector SVG, pre-filled message, direct calling to `09850789923`, and accessible tooltips.
9. **Footer with Exact Sunmarg India Credit**:
   - Clickable credit: `Designed & SEO by Sunmarg India` linking to `https://sunmargindia.com/`.
10. **Technical SEO**:
    - `public/sitemap.xml` & `public/robots.txt`.
    - `schema.org` Organization & LocalBusiness JSON-LD structured data.
    - OpenGraph & Twitter Cards.
    - SPA rewrite rules (`_redirects` and `vercel.json`).

---

## 🚀 Running Locally

```bash
# 1. Inside pawansteelalloy directory:
npm run dev

# 2. To compile production bundle:
npm run build

# 3. Preview production build:
npm run preview
```
