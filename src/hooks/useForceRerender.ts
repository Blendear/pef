import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/store/redux/hooks";

export const useForceRerender = (
  // the name will have its own prop inside "forceRerender" redux state
  // For example "ChildA" will be accesed by "state.forceRerender.ChildA"
  componentName
) => {
  const reduxState = useAppSelector(
    (state) => state.forceRerenderReducer[componentName]
  );

  //   const [forceRerender, setForceRerender] = useState(false);

  useEffect(() => {
    // TODO: Figure out why the hell does it trigger a components rerender on "useForceRerender" use,
    // even though the "setForceRerender" is uncommented. It's not supposed to trigger a rerender.
    // Yet it does. As if the fact that a "reduxState" change triggers a rerender of the component.
    //
    // setForceRerender((prev) => !prev);
  }, [reduxState]);

  return null;
};
