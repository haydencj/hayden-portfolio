import React, { Suspense } from 'react';

const Cmd = React.lazy(() => import('./Cmd'));

const CmdWrapper = () => {
  return (
    <Suspense fallback={<div>Loading terminal...</div>}>
      <Cmd />
    </Suspense>
  );
};

export default CmdWrapper;