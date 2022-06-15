import React, {useState} from 'react'
import "./Post/Post.css"
const CreatePost = (props) => {
    const [name, setName]=useState('')
    const [text, setText]=useState('')
    
    function handelPost(event){
        event.preventDefault();
        let newEntry ={
            name: name,
            text: text,
            isLiked:false,
            isDisliked: false
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }
    

    return ( 
        <form onSubmit={handelPost}>
            <div>
           <label>Name</label>
              <input className='name-box' type="text" value={name} onChange={(event)=> setName(event.target.value)}/>
              </div>
              <div>
              <label>Post</label>
              <input className='post-box' type="text" value={text} onChange={(event)=> setText(event.target.value)} />
              <button className='Create-button' type="submit">Create</button>
              </div>
            
        </form>
       
     );
}
  console.log(CreatePost)
export default CreatePost;