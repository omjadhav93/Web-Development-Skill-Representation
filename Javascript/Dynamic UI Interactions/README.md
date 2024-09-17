# Dynamic UI Interactions with JavaScript

This section showcases interactive UI elements built with JavaScript that enhance user experience by dynamically updating content and improving user engagement. Each example demonstrates efficient coding practices and creative solutions for common UI needs.

## [Running Counter Effect](./running_counter_effect.js)

The **Running Counter Effect** dynamically animates numerical values, making it perfect for showcasing important business metrics like customer growth, sales numbers, or achievements.

### Key Features:
- **Smooth Counting Animation**: The counter starts at 0 and increments until it reaches a pre-defined target.
- **Adaptive Speed**: The increment speed is based on the target value, ensuring smooth transitions even for large numbers.
- **Lazy Loading**: Using `IntersectionObserver`, the counter animation only starts when the section is in view, improving performance.

### How It Works:
- Targets all elements with the `.achieve-num` class.
- Initializes the number at 0 and increments it until the target number is reached.
- The increment speed is adjusted for larger numbers to avoid long loading times.

### Usage:
This effect is ideal for landing pages, dashboards, and portfolio websites where you want to highlight key statistics in an engaging way.
