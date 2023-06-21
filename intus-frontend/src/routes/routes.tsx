import {
  RouteObject,
  Navigate,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import { Participant, Participants } from "@/features/participants";
import { Navbar } from "@/components/navbar";
export const routes: RouteObject[] = [
  {
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),

    children: [
      {
        path: "/",
        element: <Navigate to={"/participants"} replace={true} />,
      },

      {
        path: "/participants",
        element: <Participants />,
      },
      {
        path: "/participants/:name",
        element: <Participant />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
