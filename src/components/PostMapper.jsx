import React from 'react'
import Post from './Post/Post';

const PostMapper = ({array}) => {
    return ( 
        <ul className='bullet'>
            {array.map( (item)=><li key ={item.id}> <Post post={item}/> </li>)}
        </ul>
     );
}
 
export default PostMapper;