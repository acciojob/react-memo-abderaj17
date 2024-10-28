import React, { useMemo } from 'react';

function UseMemoComponent({ todos }) {
  // Memoize the number of tasks to avoid unnecessary recalculations
  const taskCount = useMemo(() => {
    console.log('Calculating number of tasks...');
    return todos.length;
  }, [todos]);

  return (
    <div>
      <h3>Number of tasks: {taskCount}</h3>
    </div>
  );
}

export default UseMemoComponent;
