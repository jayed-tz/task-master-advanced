import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import TaskListPage from "./pages/TaskList";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import TaskDetailPage from "./pages/TaskDetail";

// optional: createROutesFromElements- 446
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
function App() {
  return <RouterProvider router={router} />;
}

export default App;
