import React, { forwardRef, useImperativeHandle, useState } from "react";

const ButtonComp = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  console.log("button comp rendered");
  useImperativeHandle(ref, () => ({
    count,
    increment: () => setCount((prevCount) => prevCount + 1),
    reset: () => setCount(0),
  }));

  const buttonRef = React.useRef();
  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Button clicked {count} times
      </button>
    </>
  );
});

export default ButtonComp;
