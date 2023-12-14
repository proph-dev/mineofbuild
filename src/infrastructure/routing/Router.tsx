import { Suspense } from './Suspense';
import publicRoutes from './public';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout, NotFound } from "./routes";

export const router = createBrowserRouter (
    [
        // PUBLIC
        {
            path: "",
            element: Suspense(MainLayout),
            children: publicRoutes
        },
        // NOT FOUND
        {
            path: "*",
            element: Suspense(NotFound)
        }
    ]
);