import { createBrowserRouter } from "react-router-dom";
import { MainPage, mainPageLoader } from "./MainPage";
import { AuthPage } from "./AuthPage";
import { ErrorBoundary } from "./ErrorBoundary"; 


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    loader: mainPageLoader,
  	errorElement: <ErrorBoundary />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  	errorElement: <ErrorBoundary />,
  },
])
