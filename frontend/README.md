# Getting Started with Create React App

1.How can you implement shared functionality across a component tree?

ans->Shared functionality across a component tree can be implemented using multiple approaches, like Context Api,Props, and Lifting up and using redux also.

->Context API: Provides a way to pass data or functions through the component tree without having to pass props down manually at every level.

->Higher-Order Components (HOCs): Functions that take a component and return a new component, allowing you to inject shared logic.

->Props: A pattern where a function is passed as a prop to a component, allowing for code reuse between components.

->redux: with the use of Global State management.

2. Why useState is Appropriate for Handling State in a Complex Component?
   
Ans-> The useState hook is appropriate for handling state in a complex component because it:

-> Provides a simple and intuitive way to manage local state within functional components.

-> Allows for dynamic updates to the state with automatic re-renders.

-> Supports multiple state variables, making it easier to organize and manage complex states.

-> Integrates seamlessly with other hooks, like useEffect, to handle side effects based on state changes.

## Available Scripts

In the project directory, you can run:

### `cd frontend`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
