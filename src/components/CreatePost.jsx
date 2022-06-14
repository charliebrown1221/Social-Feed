import React, {useState} from 'react'

const CreatePost = (props) => {
    const [name, setName]=useState('')
    const [text, setText]=useState('')
    
    function handelSubmit(event){
        event.preventDefault();
        let newEntry ={
           Name: name,
            Post: text 
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }
    

    return ( 
        <form onSubmit={handelSubmit}>
           <label>Name</label>
              <input type="text" value={name} onChange={(event)=> setName(event.target.value)}/>
              <label>Post</label>
              <input type="text" value={text} onChange={(event)=> setText(event.target.value)} />
              <button type="submit">Create</button>
            
        </form>
       
     );
}
  console.log(CreatePost)
export default CreatePost;