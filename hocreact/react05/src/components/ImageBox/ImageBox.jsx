import { useRef } from "react";
import Image from "./Image";
const ImageBox = () => {
  const imageRef = useRef();
  const handleZoomIn = () => {
    imageRef.current.zoomIn();
  };
  const handleZoomOut = () => {
    imageRef.current.zoomOut();
  };
  const handleReset = () => {
    imageRef.current.reset();
  };
  return (
    <div>
      <Image ref={imageRef} />
      <hr />
      <button onClick={handleZoomIn}>ZoomIn</button>
      <button onClick={handleZoomOut}>ZoomOut</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ImageBox;
