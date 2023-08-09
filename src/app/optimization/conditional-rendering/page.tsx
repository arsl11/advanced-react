"use client"

import { SlowComponentWithHook, useIsAuthorized } from "@/components/SlowComponentWithHook/SlowComponentWithHook";
/**
 * You need to see if the component needs logic before rendering
 * If not, maybe we should put in the hook
 * Big projects usually have two or three cases like this
 */
export default function ConditionalRendering() {
  const isAuthorized = useIsAuthorized();

  return (
    <div>
      {isAuthorized && <SlowComponentWithHook />}
    </div>
  );
}