import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home";
import RootPage from "../page/root";
import AuthPage from "../page/auth";
import Protected from "../page/auth/protected";

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
    element: (
      <Protected>
        <AuthPage />
      </Protected>
    ),
  },
]);

export default router;
