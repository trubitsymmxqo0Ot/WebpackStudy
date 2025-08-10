import App from "@/App";
import Loading from "@/components/loading/Loading";
import { Suspense } from "react";
import Shop from "@/components/shop/Shop";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/shop",
        element: <App />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
