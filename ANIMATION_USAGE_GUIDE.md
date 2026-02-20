# Advanced Animation Usage Guide

## New AI/Research Style Animations

### 1. Blur to Focus
Smooth blur-to-clear effect with scale
```html
<div class="animate-blurToFocus">Content</div>
```
- Duration: 0.8s
- Easing: Expo out
- Effect: Blur 10px → 0, Scale 0.95 → 1

### 2. Elastic Scale
Bouncy scale-in effect
```html
<div class="animate-elasticScale">Content</div>
```
- Duration: 0.8s
- Easing: Elastic
- Effect: Scale 0.3 → 1.1 → 0.95 → 1

### 3. Smooth Slide Fade
Combined slide and scale
```html
<div class="animate-smoothSlideFade">Content</div>
```
- Duration: 0.8s
- Easing: Expo out
- Effect: Slide up 40px + Scale 0.95 → 1

### 4. Rotate Scale In
Rotating entrance
```html
<div class="animate-rotateScaleIn">Content</div>
```
- Duration: 0.8s
- Easing: Bounce
- Effect: Rotate -10deg → 0 + Scale 0.8 → 1

### 5. Pulse Glow
Continuous pulsing with glow
```html
<div class="animate-pulseGlow">Content</div>
```
- Duration: 2s infinite
- Effect: Shadow 20px → 40px + Scale 1 → 1.02

### 6. Shimmer Wave
Moving shimmer effect
```html
<div class="animate-shimmerWave">Content</div>
```
- Duration: 3s infinite
- Effect: Background position animation

### 7. Morph Shape
Organic shape morphing
```html
<div class="animate-morphShape">Content</div>
```
- Duration: 8s infinite
- Effect: Border-radius morphing

### 8. Glow Expand
Expanding glow ring
```html
<div class="animate-glowExpand">Content</div>
```
- Duration: 1s
- Effect: Box-shadow expands from 0 → 20px

### 9. Slide Bounce
Bouncy slide entrance
```html
<div class="animate-slideBounce">Content</div>
```
- Duration: 0.8s
- Easing: Bounce
- Effect: Slide up with bounce

### 10. Bounce In Down
Bounce from top
```html
<div class="animate-bounceInDown">Content</div>
```
- Duration: 1s
- Effect: Drop from top with bounce

### 11. Bounce In Up
Bounce from bottom
```html
<div class="animate-bounceInUp">Content</div>
```
- Duration: 1s
- Effect: Rise from bottom with bounce

## Usage Examples

### Hero Section with Advanced Animations
```jsx
<section className="hero">
  <h1 className="animate-blurToFocus">
    Transform Your Future
  </h1>
  <p className="animate-smoothSlideFade stagger-delay-200">
    Description text
  </p>
  <div className="animate-elasticScale stagger-delay-400">
    <button>Get Started</button>
  </div>
</section>
```

### Card Grid with Staggered Animations
```jsx
<div className="grid md:grid-cols-3 gap-8">
  {items.map((item, index) => (
    <div 
      key={index}
      className={`animate-smoothSlideFade stagger-delay-${(index + 1) * 100}`}
    >
      <div className="card hover-lift">
        {item.content}
      </div>
    </div>
  ))}
</div>
```

### Feature Section with Rotating Elements
```jsx
<div className="features">
  <div className="animate-rotateScaleIn">
    <img src="icon.svg" />
  </div>
  <h3 className="animate-slideBounce stagger-delay-200">
    Feature Title
  </h3>
  <p className="animate-fadeInUp stagger-delay-400">
    Description
  </p>
</div>
```

### Stats with Pulsing Glow
```jsx
<div className="stats-card animate-pulseGlow">
  <div className="text-4xl font-bold">500+</div>
  <div className="text-gray-400">Partners</div>
</div>
```

### Button with Glow Expand on Click
```jsx
<button 
  className="btn-primary"
  onClick={(e) => {
    e.target.classList.add('animate-glowExpand');
    setTimeout(() => {
      e.target.classList.remove('animate-glowExpand');
    }, 1000);
  }}
>
  Click Me
</button>
```

## Combining Animations

### Multiple Effects
```html
<div class="animate-smoothSlideFade hover-lift transition-elastic">
  Content with entrance + hover + smooth transition
</div>
```

### Sequential Reveals
```html
<div class="animate-blurToFocus stagger-delay-100">First</div>
<div class="animate-blurToFocus stagger-delay-200">Second</div>
<div class="animate-blurToFocus stagger-delay-300">Third</div>
```

### Continuous + Entrance
```html
<div class="animate-elasticScale">
  <div class="animate-morphShape">
    Morphing shape that scales in
  </div>
</div>
```

## Transition Classes

### Elastic Transition
```html
<div class="transition-elastic hover:scale-110">
  Smooth elastic transition on hover
</div>
```

### Expo Transition
```html
<div class="transition-expo hover:translate-y-2">
  Smooth expo easing
</div>
```

## Stagger Delays

Available delays: 100ms - 1000ms in 100ms increments

```html
<div class="animate-smoothSlideFade stagger-delay-100">Item 1</div>
<div class="animate-smoothSlideFade stagger-delay-200">Item 2</div>
<div class="animate-smoothSlideFade stagger-delay-300">Item 3</div>
```

## Performance Tips

1. Use `will-change: transform` for frequently animated elements
2. Prefer `transform` and `opacity` over other properties
3. Use `animation-fill-mode: forwards` to maintain end state
4. Limit simultaneous animations to 5-7 elements
5. Use `IntersectionObserver` for scroll-triggered animations

## Browser Support

All animations use standard CSS3:
- Chrome 43+
- Firefox 16+
- Safari 9+
- Edge 12+

## Accessibility

Respects `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Animation Timing Reference

- **Quick**: 0.3s - 0.5s (hover effects)
- **Standard**: 0.6s - 0.8s (entrances)
- **Dramatic**: 1s - 1.5s (special effects)
- **Continuous**: 2s - 8s (infinite loops)

## Easing Functions

- **Expo**: `cubic-bezier(0.16, 1, 0.3, 1)` - Smooth, fast end
- **Elastic**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` - Bouncy
- **Bounce**: `cubic-bezier(0.34, 1.56, 0.64, 1)` - Gentle bounce
- **Smooth**: `cubic-bezier(0.4, 0, 0.2, 1)` - Material design

