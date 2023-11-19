import { forwardRef, useImperativeHandle, useRef } from "react";

const Image = forwardRef(function Image(props, ref) {
  const imageRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      zoomIn: () => {
        imageRef.current.style.width = `400px`;
      },
      zoomOut: () => {
        imageRef.current.style.width = `100px`;
      },
      reset: () => {
        imageRef.current.style.width = ``;
      },
    };
  });
  return <img src="https://picsum.photos/200" ref={imageRef} />;
});

export default Image;
