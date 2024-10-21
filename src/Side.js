import MyBtn from "./MyBtn";
const Side = () => {
  return (
      // Move all inline styles to be in css file, use inline style just in special cases
    <div style={{margin:"25px",border:"2px solid red"}}>
      <MyBtn/>
      <MyBtn/>
      <MyBtn/>
      <MyBtn/>
      
    </div>
  );
};
export default Side;
