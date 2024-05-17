/** @jsxImportSource @emotion/react */

import { ChildA } from "./ChildA";
import { ChildB } from "./ChildB";

// For explaining new concepts or tactics to a dev (me included), it's better to have a simple example
export const Parent = () => {
  return (
    <>
      <ChildA />
      <ChildB />
    </>
  );
};
