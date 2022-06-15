import React, {useState} from 'react'

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
              <input type="text" value={name} onChange={(event)=> setName(event.target.value)}/>
              </div>
              <div>
              <label>Post</label>
              <input type="text" value={text} onChange={(event)=> setText(event.target.value)} />
              <button type="submit">Create</button>
              </div>
            
        </form>
       
     );
}
  console.log(CreatePost)
export default CreatePost;