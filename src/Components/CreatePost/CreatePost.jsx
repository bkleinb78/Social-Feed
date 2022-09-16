import React, {useState} from 'react';

const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    const handleSubmit=(event) =>{
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
        };
        if(name == '' || post == ''){
            alert(`Please add a name and post content to create a post.`)
        } else {
            props.addNewPost(newPost);
            setName('');
            setPost('');
        }
    }

    return ( 
        <form onSubmit={e=>handleSubmit(e)}>
            <div className="form-container">
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input className="form-control" type='text' value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Post</label>
                        <div className="col-sm-10">
                            <input className="form-control" type='text' value={post} onChange={(event) => setPost(event.target.value)} />
                        </div>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary" type='submit'>Create</button>
                    </div>
                    <div className="create-post-date">
                        Posting Date: {props.date}
                    </div>
            </div>
        </form>
     );
}
 
export default CreatePost;