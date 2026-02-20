# Global Education Council - Design System

## Overview
A modern, premium design system featuring 3D card effects, glassmorphism, and smooth animations while maintaining the emerald/green color theme.

---

## Color Palette

### Primary Colors
- **Emerald 400**: `#34d399` - Primary actions, highlights
- **Emerald 500**: `#10b981` - Main brand color
- **Green 500**: `#22c55e` - Secondary brand color
- **Teal 500**: `#14b8a6` - Accent color

### Background Colors
- **Gray 950**: `#030712` - Deep background
- **Gray 900**: `#111827` - Primary background
- **Gray 800**: `#1f2937` - Card backgrounds
- **Black**: `#000000` - Pure black sections

### Opacity Levels
- Cards: `50-80%` opacity with backdrop blur
- Borders: `20-40%` opacity
- Shadows: `10-30%` opacity
- Overlays: `40-90%` opacity

---

## Typography

### Font Sizes
- **Hero Heading**: `text-5xl md:text-6xl lg:text-7xl` (48-72px)
- **Section Heading**: `text-4xl md:text-5xl` (36-48px)
- **Card Title**: `text-2xl md:text-3xl` (24-30px)
- **Body Large**: `text-lg md:text-xl` (18-20px)
- **Body**: `text-base` (16px)
- **Small**: `text-sm` (14px)
- **Tiny**: `text-xs` (12px)

### Font Weights
- **Bold**: `font-bold` (700)
- **Semibold**: `font-semibold` (600)
- **Medium**: `font-medium` (500)
- **Regular**: `font-normal` (400)

---

## Spacing System

### Container Padding
- Mobile: `px-4` (16px)
- Tablet: `sm:px-6` (24px)
- Desktop: `lg:px-8` (32px)

### Section Spacing
- Vertical: `py-16 md:py-20 lg:py-24` (64-96px)
- Between elements: `space-y-6 md:space-y-8` (24-32px)

### Card Padding
- Small: `p-4 md:p-6` (16-24px)
- Medium: `p-6 md:p-8` (24-32px)
- Large: `p-8 md:p-10` (32-40px)

---

## Card Components

### 3D Card (Primary)
```css
.card-3d {
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8));
  backdrop-filter: blur(24px);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 1rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-3d:hover {
  transform: translateY(-8px) rotateX(2deg);
  border-color: rgba(16, 185, 129, 0.4);
  box-shadow: 0 25px 60px rgba(16, 185, 129, 0.3);
}
```

### Glass Card (Secondary)
```css
.glass-card-modern {
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.5));
  backdrop-filter: blur(32px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}
```

### Pricing Card
```css
.pricing-card {
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.6), rgba(17, 24, 39, 0.6));
  backdrop-filter: blur(20px);
  border: 2px solid rgba(16, 185, 129, 0.3);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.4s ease;
}

.pricing-card:hover {
  transform: translateY(-12px) scale(1.02);
  border-color: rgba(16, 185, 129, 0.6);
  box-shadow: 0 30px 70px rgba(16, 185, 129, 0.4);
}
```

---

## Button Styles

### Primary Button
```css
.btn-primary {
  background: linear-gradient(135deg, #34d399, #22c55e);
  color: #111827;
  padding: 0.75rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #10b981, #16a34a);
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 15px 40px rgba(16, 185, 129, 0.5);
}
```

### Secondary Button
```css
.btn-secondary {
  background: rgba(31, 41, 55, 0.8);
  backdrop-filter: blur(12px);
  color: #34d399;
  padding: 0.75rem 2rem;
  border: 2px solid rgba(16, 185, 129, 0.4);
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.6);
  transform: translateY(-2px);
}
```

---

## Background Effects

### Gradient Blobs
```css
.blob-background {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.2), transparent);
  filter: blur(120px);
  animation: blob 7s infinite;
}

@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
```

### Grid Pattern
```css
.tech-grid {
  background-image: 
    linear-gradient(rgba(16, 185, 129, 0.05) 1.5px, transparent 1.5px),
    linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1.5px, transparent 1.5px);
  background-size: 75px 75px;
}
```

---

## Shadow System

### Elevation Levels
- **Level 1**: `shadow-lg` - `0 10px 30px rgba(0, 0, 0, 0.3)`
- **Level 2**: `shadow-xl` - `0 15px 40px rgba(0, 0, 0, 0.4)`
- **Level 3**: `shadow-2xl` - `0 20px 50px rgba(0, 0, 0, 0.5)`

