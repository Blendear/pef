/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import { ImageWithWrapperProps } from "@/types";

const ImageWithWrapper = ({ src, alt, wrapperCss }: ImageWithWrapperProps) => {
  return (
    <div
      css={wrapperCss}
      style={
        !wrapperCss
          ? {
              position: "relative",
              width: "4rem",
              height: "4rem",
            }
          : { position: "relative" }
      }
    >
      <Image
        src={src}
        alt={alt || "An image based on the given URL image path"}
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default ImageWithWrapper;
