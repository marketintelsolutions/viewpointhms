import Landing from "./pages/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Media from "./pages/Media";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
