import logo from "./logo.svg";
import "./App.css";
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
          style={{ display: "flex",  width: "70%" }}
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
