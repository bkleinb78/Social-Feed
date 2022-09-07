import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import './app.css'


function App() {

  const [posts, setPosts] = useState([
    {
      name: 'DuckMan', 
      post: 'Lets Hunt',
      like: false,
      dislike: false,
      date: '4-22-2022'
    },
    {
      name: 'Administrator', 
      post: 'Welcome to Hunt Social Feed!',
      like: false,
      dislike: false,
      date: '4-22-2022'
    }, 
  ])

  const current = new Date();
  const date = `${current.getMonth()+1}-${current.getDate()}-${current.getFullYear()}`

  const addNewPost=(post)=> {
    post.date = date;
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }


  return (
    <div className='all-container'>
      <NavBar />
      <div className='content-container'>
        <CreatePost addNewPost={addNewPost} date={date}/>
        <div className="post-container">
          <DisplayPosts posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;