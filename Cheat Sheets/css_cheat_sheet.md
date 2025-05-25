# Complete CSS Cheat Sheet - Modern Web Development

## CSS Selectors

### Basic Selectors
| Selector | Syntax | Usage | Example |
|----------|--------|-------|---------|
| **Universal** | `*` | Selects all elements | `* { margin: 0; }` |
| **Type/Element** | `element` | Selects all elements of a type | `div { color: blue; }` |
| **Class** | `.classname` | Selects elements with specific class | `.button { padding: 10px; }` |
| **ID** | `#idname` | Selects element with specific ID | `#header { height: 100px; }` |
| **Attribute** | `[attribute]` | Selects elements with attribute | `[disabled] { opacity: 0.5; }` |

### Attribute Selectors (Advanced)
| Selector | Meaning | Example |
|----------|---------|---------|
| `[attr="value"]` | Exact match | `[type="text"] { border: 1px solid; }` |
| `[attr^="value"]` | Starts with | `[href^="https"] { color: green; }` |
| `[attr$="value"]` | Ends with | `[href$=".pdf"] { color: red; }` |
| `[attr*="value"]` | Contains | `[class*="btn"] { padding: 5px; }` |
| `[attr~="value"]` | Contains word | `[class~="active"] { font-weight: bold; }` |

### Combinators
| Combinator | Syntax | Meaning | Example |
|------------|--------|---------|---------|
| **Descendant** | `A B` | B inside A (any level) | `div p { margin: 10px; }` |
| **Child** | `A > B` | B direct child of A | `ul > li { list-style: none; }` |
| **Adjacent Sibling** | `A + B` | B immediately after A | `h1 + p { margin-top: 0; }` |
| **General Sibling** | `A ~ B` | B siblings after A | `h1 ~ p { color: gray; }` |

### Pseudo-classes
| Pseudo-class | Usage | Example |
|--------------|-------|---------|
| `:hover` | Mouse over | `button:hover { background: blue; }` |
| `:focus` | Element focused | `input:focus { outline: 2px solid blue; }` |
| `:active` | Element being clicked | `button:active { transform: scale(0.95); }` |
| `:visited` | Visited links | `a:visited { color: purple; }` |
| `:first-child` | First child element | `li:first-child { font-weight: bold; }` |
| `:last-child` | Last child element | `li:last-child { border-bottom: none; }` |
| `:nth-child(n)` | Nth child | `tr:nth-child(even) { background: #f0f0f0; }` |
| `:not()` | Not matching selector | `input:not([type="submit"]) { border: 1px solid; }` |
| `:empty` | Empty elements | `p:empty { display: none; }` |
| `:disabled` | Disabled form elements | `input:disabled { opacity: 0.5; }` |

### Pseudo-elements
| Pseudo-element | Usage | Example |
|----------------|-------|---------|
| `::before` | Insert content before | `.icon::before { content: "★"; }` |
| `::after` | Insert content after | `.tooltip::after { content: attr(data-tip); }` |
| `::first-letter` | First letter | `p::first-letter { font-size: 2em; }` |
| `::first-line` | First line | `p::first-line { font-weight: bold; }` |
| `::selection` | Selected text | `::selection { background: yellow; }` |
| `::placeholder` | Input placeholder | `input::placeholder { color: gray; }` |

---

## Layout Properties

### Display Types
| Property | Usage | When to Use |
|----------|-------|-------------|
| `display: block` | Full width, new line | Default for div, p, h1-h6 |
| `display: inline` | Content width, same line | Default for span, a, strong |
| `display: inline-block` | Content width, same line, accepts width/height | Buttons, inline elements that need sizing |
| `display: flex` | Flexible box layout | Most layouts, component alignment |
| `display: grid` | Grid-based layout | Complex layouts, 2D positioning |
| `display: none` | Hide completely | Conditional visibility |
| `visibility: hidden` | Hide but keep space | Keep layout, hide content |

**Flex vs Grid Decision:**
- **Use Flexbox** for 1D layouts (rows OR columns), component alignment, centering
- **Use Grid** for 2D layouts (rows AND columns), complex page layouts, overlapping content

