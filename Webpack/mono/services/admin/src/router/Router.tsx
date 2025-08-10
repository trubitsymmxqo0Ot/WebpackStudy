import App from "@/App";
import Loading from "@/components/loading/Loading";
import Admin from "@/components/admin/Admin";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: (
          <Suspense fallback={<Loading />}>
            <Admin />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
