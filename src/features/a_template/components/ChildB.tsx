/** @jsxImportSource @emotion/react */
import { useForceRerender } from "@/hooks/useForceRerender";
import { useAppDispatch } from "@/store/redux/hooks";
import { forceRerenderSliceActions } from "@/store/redux/store-redux";
// For explaining new concepts or tactics to a dev (me included), it's better to have a simple example
export const ChildB = () => {
  useForceRerender("ChildB");

  const dispatch = useAppDispatch();

  console.log("rerender", "ChildB");

  return (
    <div>
      <p>B</p>
      <button
        onClick={() => {
          dispatch(forceRerenderSliceActions.forceRerender("ChildA"));
        }}
      >
        Force Rerended on Child A
      </button>
    </div>
  );
};