### Glow Effects
- **Emerald Glow**: `0 10px 30px rgba(16, 185, 129, 0.3)`
- **Emerald Glow Large**: `0 15px 40px rgba(16, 185, 129, 0.5)`
- **Emerald Glow XL**: `0 25px 60px rgba(16, 185, 129, 0.4)`

---

## Animation System

### Transitions
- **Fast**: `150ms` - Micro-interactions
- **Normal**: `300ms` - Standard transitions
- **Slow**: `500ms` - Card hovers
- **Extra Slow**: `700ms` - Image zooms

### Easing Functions
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Smooth**: `cubic-bezier(0.23, 1, 0.32, 1)`
- **Bounce**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`

### Hover Effects
```css
/* Card Lift */
.hover-lift {
  transition: transform 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-8px);
}

/* Image Zoom */
.hover-zoom {
  transition: transform 0.7s ease;
}
.hover-zoom:hover {
  transform: scale(1.1);
}

/* Button Scale */
.hover-scale {
  transition: transform 0.3s ease;
}
.hover-scale:hover {
  transform: scale(1.05);
}
```

---

## Layout Patterns

### Hero Section
- Full viewport height: `min-h-screen`
- Centered content: `flex items-center justify-center`
- Max width: `max-w-7xl mx-auto`
- Gradient background with blobs
- Grid pattern overlay at 10% opacity

### Service Cards
- Grid: `grid md:grid-cols-2 lg:grid-cols-3 gap-6`
- 3D card effect with hover transform
- Image with gradient overlay
- Icon with gradient background
- CTA button at bottom

### Pricing Cards
- Grid: `grid md:grid-cols-3 gap-8`
- Featured card: Larger scale, stronger border
- Hover: Lift and scale effect
- Badge for featured plan
- List with checkmark icons

### Dashboard Cards
- Grid: `grid md:grid-cols-2 lg:grid-cols-4 gap-6`
- Glass effect background
- Icon with gradient
- Large number display
- Subtle hover effect

---

## Image Treatments

### Overlay Gradients
```css
/* Dark Overlay */
.image-overlay-dark {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), transparent);
}

/* Emerald Overlay */
.image-overlay-emerald {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), transparent);
}
```

### Border Effects
- Standard: `border-2 border-emerald-500/30`
- Hover: `border-emerald-500/60`
- Featured: `border-4 border-emerald-500/50`

---

## Responsive Breakpoints

- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`
- **Large Desktop**: `> 1280px`

### Mobile Optimizations
- Stack cards vertically
- Reduce padding: `p-4` instead of `p-8`
- Smaller text sizes
- Full-width buttons
- Hide decorative elements

---

## Accessibility

### Focus States
```css
.focus-visible {
  outline: 2px solid #34d399;
  outline-offset: 2px;
}
```

### Color Contrast
- Text on dark: Minimum 4.5:1 ratio
- Emerald on dark: AAA compliant
- White on emerald: AAA compliant

### Motion
- Respect `prefers-reduced-motion`
- Provide static alternatives
- Keep animations under 500ms

---

## Implementation Guidelines

### Page Structure
1. Hero section with gradient background
2. Services/features with 3D cards
3. Stats/metrics with glass cards
4. CTA section with gradient
5. Footer with dark background

### Card Hierarchy
1. **Primary**: 3D cards for main content
2. **Secondary**: Glass cards for supporting content
3. **Tertiary**: Simple bordered cards for lists

### Spacing Consistency
- Use 8px base unit (Tailwind's spacing scale)
- Maintain consistent gaps between sections
- Use max-width containers for readability

---

## Code Examples

### Hero Section Template
```jsx
<section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
    <div className="absolute inset-0 tech-grid opacity-10"></div>
    <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-emerald-500/20 rounded-full filter blur-[120px] animate-blob"></div>
  </div>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      {/* Content */}
    </div>
  </div>
</section>
```

### 3D Card Template
```jsx
<div className="card-3d p-8 group">
  <div className="flex items-center gap-4 mb-6">
    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-emerald-glow">
      {/* Icon */}
    </div>
    <h3 className="text-2xl font-bold text-white">Title</h3>
  </div>
  <p className="text-gray-300 mb-6">Description</p>
  <button className="btn-primary">Action</button>
</div>
```

---

## Maintenance

### Version Control
- Document all design changes
- Keep component library updated
- Test across browsers and devices

### Performance
- Optimize images (WebP format)
- Lazy load below-fold content
- Minimize animation complexity
- Use CSS transforms over position changes

---

**Last Updated**: January 2024
**Version**: 1.0.0
