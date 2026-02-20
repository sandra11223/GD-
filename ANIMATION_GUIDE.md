# Lofi Green Tech Industrial Animation Guide

## Available Animations

### 1. Entrance Animations

#### Fade Animations
- `animate-fadeIn` - Simple fade in
- `animate-fadeInUp` - Fade in from bottom
- `animate-fadeInDown` - Fade in from top
- `animate-fadeInLeft` - Fade in from left
- `animate-fadeInRight` - Fade in from right

#### Slide Animations
- `animate-slideInUp` - Slide up with reveal effect
- `animate-slideInLeft` - Slide from left
- `animate-slideInRight` - Slide from right
- `animate-slideUpReveal` - Smooth slide up with bounce

#### Scale Animations
- `animate-scaleIn` - Scale from 90% to 100%
- `animate-bounceIn` - Bounce scale effect
- `animate-zoomIn` - Zoom from 50% to 100%

#### Special Effects
- `animate-flipIn` - 3D flip entrance
- `animate-rotateIn` - Rotate and scale in
- `animate-revealText` - Text reveal with clip-path

### 2. Continuous Animations

- `animate-float` - Gentle up/down floating (6s loop)
- `animate-pulse` - Opacity pulse (2s loop)
- `animate-pulse-slow` - Slow opacity + scale pulse (3s loop)
- `animate-shimmer` - Shimmer effect for text
- `animate-parallaxFloat` - Complex floating pattern (8s loop)
- `animate-glowPulse` - Pulsing glow effect (2s loop)
- `animate-borderGlow` - Pulsing border glow (3s loop)

### 3. Scroll-Triggered Animations

```html
<div class="scroll-reveal">
  <!-- Content animates when scrolled into view -->
</div>
```

Features:
- Fades in from bottom
- Smooth cubic-bezier easing
- Automatically triggered by IntersectionObserver

### 4. Hover Effects

- `hover-lift` - Lifts element up 12px on hover
- `hover-scale` - Scales to 105% on hover
- `hover-glow` - Adds emerald glow on hover
- `hover-border-glow` - Glowing border on hover

### 5. Animation Delays

Use with any animation for staggered effects:

```html
<div class="animate-fadeInUp stagger-1">First</div>
<div class="animate-fadeInUp stagger-2">Second</div>
<div class="animate-fadeInUp stagger-3">Third</div>
```

Available delays:
- `stagger-1` through `stagger-8` (0.1s - 0.8s)
- `animation-delay-200` (200ms)
- `animation-delay-400` (400ms)
- `animation-delay-600` (600ms)
- `animation-delay-800` (800ms)
- `animation-delay-2000` (2s)
- `animation-delay-4000` (4s)
- `animation-delay-6000` (6s)

### 6. Transition Utilities

- `transition-smooth` - Standard smooth transition
- `transition-bounce` - Bouncy transition
- `transition-elastic` - Elastic transition

## Usage Examples

### Hero Section with Staggered Text

```jsx
<h1>
  <div className="overflow-hidden">
    <span className="block animate-slideInUp">Transform Your</span>
  </div>
  <div className="overflow-hidden">
    <span className="block animate-slideInUp animation-delay-200">
      Educational Future
    </span>
  </div>
</h1>
```

### Card Grid with Scroll Reveal

```jsx
<div className="grid md:grid-cols-3 gap-8">
  {items.map((item, index) => (
    <div 
      key={index}
      className={`scroll-reveal stagger-${index + 1}`}
    >
      <div className="floating-card hover-lift">
        {/* Card content */}
      </div>
    </div>
  ))}
</div>
```

### Floating Geometric Shapes

```jsx
<div className="absolute top-20 left-10 w-64 h-64 border border-emerald-500/20 rounded-full animate-float"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 border border-emerald-500/10 rounded-full animate-float animation-delay-2000"></div>
```

### Animated Badge

```jsx
<div className="inline-flex items-center gap-3 px-5 py-2.5 bg-black/40 backdrop-blur-md border border-emerald-500/30 rounded-full animate-fadeInDown">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
  </span>
  <span className="text-sm font-semibold text-emerald-400">TRUSTED WORLDWIDE</span>
</div>
```

### Button with Hover Effect

```jsx
<button className="group relative px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-1">
  <span className="relative z-10">Get Started</span>
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
```

### Image with Zoom Effect

```jsx
<div className="relative overflow-hidden rounded-2xl group">
  <img 
    src="image.jpg"
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
</div>
```

## Animation Timing

### Recommended Durations
- Quick interactions: 150-300ms
- Standard animations: 300-600ms
- Dramatic effects: 600-1000ms
- Continuous loops: 2-8s

### Easing Functions
- `ease-out` - Fast start, slow end (entrances)
- `ease-in` - Slow start, fast end (exits)
- `ease-in-out` - Smooth both ends (general)
- `cubic-bezier(0.34, 1.56, 0.64, 1)` - Bounce effect
- `cubic-bezier(0.4, 0, 0.2, 1)` - Material design

## Performance Tips

1. Use `transform` and `opacity` for animations (GPU accelerated)
2. Add `will-change: transform` for frequently animated elements
3. Use `IntersectionObserver` for scroll animations
4. Limit simultaneous animations to 3-5 elements
5. Use `animation-fill-mode: forwards` to maintain end state
6. Avoid animating `width`, `height`, `top`, `left` (causes reflow)

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

This respects user preferences for reduced motion.

## Browser Support

All animations use standard CSS3 properties supported by:
- Chrome 43+
- Firefox 16+
- Safari 9+
- Edge 12+

## Implementation Status

✅ All animation keyframes defined
✅ Utility classes created
✅ Scroll reveal implemented
✅ Hover effects added
✅ Stagger delays configured
✅ Performance optimized
✅ Accessibility considered

