# Form Validation in JavaScript

Form validation ensures that user inputs are correctly formatted and meet specified requirements before they are submitted. In this section, I demonstrate my ability to validate various form inputs, such as images, checkboxes, and other fields, ensuring a smooth and error-free user experience. These examples show how to manually validate inputs, handle file types, and provide immediate feedback to users.

### Key Concepts:
- Ensuring proper file type validation for image inputs.
- Handling checkbox and radio button validations with custom rules.
- Providing live previews of image uploads and enhancing the UX.

## Examples:

### 1. **Image File Type Validation**
This function validates the file type when an image is uploaded by a user. It only allows `jpg`, `jpeg`, and `png` file formats. If the user uploads a file of a different format, an alert is displayed, and the input is cleared, ensuring that only valid image types are accepted.

#### **How It Works:**
- The file extension is extracted from the input.
- If the file is not a valid image type (`jpg`, `jpeg`, `png`), the input is reset, and the user is prompted with an alert.

**[View Code](./image_file_type_validation.js)**

---

### 2. **Manual Form Validation and Submit Control**
This example manually validates form elements, such as category and product type inputs, before allowing the form to be submitted. It ensures that at least one checkbox and radio button option is selected and verifies the presence of uploaded images for selected product colors.

#### **How It Works:**
- The form listens for the submit event, where `form.reportValidity()` is used to trigger validation on all required fields.
- Before submission, the code checks if the required radio buttons and checkboxes are selected, ensuring no fields are bypassed.
- It also validates that at least one image is uploaded for each selected color, preventing incomplete submissions.

**[View Code](./manual_form_validation_submit_control.js)**

---

### 3. **Live Image Preview on Upload**
This function enhances the user experience by providing a real-time preview of an image when it is uploaded. Users can see the image they selected before submitting the form, ensuring they know exactly what will be uploaded.

#### **How It Works:**
- A `FileReader` is used to read the selected image file.
- Once the image is read, it is displayed in a specified `img` tag, allowing the user to preview the image.
- This helps users confirm they are uploading the correct image.

**[View Code](./live_image_preview_on_upload.js)**
