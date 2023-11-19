import { forwardRef } from "react";
const Title = forwardRef(function Title(props, ref) {
  return <h1 ref={ref}>Học React không khó</h1>;
});

export default Title;
