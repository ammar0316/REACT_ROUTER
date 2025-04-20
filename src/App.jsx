import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contect from "./Components/Contect";
import Servive from "./Components/Servive";
import Navabr from "./Components/Navabr";
import Notfound from "./Components/Notfound";

const allPaths = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/addPost",
    element: <Contect />,
  },
  {
    path: "/service",
    element: <Servive />,
  },
  {
    path: "/*",
    element: <Notfound />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navabr/> */}
      <RouterProvider router={allPaths} />
    </>
  );
}

export default App;