### Flexbox Properties
#### Container Properties
| Property | Values | Usage |
|----------|--------|-------|
| `flex-direction` | `row`, `column`, `row-reverse`, `column-reverse` | Direction of items |
| `flex-wrap` | `nowrap`, `wrap`, `wrap-reverse` | Allow wrapping |
| `justify-content` | `flex-start`, `center`, `space-between`, `space-around`, `space-evenly` | Horizontal alignment |
| `align-items` | `stretch`, `flex-start`, `center`, `baseline`, `flex-end` | Vertical alignment |
| `align-content` | Same as justify-content | Align wrapped lines |
| `gap` | `10px`, `1rem` | Space between items |

#### Item Properties
| Property | Usage | Example |
|----------|-------|---------|
| `flex-grow` | How much to grow | `flex-grow: 1` (take available space) |
| `flex-shrink` | How much to shrink | `flex-shrink: 0` (don't shrink) |
| `flex-basis` | Initial size | `flex-basis: 200px` |
| `flex` | Shorthand | `flex: 1 0 auto` (grow, shrink, basis) |
| `align-self` | Override align-items | `align-self: center` |

### Grid Properties
#### Container Properties
| Property | Usage | Example |
|----------|-------|---------|
| `grid-template-columns` | Define columns | `grid-template-columns: 1fr 2fr 1fr` |
| `grid-template-rows` | Define rows | `grid-template-rows: auto 1fr auto` |
| `grid-template-areas` | Named areas | `grid-template-areas: "header header" "sidebar main"` |
| `grid-gap` / `gap` | Spacing | `gap: 20px 10px` (row column) |
| `justify-items` | Horizontal item alignment | `justify-items: center` |
| `align-items` | Vertical item alignment | `align-items: start` |

#### Item Properties
| Property | Usage | Example |
|----------|-------|---------|
| `grid-column` | Column span | `grid-column: 1 / 3` or `grid-column: span 2` |
| `grid-row` | Row span | `grid-row: 1 / -1` (full height) |
| `grid-area` | Named area | `grid-area: header` |

---

## Positioning

### Position Types
| Value | Behavior | Use Case |
|-------|----------|----------|
| `static` | Normal flow (default) | Regular content |
| `relative` | Normal flow + offset | Small adjustments, positioning context |
| `absolute` | Removed from flow, positioned relative to nearest positioned ancestor | Overlays, tooltips, modals |
| `fixed` | Positioned relative to viewport | Navigation bars, floating buttons |
| `sticky` | Relative until scroll threshold | Sticky headers, table headers |

**Positioning Offset Properties:** `top`, `right`, `bottom`, `left`

### Z-Index Management
```css
/* Common z-index layers */
.background { z-index: -1; }
.content { z-index: 1; }
.header { z-index: 10; }
.dropdown { z-index: 100; }
.modal { z-index: 1000; }
.tooltip { z-index: 10000; }
```

---

## Box Model

### Box Sizing
| Value | Behavior | When to Use |
|-------|----------|-------------|
| `content-box` | Width/height applies to content only | Default, legacy layouts |
| `border-box` | Width/height includes padding and border | **Recommended for all elements** |

```css
/* Modern reset */
*, *::before, *::after {
  box-sizing: border-box;
}
```

### Spacing Properties
| Property | Usage | Example |
|----------|-------|---------|
| `margin` | External spacing | `margin: 10px 20px` (vertical horizontal) |
| `padding` | Internal spacing | `padding: 1rem` |
| `border` | Element border | `border: 2px solid #333` |

**Margin vs Padding Decision:**
- **Margin**: Space between elements, can collapse, use for layout spacing
- **Padding**: Space within element, never collapses, use for content spacing

---

## Typography

### Font Properties
| Property | Usage | Example |
|----------|-------|---------|
| `font-family` | Font stack | `font-family: 'Helvetica', Arial, sans-serif` |
| `font-size` | Text size | `font-size: 1.2rem` |
| `font-weight` | Text thickness | `font-weight: 400` (normal), `700` (bold) |
| `line-height` | Line spacing | `line-height: 1.5` (unitless preferred) |
| `letter-spacing` | Character spacing | `letter-spacing: 0.05em` |
| `text-align` | Horizontal alignment | `text-align: center` |
| `text-decoration` | Underlines, strikethrough | `text-decoration: none` |
| `text-transform` | Case transformation | `text-transform: uppercase` |

### Modern Font Loading
```css
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap; /* Improves loading performance */
}
```

---

## Colors and Backgrounds

### Color Formats
| Format | Usage | Example |
|--------|-------|---------|
| **Hex** | Simple colors | `#ff0000`, `#f00` |
| **RGB** | When you need alpha | `rgb(255, 0, 0)` |
| **RGBA** | Transparency | `rgba(255, 0, 0, 0.5)` |
| **HSL** | Color manipulation | `hsl(0, 100%, 50%)` |
| **HSLA** | HSL with transparency | `hsla(0, 100%, 50%, 0.5)` |
| **CSS Variables** | Reusable colors | `var(--primary-color)` |

### Background Properties
| Property | Usage | Example |
|----------|-------|---------|
| `background-color` | Solid color | `background-color: #f0f0f0` |
| `background-image` | Image/gradient | `background-image: url('image.jpg')` |
| `background-size` | Image sizing | `background-size: cover` |
| `background-position` | Image position | `background-position: center` |
| `background-repeat` | Image repetition | `background-repeat: no-repeat` |
| `background-attachment` | Scroll behavior | `background-attachment: fixed` |

### Modern Gradients
```css
/* Linear gradient */
background: linear-gradient(45deg, #ff6b6b, #4ecdc4);

/* Radial gradient */
background: radial-gradient(circle, #ff6b6b, #4ecdc4);

/* Multiple backgrounds */
background: 
  linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
  url('image.jpg');
```

---

## Responsive Design

### Media Queries
```css
/* Mobile First Approach (Recommended) */
/* Base styles for mobile */
.container { width: 100%; }

/* Tablet */
@media (min-width: 768px) {
  .container { width: 750px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { width: 1200px; }
}

/* Common Breakpoints */
/* Mobile: 320px - 767px */
/* Tablet: 768px - 1023px */
/* Desktop: 1024px+ */
```

### Responsive Units
| Unit | Usage | When to Use |
|------|-------|-------------|
| `px` | Fixed pixels | Borders, small details |
| `%` | Relative to parent | Widths, layout proportions |
| `em` | Relative to element font-size | Spacing related to text |
| `rem` | Relative to root font-size | **Preferred for most spacing** |
| `vw/vh` | Viewport width/height | Full-screen elements |
| `vmin/vmax` | Smaller/larger viewport dimension | Square elements |
| `ch` | Character width | Text-based sizing |

**rem vs em Decision:**
- **rem**: Consistent sizing throughout the site, easier to maintain
- **em**: When you want scaling relative to the element's font size

---

## Animations and Transitions

### Transitions
```css
/* Basic transition */
.button {
  transition: background-color 0.3s ease;
}

/* Multiple properties */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* All properties */
.element {
  transition: all 0.3s ease;
}
```

### Animations
```css
/* Define keyframes */
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

/* Apply animation */
.slide-element {
  animation: slideIn 0.5s ease-out;
}

/* Animation properties */
.complex-animation {
  animation: 
    slideIn 0.5s ease-out,
    fadeIn 0.3s ease-in 0.2s both;
}
```

### Transform Functions
| Function | Usage | Example |
|----------|-------|---------|
| `translate()` | Move element | `transform: translate(10px, 20px)` |
| `scale()` | Resize element | `transform: scale(1.2)` |
| `rotate()` | Rotate element | `transform: rotate(45deg)` |
| `skew()` | Skew element | `transform: skew(15deg)` |

---

## Modern CSS Features

### CSS Variables (Custom Properties)
```css
/* Define variables */
:root {
  --primary-color: #007bff;
  --font-size-large: 1.5rem;
  --spacing-unit: 8px;
}

/* Use variables */
.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-large);
  padding: calc(var(--spacing-unit) * 2);
}
```

### CSS Functions
| Function | Usage | Example |
|----------|-------|---------|
| `calc()` | Mathematical calculations | `width: calc(100% - 20px)` |
| `min()` | Minimum value | `width: min(100%, 600px)` |
| `max()` | Maximum value | `font-size: max(1rem, 4vw)` |
| `clamp()` | Constrained value | `font-size: clamp(1rem, 4vw, 2rem)` |
| `var()` | CSS variables | `color: var(--text-color, black)` |

### Container Queries (Modern)
```css
/* Container query */
.card {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .card-content {
    display: flex;
  }
}
```

---

## Key Principles

### 1. Specificity
CSS specificity determines which styles apply when multiple rules target the same element.

**Specificity Weight (highest to lowest):**
1. Inline styles (`style="..."`) - 1000 points
2. IDs (`#header`) - 100 points
3. Classes, attributes, pseudo-classes (`.button`, `[type="text"]`, `:hover`) - 10 points
4. Elements and pseudo-elements (`div`, `::before`) - 1 point

```css
/* Examples */
div { color: black; }                    /* Specificity: 1 */
.text { color: blue; }                    /* Specificity: 10 */
div.text { color: green; }               /* Specificity: 11 */
#header .text { color: red; }            /* Specificity: 110 */
```

**Best Practice:** Keep specificity low, avoid `!important`

### 2. Cascade
When specificity is equal, the last rule in the source code wins.

```css
.button { color: blue; }
.button { color: red; }  /* This wins */
```

### 3. Inheritance
Some properties inherit from parent to child elements.

**Properties that inherit:** `color`, `font-family`, `font-size`, `line-height`, `text-align`
**Properties that don't inherit:** `margin`, `padding`, `border`, `background`, `width`, `height`

```css
/* Force inheritance */
.child { color: inherit; }

/* Prevent inheritance */
.child { color: initial; }
```

### 4. Box Model
Every element is a rectangular box with content, padding, border, and margin.

```css
/* Visual box model debugging */
* {
  outline: 1px solid red;
}
```

### 5. Mobile-First Design
Start with mobile styles, then enhance for larger screens.

```css
/* Mobile first */
.container { 
  padding: 1rem; 
  font-size: 14px;
}

/* Enhance for larger screens */
@media (min-width: 768px) {
  .container { 
    padding: 2rem; 
    font-size: 16px;
  }
}
```

---

## Essential CSS Terms

### Layout Terms
- **Normal Flow**: Default document layout where elements stack vertically
- **Containing Block**: The reference box for positioning and sizing calculations
- **Stacking Context**: 3D layering of elements (z-index behavior)
- **Block Formatting Context (BFC)**: Independent layout environment
- **Intrinsic vs Extrinsic Sizing**: Content-based vs explicit sizing

### Modern Development Terms
- **CSS-in-JS**: Writing CSS within JavaScript (styled-components, emotion)
- **Utility-First CSS**: Small, single-purpose classes (Tailwind CSS)
- **CSS Modules**: Locally scoped CSS
- **PostCSS**: Tool for transforming CSS with JavaScript
- **CSS Houdini**: Low-level APIs for extending CSS
- **Logical Properties**: Direction-agnostic properties (`margin-inline-start` vs `margin-left`)

### Performance Terms
- **Critical CSS**: Above-the-fold styles loaded immediately
- **CSS Containment**: Isolating parts of the page for better performance
- **Will-change**: Hint to browser about upcoming changes
- **Paint, Layout, Composite**: Browser rendering phases

### Methodology Terms
- **BEM**: Block Element Modifier naming convention
- **OOCSS**: Object-Oriented CSS
- **SMACSS**: Scalable and Modular Architecture for CSS
- **Atomic CSS**: Single-purpose utility classes

---

## Common Gotchas and Solutions

### Margin Collapse
Adjacent vertical margins combine into a single margin.

```css
/* Problem */
.box1 { margin-bottom: 20px; }
.box2 { margin-top: 30px; }
/* Actual gap is 30px, not 50px */

/* Solutions */
.container { overflow: hidden; } /* Create BFC */
.container { display: flex; }    /* Flexbox prevents collapse */
```

### Centering Solutions
```css
/* Horizontal centering */
.center-horizontal {
  margin: 0 auto;  /* Block elements with defined width */
  text-align: center;  /* Inline elements */
}

/* Vertical centering */
.center-vertical {
  display: flex;
  align-items: center;  /* Flexbox */
}

/* Both directions */
.center-both {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Clearfix (for legacy floats)
```css
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

This cheat sheet covers the essential CSS knowledge for modern web development. Keep it handy for quick reference during development!