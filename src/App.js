import './App.css';
import {Component} from 'react';

class App extends  Component{

  state = {
    posts: [
      {
        id: 1,
        title: 'Titulo 1',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
      },
      {
        id: 2,
        title: 'Titulo 2',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem 2.'
      },
      {
        id: 3,
        title: 'Titulo 3',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem 3.'
      },
    ]
  };

  render(){
  const { posts } = this.state;
  return (
    <div className="App">
      {posts.map(post => (
        <div> 
          <h1 key={post.id}>{post.title}</h1>
          <p>{post.body}</p>
        </div>
        )  
      )}
    </div>
  );
}
}
export default App;
