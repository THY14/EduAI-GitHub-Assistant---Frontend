import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ChallengeLayout from "../layout/ChallengeLayout";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <MainLayout /> },
          // { index: true, element: <NoAssignmentSelected /> }, // nothing selected

    ],
  },
  {
    element: <ChallengeLayout />,
    children: [
      // { path: "/challenge/:challengeId", element: <Challenge /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
