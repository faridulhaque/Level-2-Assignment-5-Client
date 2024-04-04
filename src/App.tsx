import { RouterProvider } from "react-router-dom";
import { routes } from "./services/routers";
import React from "react";
import { Provider } from "react-redux";
import store from "./services/store";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export const dataContext = React.createContext(null as any);

let user = null;

try {
  user = JSON.parse(localStorage.getItem("user") || "");
} catch (error) {
  console.error("Error parsing user data from localStorage:", error);
}

const data = {
  user,
};

function App() {
  return (
    <div 
    
    data-theme="dim">
      <Provider store={store}>
        <dataContext.Provider value={data}>
          <RouterProvider router={routes} />
        </dataContext.Provider>
      </Provider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
}

export default App;
