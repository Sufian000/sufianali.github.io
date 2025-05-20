# Tim Cook Resume

A static HTML resume template showcasing the professional profile of Tim Cook, CEO of Apple Inc., built with Bootstrap 5 and custom CSS.

## Demo

A live demo can be viewed by opening the `tim_cook_resume.html` file in your browser.

## Features

- Responsive, mobile-first design using Bootstrap 5
- Smooth scrolling navigation with a fixed-top navbar
- Section accent bars for clear section headers
- Accordion component for detailed experience entries
- Carousel slideshow for portfolio highlights
- Custom progress bars to visualize skill proficiencies

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/tim-cook-resume.git
   ```
2. Navigate into the project directory:
   ```bash
   cd tim-cook-resume
   ```
3. Open the resume in your browser:
   ```bash
   open tim_cook_resume.html
   ```

## Usage

- **Edit Content:** Modify section text, lists, and links directly in the HTML.
- **Replace Images:** Swap placeholder images (`via.placeholder.com`) with your own assets.
- **Customize Styles:** Update the inline `<style>` block or link to an external stylesheet for further styling.

## Customization

### Header Background

Update the header background image URL:
```css
header { background: url('path/to/your-image.jpg') center/cover no-repeat; }
```

### Section Titles

Change accent bar color by modifying the `background` value in the `.section-title::after` rule.

### Skills Progress Bars

Adjust the `width` percentage in each progress bar to reflect different proficiency levels.

## File Structure

```
│   README.md             # Project documentation
│   tim_cook_resume.html  # Main HTML resume file
```