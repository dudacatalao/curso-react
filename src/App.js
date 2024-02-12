import "./App.css";
import { Component } from "react";
import { PostCard } from "./components/PostCard";

class App extends Component {
  state = {
    posts: [], //criando array com objetos
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postResponse = fetch(
      "https://jsonplaceholder.typicode.com/users/1/posts"
    );
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/albums/1/photos')

    const [posts, photos] = await Promise.all([postResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postAndPhotos = postsJson.map((post, index) => {
      return {...post, cover: photosJson[index].url}
    })

    this.setState({ posts: postAndPhotos });
  };

  render() {
    const { posts } = this.state; //construtor
    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <PostCard 
            post={post}
            key={post.id}
            >
            </PostCard>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
