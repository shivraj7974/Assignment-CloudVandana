import React from "react";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <>
    <Navbar />
    <UserDetails />  
    </>
  )
}

export default App 




// import { lazy, Suspense } from "react";
// import ErrorBoundary from "./components/ErrorBoundary"; // Already imported

// const Navbar = lazy(() => import("./components/Navbar"));
// const UserDetails = lazy(() => import("./components/UserDetails"));

// const App = () => {
//   return (
//     <>
//       <ErrorBoundary>
//         <Suspense fallback={<h2>Loading Components...</h2>}>
//           <Navbar />
//           <UserDetails />
//         </Suspense>
//       </ErrorBoundary>
//     </>
//   );
// };

// export default App;


// import { lazy, Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ErrorBoundary from "./components/ErrorBoundary";

// const Navbar = lazy(() => import("./components/Navbar"));
// const UserDetails = lazy(() => import("./components/UserDetails"));
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Contact = lazy(() => import("./pages/Contact"));

// const App = () => {
//   return (
//     <Router>
//       <ErrorBoundary>
//         <Suspense fallback={<h2>Loading Page...</h2>}>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//           <UserDetails />
//         </Suspense>
//       </ErrorBoundary>
//     </Router>
//   );
// };

// export default App;
