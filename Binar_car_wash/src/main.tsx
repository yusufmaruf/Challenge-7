import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPages from './pages/user/home.tsx'
import CariMobil from './pages/user/searchCar.tsx'
import DashboardAdmin from './pages/dashboard/admin.tsx'
import DashboardLayoutAdmin from './layouts/admin.tsx'

import "./assets/lbd.css"
import "./assets/animate.min.css"
import "./assets/demo.css"
import CarManagement from './pages/dashboard/CarManagement.tsx'
import EditCar from './pages/dashboard/EditCars.tsx'
import AddCar from './pages/dashboard/AddCar.tsx'
import Login from './pages/user/Login.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserInfoProvider from './context/userInfo.tsx'


function withUserContext(element: React.ReactNode) {
  return (
    // @ts-expect-error wrong types
    <UserInfoProvider>
      {element}
    </UserInfoProvider>
  )
}

const router = createBrowserRouter([
  {
    path: '/login',
    element: withUserContext(<Login />) ,
  },
  {
    path: '/',
    element:withUserContext( <LandingPages />),
  },
  {
    path: '/cars',
    element:withUserContext( <CariMobil />) ,
  },
  {
    path: '/dashboard',
    element: <DashboardLayoutAdmin />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardAdmin />
      },
      {
        path: '/dashboard/cars',
        element: <CarManagement />
      },
      {
        path: '/dashboard/cars/edit-car/:carId',
        element: <EditCar />
      },
      {
        path: '/dashboard/cars/add-car',
        element: <AddCar />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <GoogleOAuthProvider clientId='461189598146-0uub0q2c9fdihqueom783ef1emdp9jdv.apps.googleusercontent.com'>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
