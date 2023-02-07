import { createBrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";

const mainPageLoader = async () => {
  return new Promise((resolve) => {
    resolve({
      id: "32",
      name: "test"
    })
  })
}

// eslint-disable-next-line
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    loader:  async () => {
      return await mainPageLoader
    }
    // errorElement: <ErrorBoundary />,
  }
])

export default router;
