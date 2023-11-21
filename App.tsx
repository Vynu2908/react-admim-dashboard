import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Home from "./Pages/home/Home";
import Products from "./Pages/Products/Products";
import Users from "./Pages/users/Users";
import Navbar from "./Components/navbar/Navbar";
import Menu from "./Components/menu/Menu";
import Footer from "./Components/footer/Footer";
import Login from "./Pages/login/Login";
import User from "./Pages/user/user";
import Product from "./Pages/Product/Product";
import './styles/global.scss'

function App() {
  const Layout = () => {
    return(
    <div className="main">
      <Navbar/>
      <div className="container">
      <div className="menu-container">
          <Menu/>
      </div>
      <div className="content-container">
        <Outlet/>

      </div>
      </div>
      <Footer/>
    </div>
    )
  }
  const router=createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ]
  }, 
  {
    path:'/login',
    element:<Login/>
  }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
