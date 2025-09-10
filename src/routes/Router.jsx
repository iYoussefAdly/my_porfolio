import { lazy, Suspense } from "react";
import { createBrowserRouter, Link } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

// Remove basename for GitHub Pages compatibility
const basename = undefined;

const RouteError = () => (
  <div className="content py-20 text-center">
    <p className="text-2xl font-semibold mb-4">Unexpected Application Error</p>
    <p className="text-gray-500 mb-6">Something went wrong or the page was not found.</p>
    <Link to="/" className="btn btn-primary text-white">Go Home</Link>
  </div>
);

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      errorElement: <RouteError />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ],
  { basename }
);
