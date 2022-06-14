import React, {useState}from 'react';
import CreatePost from './components/CreatePost';
import NavBar from './components/NavBar'
import PostMapper from './components/PostMapper';


function App() {
    const [posts, setPosts]= useState([{name:'Charlie',text:'i like pizza',isLiked:false,isDisliked:false,id:1}])

     function addNewEntry(post){
      let tempPost =[ ...posts, post];
    
      setPosts(tempPost);
     }


  return (
    <div >
     <NavBar />
     <CreatePost addNewEntryProperty={addNewEntry}/>
     <PostMapper array={posts}/>
    
    </div>
  );
}

export default App;
