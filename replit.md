# Heinz Huber - Architekt Website

## Overview
This is a professional architect portfolio website for Heinz Huber, built as a static single-page application. The site showcases architectural services, philosophy, and project references with a clean, minimalist design that reflects modern architectural aesthetics. The website is designed in German and targets potential clients seeking architectural services including residential, commercial, and heritage restoration projects.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static HTML Structure**: Single-page application with semantic HTML5 sections
- **CSS-based Styling**: Custom CSS with modern design patterns including flexbox/grid layouts
- **Vanilla JavaScript**: Pure JavaScript for interactive features without external frameworks
- **Responsive Design**: Mobile-first approach with viewport meta tags and fluid layouts

### Design Patterns
- **Component-based Structure**: Modular sections (header, services, about, gallery) for easy maintenance
- **Progressive Enhancement**: Core content accessible without JavaScript, enhanced with smooth scrolling and animations
- **Intersection Observer API**: Modern web API for efficient scroll-based animations
- **CSS Custom Properties**: Consistent color scheme and spacing through CSS variables

### Performance Considerations
- **Minimal Dependencies**: No external JavaScript libraries or CSS frameworks
- **Optimized Animations**: Hardware-accelerated CSS transforms and opacity changes
- **Lazy Loading Approach**: Intersection Observer prevents unnecessary animations until elements are visible

### Content Strategy
- **Services Section**: Clear categorization of architectural specialties
- **Philosophy Section**: Personal branding and approach to architecture
- **Gallery/References**: Visual portfolio showcase (structure prepared for images)

## External Dependencies
This project has minimal external dependencies:

- **Web Browser APIs**: Intersection Observer API, DOM manipulation APIs
- **Font Resources**: Arial system font (no external font loading)
- **No Backend Services**: Fully static website requiring only web hosting
- **No Database**: Content is hardcoded in HTML structure
- **No Third-party Libraries**: Pure vanilla JavaScript and CSS implementation

The architecture supports easy deployment to any static hosting service and can be enhanced with a content management system or dynamic features as needed.