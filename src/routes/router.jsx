import { createBrowserRouter } from "react-router-dom";
import RootPage from "../page/root";
import HomePage from "../page/home";
import AuthPage from "../page/auth";
import Protected from "../components/Authorized";
import Authorized from "../components/Authorized";

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
      <Authorized>
        <AuthPage />
      </Authorized>
    ),
  },
]);

export default router;
