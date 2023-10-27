import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import TaskList from "./pages/TaskList";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

// optional: createROutesFromElements- 446
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/task-list', element: <TaskList />}
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
