import { createBrowserRouter } from "react-router-dom";
import RootPage from "../page/root";
import HomePage from "../page/home";
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
