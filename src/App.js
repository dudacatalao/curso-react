import "./App.css";
import { Component } from "react";
import {loadPosts} from './useful/load-posts'
import { Posts } from "./components/Posts";


class App extends Component {
  state = {
    posts: [], //criando array com objetos
  };

 async componentDidMount() {
    const postAndPhotos = await loadPosts()
    this.setState({ posts: postAndPhotos });
  }


  render() {
    const { posts } = this.state; //construtor

    return (
      <section className="container">
        <Posts posts={posts}></Posts>
      </section>
    );
  }
}

export default App;
