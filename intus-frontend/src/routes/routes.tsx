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
      <div className="w-100 h-100" style={{ paddingTop: "120px" }}>
        <Navbar />
        <Outlet />
      </div>
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
        path: "/participants/:id",
        element: <Participant />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
