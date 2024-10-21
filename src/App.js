import logo from "./logo.svg"; // Always clean the code from unused codes
import "./App.css"; // For more code readability move the css import to be last import after side import
import Header from "./Header";
import Post from "./Post";
import Side from "./Side";
function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
         
        }}
      >
        <div
          style={{ display: "flex",  width: "70%" }} // Move all inline styles to be in css file, use inline style just in special cases
        >
          {/* for  */}
          <div style={{ width: "70%" }}>
            <Post />
            <Post />
            <Post />
          </div>
          <div style={{ display: "flex", width: "30%" }}>
            <Side />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
