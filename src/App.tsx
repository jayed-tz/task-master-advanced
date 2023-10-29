import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import TaskListPage from "./pages/TaskList";
import TaskDetailPage from "./pages/TaskDetail";
import {Provider} from "react-redux";
import store from "./store/store";

// optional: createR0utesFromElements- 446
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'task-list',
        element: <TaskListPage />
      },
      {
        path: 'task-list/:id',
        element: <TaskDetailPage />
      }
    ]
  }
]);
const App = () => {
  return <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>;
}

export default App;
