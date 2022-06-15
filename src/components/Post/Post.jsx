import React,{useState} from 'react'
import "./Post.css"
const Post = ({post}) => {
    const [color, setColor]=useState(false)
    const toggle=()=>{
      setColor(!color);
    }

    const [colors, setColors]=useState(false)
    const toggles=()=>{
      setColors(!colors);
    }


    return ( 
        <div>
           <h3>{post.name}</h3>
           <p>{post.text}</p>
           <div >
           <button onClick={toggle} className={"liked-colorOn" +(color ? "liked-colorOff":'')}>{color ? 'Like':'Like'} </button>
           </div>
           <div>
           <button onClick={toggles} className={"disliked-colorOn" +(colors ? "disliked-colorOff":'')}>{colors ? 'Dislike':'Dislike'}</button>
           </div>
        </div>
     );
}
 
export default Post;