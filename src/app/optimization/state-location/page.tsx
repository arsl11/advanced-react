"use client"

import SlowComponent from "@/components/SlowComponent";
import { useState } from "react";

/**
 * TODO:
 * add state location optimization
 */
export default function StateLocation() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      <SlowComponent />
    </div>
  )
}