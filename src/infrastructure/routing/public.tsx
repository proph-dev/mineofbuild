import { RouteObject } from "react-router-dom";
import { Suspense } from "./Suspense";
import { Home } from "./routes";

const routes: RouteObject[] = [
    {
        path: '/',
        element: Suspense(Home)
    }
];

export default routes;