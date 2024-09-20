# Dynamic UI Interactions with JavaScript

This section showcases interactive UI elements built with JavaScript that enhance user experience by dynamically updating content and improving user engagement. Each example demonstrates efficient coding practices and creative solutions for common UI needs.

## Running Counter Effect

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

**[View Code](./running_counter_effect.js)**

---

## Seller Image Upload UI with Color Selection

This feature allows sellers to add product images corresponding to different color variants while listing their products on the E-Commerce platform. The UI ensures ease of use by dynamically generating input fields based on selected colors and enforcing image upload limits.

### Key Features:
- **Dynamic UI Generation**: When sellers select color options, input fields for adding images are automatically created for each selected color.
- **Image Upload Limit Enforcement**: Sellers can upload a maximum of 5 images per color variant. The UI enforces this limit to ensure that only valid numbers of images are uploaded.
- **Image Previews**: After selecting images, sellers can view a preview of the uploaded images for each color variant.
- **Remove Uploaded Images**: Sellers can remove previously uploaded images, and the UI will adjust accordingly.
- **Lazy File Inputs**: New file inputs appear as needed, allowing for smooth image addition without cluttering the UI.

### How It Works:
- **Dynamic Image Inputs**: As sellers select color options (via checkboxes), the script generates file input fields for uploading images related to that color. If a color is deselected, the corresponding image input is removed.
- **Image Uploading**: Sellers can upload up to 5 images per color. Once 5 images have been uploaded for a particular color, further image input fields are disabled.
- **Preview Functionality**: After the user selects images, thumbnails of the images are shown in the UI to give a preview of the uploaded files.
- **Remove Functionality**: Sellers can remove an entire set of uploaded images at any time, and the input fields will be restored if the total number of uploaded images for that color drops below 5.
- **Validation**: The script checks if the uploaded images exceed the limit of 5 before accepting the files. If the limit is exceeded, it will show an alert and discard the extra images.

**[View Code](./add_image_with_color.js)**
