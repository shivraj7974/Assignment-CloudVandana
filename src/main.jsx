import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary"; // Import ErrorBoundary
import "./index.css";
import store from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);


// import { StrictMode, lazy, Suspense } from "react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./store";
// import "./index.css";

// const App = lazy(() => import("./App.jsx")); // Lazy Load App

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <Suspense fallback={<h2>Loading App...</h2>}>
//         <App />
//       </Suspense>
//     </Provider>
//   </StrictMode>
// );
