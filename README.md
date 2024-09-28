# Heroes Management App

## Description

The **Heroes Management App** is a simple React and Redux application for managing a list of heroes. Users can add new heroes, filter them by element, and delete heroes from the list. The app uses **Redux Toolkit** for state management and **RTK Query** for handling asynchronous requests to a REST API.

## Features

- **CRUD Operations**: Users can create, view, and delete heroes.
- **Filtering**: Heroes can be filtered by their element (e.g., fire, water, etc.).
- **API Integration**: The app interacts with an API to fetch, create, and delete heroes.
- **Optimistic Updates**: The UI updates instantly without waiting for server confirmation when adding or deleting heroes.
- **Animations**: Transitions are applied when heroes are added or removed using `react-transition-group`.

## Technologies Used

- **React**: Front-end framework for building the user interface.
- **Redux Toolkit**: Simplifies state management and includes utilities like RTK Query.
- **RTK Query**: A powerful data-fetching and caching tool that is integrated into Redux.
- **SCSS**: Used for styling components.
- **UUID**: Used for generating unique IDs for heroes.
- **Bootstrap**: Used for responsive design.

## Usage

### Adding Heroes
- Fill out the form with the hero's name, description, and element.
- Click "Создать" (Create).

### Filtering Heroes
- Use the filter buttons to display heroes by their element.

### Deleting Heroes
- Click the close button on a hero card to remove that hero from the list.

---

## Scripts

- **start**: Runs the app and concurrently starts a JSON server for API emulation.
- **build**: Builds the app for production.
- **test**: Runs tests for the app.
- **eject**: Ejects the app configuration for customization.

---

## Patterns and Concepts Used

### Component-Based Architecture
- The app is built using reusable React components, promoting modularity and separation of concerns. Each component encapsulates its own logic and styling.

### Redux Toolkit
- The app uses Redux Toolkit for state management, simplifying the process of managing global state and reducing boilerplate code compared to traditional Redux.

### RTK Query
- Integrated into Redux Toolkit, RTK Query provides an efficient way to handle data fetching and caching, abstracting the process of making API calls and updating the Redux store with minimal setup.

### Async Actions with Thunks
- The app utilizes asynchronous actions to fetch data from an API. The `createAsyncThunk` function from Redux Toolkit simplifies the handling of promises within the Redux flow.

### Entity Adapter
- The `createEntityAdapter` function is used to manage normalized state for filters, enabling efficient CRUD operations on the filters' state.

### Custom Hooks
- A custom hook (`useHttp`) is implemented to encapsulate the logic for making HTTP requests, promoting reusability and separating concerns related to data fetching.

### UI State Management
- Local state management is done using React's `useState` and `useEffect` hooks, allowing for component-specific state without the need to integrate everything into the Redux store.

### CSS Modules / SCSS
- Styling is handled with SCSS, enabling nested styles, variables, and mixins for better organization and reusability of styles.

### Conditional Rendering
- The app employs conditional rendering to display loading states, error messages, and empty states, enhancing user experience by providing feedback during asynchronous operations.

### Animation with `react-transition-group`
- The app uses the `react-transition-group` library to manage animations for adding and removing heroes, making the user interface more engaging.

---

## Components Overview

- **App**: The main component that integrates the Heroes list, adding form, and filters.
- **HeroesList**: Fetches and displays the list of heroes with filtering capability.
- **HeroesAddForm**: A form for adding new heroes to the list.
- **HeroesFilters**: Provides filtering options based on hero elements.
- **HeroesListItem**: Represents an individual hero, displaying their information and delete functionality.
- **Spinner**: A loading indicator displayed while fetching data.
