import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold">Contador: {count}</h1>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Incrementar
      </button>
    </div>
  );
}
