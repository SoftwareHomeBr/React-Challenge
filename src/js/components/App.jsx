    // src/js/components/App.jsx
    import React from "react";
    import Post from "./Posts.jsx";
    import Users from "./Users.jsx";
    import Title from "./Title.jsx";

    const App = () => (
      <div className="flex-container-f">
        <div className="flex-container-f">
        <div className="pai flex-container">
          <h1>Users</h1>
          <Users />
        </div>
        <div className="flex-container-det">
          <h1><span>API posts: </span><Title /></h1>
          <Post />
        </div>
        </div>
      </div>
    );
    export default App;
    
