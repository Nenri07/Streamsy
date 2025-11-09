// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import store from './store/store.js'
// import App from './App.jsx'
// import Dashboard from './pages/Dashboard.jsx'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import LoginPage from './pages/LoginPage.jsx'
// import Checksub from './pages/checksub.jsx'
// import {AuthLayout} from './components/index.js'



// const router= createBrowserRouter(
//   [
//     {
//       path:'/',
//       element:<App/>,
//       children:[
//         {
//           path:'/dashboard',
//           element:(
//           <AuthLayout authentication>
//             <Dashboard />
//           </AuthLayout>
//           )
//         },
//         {
//           path:'/login',
//           element:(
//           <AuthLayout authentication={false}>
//             <LoginPage />
//           </AuthLayout>
//         )
//         },
//         {
//           path:'/subscribers',
//           element:(
//           <AuthLayout authentication>
//             <Checksub />
//           </AuthLayout>
//           )
//         }

//       ]
//     }
//   ]
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router}/>
//     </Provider>
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from './store/store.js'
import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import LoginPage from './pages/LoginPage.jsx'
import Checksub from './pages/checksub.jsx'
import HomePage from './pages/HomePage.jsx'
import { AuthLayout } from './components/index.js'
import WatchPage from './pages/WatchPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
             {
                index: true,
                element: <HomePage />
            },
            {
                element: (
                    <AuthLayout authentication={false}>
                        <LoginPage />
                    </AuthLayout>
                )
            },
            {
                path: 'dashboard',
                element: (
                    <AuthLayout authentication={true}>
                        <Dashboard />
                    </AuthLayout>
                )
            },
            {
                path: 'login',
                element: (
                    <AuthLayout authentication={false}>
                        <LoginPage />
                    </AuthLayout>
                )
            },
            {
                path: 'subscribers',
                element: (
                    <AuthLayout authentication={true}>
                        <Checksub />
                    </AuthLayout>
                )
            },
            {
                path: 'watch/:videoId',
                element: (
                        <WatchPage/>
                )
            },
            {
                path: '*',
                element: (
                    <AuthLayout authentication={true}>
                        <NotFoundPage/>
                    </AuthLayout>
                )
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>,
)