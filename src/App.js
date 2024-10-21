// Always clean the code from unused codes

import Header from "./Header";
import Post from "./Post";
import Side from "./Side";
import "./App.css"; // For more code readability move the css import to be last import after side import
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
        <div className="divContainer">{/*  // Move all inline styles to be in css file, use inline style just in special cases */}
          {/* for  */}
          <div className="div1">
            <Post />
            <Post />
            <Post />
          </div>
          <div className="div2">
            <Side />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
