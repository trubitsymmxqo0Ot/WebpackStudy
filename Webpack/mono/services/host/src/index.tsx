import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "@/components/loading/Loading";
import App from "@/App";
import { Suspense } from "react";
import "@/index.scss";
import { Admin } from "@/components/admin/index";
import { Shop } from "@/components/shop/index";
const root = document.getElementById("root");

if (!root) console.error("root is not found");

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: (
      <Suspense fallback={<Loading />}>
        <Admin />
      </Suspense>
    ),
  },
  {
    path: "/shop",
    element: (
      <Suspense fallback={<Loading />}>
        <Shop />
      </Suspense>
    ),
  },
]);

container.render(<RouterProvider router={router} />);
