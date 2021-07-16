async function loadPosts() {
  const respostaPost =  fetch('https://jsonplaceholder.typicode.com/posts');
  const respostaFotos = fetch('https://jsonplaceholder.typicode.com/photos')
  const [posts, fotos] = await Promise.all([respostaPost, respostaFotos]);
  const postJson = await posts.json();
  const fotosJson = await fotos.json();

  const postsFotos = postJson.map((post, index) => {
    return { ...post, cover: fotosJson[index].url }
  });

  return postsFotos;
}   

export { loadPosts };