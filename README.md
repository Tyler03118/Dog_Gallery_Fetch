# Dog Photo Gallery

Thank you to Fetch for providing this exciting coding task opportunity! This project is a responsive and interactive image gallery showcasing favorite dog breeds using the [Dog API](https://dog.ceo/dog-api/documentation/sub-breed).

## Project Overview

This application is built using React with TypeScript and Vite as the build tool. It demonstrates modern web development practices including component-based architecture, state management, and responsive design.

### Key Technical Aspects:

- **React Hooks:** Utilized for state management and side effects.
- **TypeScript:** Ensures type safety throughout the application.
- **Responsive Design:** Implemented using CSS Grid and Flexbox.
- **API Integration:** Fetches data from the Dog API.
- **Performance Optimization:** Implements lazy loading for images.

## Features

- **Select Multiple Breeds:** Choose one or more dog breeds to view their images.
- **Responsive Gallery:** Images are displayed in a responsive grid layout.
- **Lightbox Modal:** Click on an image to view it in a larger size within a modal.
- **Lazy Loading:** Images load lazily to optimize performance.
- **Dark Mode:** Toggle between light and dark modes.

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Modal](https://github.com/reactjs/react-modal)
- [React LazyLoad](https://github.com/twobin/react-lazyload)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/) for version control.

## Project Structure

The project follows a standard React application structure:

```
src/
├── components/
│   ├── Gallery.tsx
│   ├── BreedSelector.tsx
│   └── ImageModal.tsx
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

This structure promotes modularity and separation of concerns, making the codebase easier to navigate and maintain.
