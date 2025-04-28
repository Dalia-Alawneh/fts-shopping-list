import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import NotFound from "../Pages/NotFound";
import Layout from "../components/shared/Layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
      {
        index: true,
        Component: Home,
      },
      {
        path: "/cart",
        Component: Cart,
        children: [
          {
            path: "checkout",
            Component: Cart,
          },
        ]
      },
    ]
  },
  {
    path: '*',
    Component: NotFound
  }
]);


export default router;