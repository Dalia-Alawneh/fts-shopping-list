import { createBrowserRouter } from "react-router-dom";
import Home from "#pages/Home";
import Cart from "#pages/Cart";
import NotFound from "#pages/NotFound";
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