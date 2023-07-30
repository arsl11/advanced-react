"use client"

import SlowComponent from "@/components/SlowComponent";
import { useState } from "react";

/**
  * Problem: If we will use useState inside parent component after set count slow component also will rerender like a child.
  * Decision: Replace state to new component. After set count only count component will be rerendered.   
*/

const CountComponent = () => {
  const [count, setCount] = useState<number>(0);

  return <><button onClick={() => setCount((count) => count + 1)}>{count}</button></>
}

export default function StateLocation() {

  return (
    <div>
      <CountComponent />
      <SlowComponent />
    </div>
  )
}