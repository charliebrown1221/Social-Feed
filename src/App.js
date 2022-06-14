import React from 'react';
import CreatePost from './components/CreatePost';
import NavBar from './components/NavBar'
import PostMapper from './components/PostMapper';


function App() {
  return (
    <div >
     <NavBar />
     <CreatePost />
     <PostMapper />
    
    </div>
  );
}

export default App;
