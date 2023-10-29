import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

axios.interceptors.response.use(
  (res) => {
    // Add configurations here
    toast.success(res.statusText);
    return res;
  },
  (err) => {
    toast.error(err.message);
    return Promise.reject(err);
  }
);

const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Router />
      <ToastContainer position="bottom-left" />
    </React.StrictMode>
  </QueryClientProvider>
);
