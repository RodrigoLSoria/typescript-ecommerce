import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About, HomeLayout, Cart, Checkout, Error, Landing,
  Login, Orders, Products, Register, SingleProduct
} from "./pages";
import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";
import { loader as singleProductLoader } from "./pages/SingleProduct";


// actions

import { action as registerUser } from './pages/Register'
import { action as loginUser } from './pages/Login'
import { store } from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader
      },
      {
        path: 'orders',
        element: <Orders />,
        errorElement: <ErrorElement />
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <ErrorElement />
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />
      },
      {
        path: 'error',
        element: <Error />
      },

    ]
  },
  {
    path: '/login',
    element: <Login />,
    action: loginUser(store),
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    action: registerUser,
    errorElement: <Error />,
  },

])



function App() {


  return <RouterProvider router={router}>

  </RouterProvider>
}

export default App
