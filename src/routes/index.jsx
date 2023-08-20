import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home";
import RootPage from "../page/root";
import AuthPage from "../page/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export default router;
