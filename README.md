# Dynamic Image Gallery

![Gallery Preview](https://raw.githubusercontent.com/git-sujon/Simple_Image_Gallery/main/public/ss.png)

Check out the live demo: [Dynamic Image Gallery Demo](https://dynamic-image-gallery.netlify.app/)

## Overview

The Dynamic Image Gallery is a web application that allows you to manage and display a collection of images in an interactive and dynamic way. You can drag and drop images to rearrange them, select and delete multiple images, and upload new images to expand your gallery. This README provides an overview of the project's features and technologies used.

## Features

- **Drag-and-Drop**: Rearrange images within the gallery using the drag-and-drop functionality, providing an intuitive way to organize your images.

- **Image Selection**: Select multiple images by clicking on the checkbox that appears when you hover over an image. The selected images are indicated with a checkmark.

- **Delete Images**: Remove selected images from the gallery with the "Delete files" button.

- **Image Upload**: Easily add new images to your gallery by uploading image files.

- **Responsive Design**: The gallery is responsive and adjusts to various screen sizes for an optimal viewing experience on different devices.

## Technologies Used

- **React**: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.

- **React DnD**: This project uses the `react-dnd` library to implement drag-and-drop functionality.

- **HTML5 Backend**: The drag-and-drop functionality is supported by the HTML5 backend of `react-dnd`.

- **TypeScript**: TypeScript is used to provide static typing and enhance code quality.

- **Tailwind CSS**: Tailwind CSS is utilized for efficient and responsive styling, providing a range of utility classes to streamline the UI design process.

- **CSS**: Additional styling is done using CSS, combined with Tailwind CSS classes for component styling.

## Difficulties Faced

Creating a dynamic image gallery with features like drag-and-drop, image selection, and deletion involved some challenges:

- Implementing drag-and-drop functionality required understanding how to use the `react-dnd` library effectively.

- Managing the state of selected images and handling their deletion required careful state management and event handling.

- Ensuring a responsive design for various screen sizes and optimizing user experience was an ongoing process.

- Handling image uploads and dynamically updating the gallery presented its own set of challenges.

