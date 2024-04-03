import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About, HomeLayout, Cart, Checkout, Error, Landing,
  Login, Orders, Products, Register, SingleProduct
} from "./pages";
import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";


// actions

import { action as registerUser } from './pages/Register'
import { action as loginUser } from './pages/Login'
import { action as checkoutAction } from './components/CheckoutForm'
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
        errorElement: <ErrorElement />,
        loader: ordersLoader(store)
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
        loader: checkoutLoader(store),
        action: checkoutAction(store),
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
