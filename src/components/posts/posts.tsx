import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { addPost, fetchPosts } from "../../store/posts/actions";
import { getPostsState } from "../../store/posts/selector";

export const Posts: React.FC = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(getPostsState);

    React.useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        dispatch(addPost({ title: form.title.value, body: form.body.value }))
    }

    return (
        <>
         <h2>Posts</h2>
         <div style={{ display: 'flex' }}>
         <div style={{ width: '50%'}}>
             {
                 data && data.map(post => {
                     return <div key={post.id}>
                         <h4>{post.title}</h4>
                         <p>{post.body}</p>
                     </div>
                 })
             }
         </div>
         <div style={{ width: '50%' }}>
             <h3>Add new post</h3>
             <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                 <label htmlFor="title" >Title</label><br/>
                 <input style={{ width: '50%' }} id="title" type="text"/>
                 <br/>
                 <br/>
                 <label htmlFor="body">Body</label> <br/>
                 <textarea style={{ width: '50%' }} id="body"/>
                 <br/>
                 <br/>
                 <button type="submit">Create</button>
             </form>
         </div>
        

         </div>
        </>
    )
}