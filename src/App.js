import React, {useState}from 'react';
import CreatePost from './components/CreatePost';
import NavBar from './components/NavBar'
import PostMapper from './components/PostMapper';
import "./index.css"


function App() {
    const [posts, setPosts]= useState([{name:'Charlie',text:'i like pizza',isLiked:false,isDisliked:false},{name:'arlie',text:'i like pizza',isLiked:false,isDisliked:false}])

     function addNewEntry(post){
      let tempPost =[ ...posts, post];
    console.log(tempPost)
      setPosts(tempPost);
     }


  return (
    <div >
      <div>
       <NavBar />
      </div>
      <div className=''>
       <CreatePost addNewEntryProperty={addNewEntry}/>
      </div>
      <div>
        <PostMapper array={posts}/>
      </div>
    </div>
  );
}

export default App;
