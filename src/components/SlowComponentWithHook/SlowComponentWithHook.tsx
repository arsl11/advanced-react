"use client"

import React from "react"

export const useIsAuthorized = () => {
  return false;
}

const useVerySlowHook = () => {
  let startTime = performance.now();

  while (performance.now() - startTime < 10000) {
    // Do not for 1 ms per item to emulate extremely slow code
  }
}

export function SlowComponentWithHook() {
  // const isAuthorized = useIsAuthorized();

  /**
   * Could be downloading data from the server
   * Hook is rendered all time, although it's not always needed
   * Can't be used after condition (optionally)
  */ 
  
  useVerySlowHook();

  // if (!isAuthorized) {
  //   return null;
  // }

  return <div>VerySlow</div>
}