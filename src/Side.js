
import MyBtn from "./MyBtn";
import "./Slide.css"
const Side = () => {
  return (
      // Move all inline styles to be in css file, use inline style just in special cases
      //I add to the Side.css
    <div classNamee="div1">
      <MyBtn/>
      <MyBtn/>
      <MyBtn/>
      <MyBtn/>
      
    </div>
  );
};
export default Side;
