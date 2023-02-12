import { createBrowserRouter } from "react-router-dom";
import { MainPage, mainPageLoader } from "pages/MainPage";
import { AuthPage } from "pages/AuthPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    loader: mainPageLoader
  // errorElement: <ErrorBoundary />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  // errorElement: <ErrorBoundary />,
  },
])
