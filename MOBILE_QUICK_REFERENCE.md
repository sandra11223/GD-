# Mobile Optimization - Quick Reference

## 🎯 Key Mobile Features

### Dashboard Mobile Menu
- **Toggle**: Floating green button (bottom-right corner)
- **Behavior**: Slides in from left with backdrop overlay
- **Close**: Tap backdrop or X button
- **Desktop**: Always visible sidebar

### Main Navigation
- **Mobile**: Hamburger menu (< 768px)
- **Tablet**: Full navigation (≥ 768px)
- **Touch**: All buttons 44px minimum

### Responsive Breakpoints
```
sm:  640px  (Small tablets)
md:  768px  (Tablets)
lg:  1024px (Small desktops)
xl:  1280px (Desktops)
2xl: 1536px (Large screens)
```

## 📱 Mobile-Specific Classes

### Layout
```css
mobile-px          /* Responsive padding-x */
mobile-py          /* Responsive padding-y */
mobile-grid-1      /* 1→2→3 column grid */
```

### Typography
```css
text-responsive-sm    /* Mobile-optimized small */
text-responsive-base  /* Mobile-optimized base */
text-responsive-lg    /* Mobile-optimized large */
```

### Utilities
```css
tap-target         /* 44px minimum tap area */
hide-mobile        /* Hidden on mobile */
smooth-scroll      /* Touch scrolling */
```

## 🔧 Common Patterns

### Responsive Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Content */}
</div>
```

### Responsive Text
```jsx
<h1 className="text-3xl md:text-5xl lg:text-7xl">
  Heading
</h1>
```

### Responsive Spacing
```jsx
<section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
  {/* Content */}
</section>
```

### Touch-Friendly Button
```jsx
<button className="tap-target px-6 py-3 min-h-[44px]">
  Click Me
</button>
```

## ✅ Mobile Checklist

### Before Launch
- [ ] Test on iPhone (375px, 390px, 430px)
- [ ] Test on Android (360px, 393px)
- [ ] Test on iPad (768px, 1024px)
- [ ] No horizontal scrolling
- [ ] All buttons tappable (44px min)
- [ ] Forms work properly
- [ ] Images load correctly
- [ ] Navigation smooth
- [ ] Page load < 3s on 3G

### Performance
- [ ] Lighthouse Mobile Score > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Images optimized (WebP/AVIF)

### Accessibility
- [ ] Touch targets 44px+
- [ ] Text readable (16px min)
- [ ] Color contrast 4.5:1+
- [ ] Screen reader friendly
- [ ] Keyboard navigation

## 🚀 Quick Fixes

### Text Too Small
```jsx
// ❌ Bad
<p className="text-xs">Text</p>

// ✅ Good
<p className="text-base">Text</p>
```

### Button Too Small
```jsx
// ❌ Bad
<button className="px-2 py-1">Click</button>

// ✅ Good
<button className="tap-target px-6 py-3">Click</button>
```

### Not Responsive
```jsx
// ❌ Bad
<div className="w-[800px]">Content</div>

// ✅ Good
<div className="w-full max-w-4xl">Content</div>
```

### Horizontal Scroll
```css
/* Add to globals.css */
body {
  overflow-x: hidden;
  max-width: 100vw;
}
```

## 📊 Testing URLs

### Local
- Desktop: http://localhost:3000
- Mobile: http://[YOUR_IP]:3000

### Chrome DevTools
1. F12 → Toggle Device Toolbar
2. Select device (iPhone, iPad, etc.)
3. Test all pages

### Real Device
1. Connect to same WiFi
2. Find computer IP: `ipconfig` (Windows) or `ifconfig` (Mac)
3. Visit: http://[IP]:3000

## 🎨 Mobile Design Tips

1. **Mobile-First**: Design for mobile, enhance for desktop
2. **Touch Targets**: 44px minimum, 48px recommended
3. **Spacing**: More generous on mobile
4. **Typography**: Larger, more readable
5. **Navigation**: Simple, accessible
6. **Forms**: Large inputs, clear labels
7. **Images**: Optimized, responsive
8. **Performance**: Fast, smooth

## 📞 Support

### Issues?
1. Check `MOBILE_OPTIMIZATION.md` for details
2. Review `MOBILE_OPTIMIZATION_SUMMARY.md`
3. Test in Chrome DevTools
4. Check console for errors

### Documentation
- `frontend/MOBILE_OPTIMIZATION.md` - Full guide
- `MOBILE_OPTIMIZATION_SUMMARY.md` - Complete summary
- `MOBILE_QUICK_REFERENCE.md` - This file

---

**Quick Tip**: Always test on real devices before launch!
