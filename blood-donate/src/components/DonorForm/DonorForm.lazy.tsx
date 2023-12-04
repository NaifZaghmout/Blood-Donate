import React, { lazy, Suspense } from 'react';

const LazyDonorForm = lazy(() => import('./DonorForm'));

const DonorForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDonorForm {...props} />
  </Suspense>
);

export default DonorForm;
