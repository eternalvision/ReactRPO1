import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

export const ReactLazySuspenseTest = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
};
