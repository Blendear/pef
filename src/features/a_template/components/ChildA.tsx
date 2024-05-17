/** @jsxImportSource @emotion/react */

import { useForceRerender } from "@/hooks/useForceRerender";
import { useAppDispatch } from "@/store/redux/hooks";
import { forceRerenderSliceActions } from "@/store/redux/store-redux";
import { useRef } from "react";

// For explaining new concepts or tactics to a dev (me included), it's better to have a simple example
export const ChildA = () => {
  useForceRerender("ChildA");

  const dispatch = useAppDispatch();

  console.log("rerender", "ChildA");

  const counter = useRef(0);

  return (
    <div>
      <p>A</p>
      <button
        onClick={() => {
          dispatch(forceRerenderSliceActions.forceRerender("ChildB"));
          counter.current++;
        }}
      >
        Force Rerended on Child B
      </button>
      <p>{counter.current}</p>
    </div>
  );
};
