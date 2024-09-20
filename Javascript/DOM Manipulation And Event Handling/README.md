# DOM Manipulation and Event Handling in JavaScript

In modern web applications, managing the Document Object Model (DOM) and handling user events are critical to creating dynamic and interactive user experiences. This section highlights my work in manipulating the DOM, adding and updating UI components, and efficiently managing user interactions through event handling.

### Key Concepts:
- Dynamically creating and updating UI elements based on user actions.
- Handling events efficiently, such as detecting clicks inside or outside elements and managing form interactions.
- Ensuring a seamless user experience when interacting with dynamic content.

## Examples:

### 1. **Dynamic Brand Management Form**
This example demonstrates how I dynamically create a form for sellers to add or edit brand details. The form covers the entire screen and adjusts based on the context (whether the user is adding a new brand or editing an existing one). The form includes functionality to prepopulate fields with existing brand data when editing, dynamically handle image uploads, and offer UI feedback to users through event listeners on form inputs.

#### **How It Works:**
- A background div is created to cover the entire screen, ensuring the form is centered and focused.
- The form's heading and content are dynamically generated, either for adding a new brand or editing existing brand details.
- Input fields are pre-filled if the form is generated for editing, including fetching and previewing the brand’s logo.
- Event listeners are added to input fields to manage UI changes, such as marking fields with content as "filled" for better UX.

**[View Code](./dynamic_brand_management_form.js)**

---

### 2. **Custom Select Button with Outside Click Detection**
This example showcases a custom-designed `<select>` button where users can choose from a list of options. The options list opens when the user clicks the button and automatically closes when the user either selects an option or clicks outside the button. The code demonstrates how to toggle the options list visibility and handle click events outside the button for an intuitive user experience.

#### **How It Works:**
- When the user clicks the select button, a list of options appears. This list is toggled by adding or removing a class.
- A global click event listener is added to detect when the user clicks outside the button, ensuring the options list closes automatically to maintain a clean interface.
- This example enhances the standard `<select>` button by giving full control over its design and behavior.

**[View Code](./detect_click_outside_div.js)**
