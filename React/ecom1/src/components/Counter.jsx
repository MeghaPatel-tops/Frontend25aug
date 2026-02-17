import React, { useCallback, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("parent clicked");
  }, []); // removed count

  return (
    <div>
      <h1 className='text-3xl'>Counter: {count}</h1>

      <button 
        onClick={() => setCount(count + 1)} 
        className='bg-red-500 text-white p-5'
      >
        Increment
      </button>

      <Button onClick={handleClick} />
    </div>
  );
}

const Button = React.memo(function Button({ onClick }) {
  console.log("Child rendered");

  return (
    <button onClick={onClick}>
      Parent Click
    </button>
  );
});

export default Counter;