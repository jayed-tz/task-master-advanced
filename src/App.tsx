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
import TaskListV2 from "./pages/TaskListV2";
import TaskListPageV2 from "./pages/TaskListV2";

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
      },
      {
        path: 'task-list-v2',
        element: <TaskListPageV2 />
      },
    ]
  }
]);
const App = () => {
  return <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>;
}

export default App;
