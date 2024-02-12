export const loadPosts = async () =>{
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
      
      return postAndPhotos
}