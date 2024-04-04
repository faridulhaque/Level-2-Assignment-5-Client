import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import HomePage from "../pages/HomePage";
import ManageGadgetPage from "../pages/ManageGadgetPage";
import SalesPage from "../pages/SalesPage";
import AddGadgetPage from "../pages/AddGadgetPage";
import SingleGadgetPage from "../pages/SingleGadgetPage";
import { ProtectedRoute } from "./ProtectedRoute";

export const routes = createBrowserRouter([
  {
    path: "/welcome",
    element: <WelcomePage />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <ManageGadgetPage />,
      },
      {
        path: "/sales",
        element: <SalesPage />,
      },
      {
        path: "/add-gadget",
        element: <AddGadgetPage />,
      },
      {
        path: "/duplicate/:id",
        element: <SingleGadgetPage />,
      },
      {
        path: "/update/:id",
        element: <SingleGadgetPage />,
      },
    ],
  },
]);
