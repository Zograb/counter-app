import { useCallback, useState } from 'react';

// Components
import { Button } from '@/components';

function App() {
  const [count, setCount] = useState(0);

  const decrement = useCallback(() => {
    const newCount = count - 1;
    setCount(newCount <= 0 ? 0 : newCount);
  }, [count, setCount]);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  const reset = useCallback(() => {
    setCount(0);
  }, [setCount]);

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <div className="flex justify-center items-center">
        <Button onClick={decrement}>-</Button>
        <div className="text-3xl min-w-[70px] px-4 text-center">{count}</div>
        <Button onClick={increment}>+</Button>
      </div>
      <Button className="mt-8" onClick={reset}>RESET</Button>
    </div>
  );
}

export default App
