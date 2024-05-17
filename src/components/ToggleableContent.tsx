import { useState } from "react";
import styles from "@/styles/sass/styles-all.module.scss";

const ToggleableContent = ({ title, children }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>{title}</button>
      {isContentVisible && <div>{children}</div>}
    </div>
  );
};

export default ToggleableContent;
