import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { router } from "../pages/router";
import 'antd/dist/reset.css';
import './assets/styles/global.scss';



export const App: FC = () => {
  return(
	<ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <RouterProvider router={router} />
  </ConfigProvider>
  )
};
