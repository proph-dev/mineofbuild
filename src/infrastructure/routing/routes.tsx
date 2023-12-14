import { lazy } from "react";

export const Home = lazy(() => import('../../ui/pages/home/Home'));

/*** Layout ***/
export const MainLayout = lazy(() => import('../../ui/layouts/mainLayout'));

/*** Not found route ***/
export const NotFound = lazy(() => import('../../ui/pages/NotFound'));