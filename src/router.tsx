import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {DetailPage} from "./Pages/DetailPage";
import {MainPage} from "./Pages/MainPage";



const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/> , children:[
            {
                index: true, element: <MainPage/>
            },
            {
                path:'detail/:id', element: <DetailPage/>
            }
        ]
    }
])

export {
    router
}