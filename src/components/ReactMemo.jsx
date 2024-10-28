import React from 'react';

// React.memo will prevent this component from re-rendering unless 'count' changes
const ReactMemoComponent = React.memo(({ count }) => {
  console.log('Rendering ReactMemoComponent...');
  return <div>Incremented count: {count}</div>;
});

export default ReactMemoComponent;
