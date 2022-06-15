import React, {useState}from 'react';
import CreatePost from './components/CreatePost';
import NavBar from './components/NavBar'
import PostMapper from './components/PostMapper';
import "./index.css"


function App() {
    const [posts, setPosts]= useState([{name:'Albert Einstein',text:'I am thankful for all of those who said NO to me. Its because of them Im doing it myself.',isLiked:false,isDisliked:false},{name:'Jordan B. Peterson',text:'I do not think that you have any insight whatsoever into your capacity for good until you have some well-developed insight into your capacity for evil.',isLiked:false,isDisliked:false}])

     function addNewEntry(post){
      let tempPost =[ ...posts, post];
    console.log(tempPost)
      setPosts(tempPost);
     }


  return (
    <div className='background'>
      <div className='nav'>
       <NavBar />
      </div>
      <div className='create-post'>
       <CreatePost addNewEntryProperty={addNewEntry}/>
      </div>
      <div className='create-post'>
        <PostMapper array={posts}/>
      </div>
    </div>
  );
}

export default App;
