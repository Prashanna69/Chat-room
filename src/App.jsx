import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "./pages/Login";
import RootLayout from "./Layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/Login" element={<Login />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
