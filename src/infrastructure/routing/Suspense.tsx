import React from "react";
import { Loading } from '../../ui/components/utils/Loading';

export const Suspense = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
    return <React.Suspense fallback={<Loading />}>
        <Component />
    </React.Suspense>
}