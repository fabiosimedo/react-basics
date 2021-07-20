import './styles.css';
import { Component } from 'react';
import { PostCard } from '../../components/PostCard/index';
import { loadPosts } from '../../utils/loadPosts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput'

class Home extends Component {
  state = { 
    posts: [], 
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: '',
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsFotos = await loadPosts();
    this.setState({ 
      posts: postsFotos.slice(page, postsPerPage), 
      allPosts: postsFotos
    });
  }

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPost = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPost);

    this.setState({ posts, page: nextPage });
  }

  handleSearch = (e) => {
    const value = e.target.value;
    this.setState({ searchValue: value });
  }

  render() {
    const { posts, searchValue, allPosts } = this.state;

    const filteredPosts = !!searchValue ? 
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) 
    : posts; 

    return (
      <div>
        <div className="top">
          {!!searchValue && (
            <p>Você digitou: <h3>{searchValue}</h3></p>
          )}

          <TextInput 
            searchValue={ searchValue }
            handleSearch={ this.handleSearch }
          />
          
          {!searchValue && (
            <Button 
              text="Carregar mais Posts" 
              onClick={this.loadMorePosts}
            /> 
          )}
        </div> 
         
        {filteredPosts.length === 0 && (
            <h2 className="warning">Post não encontrado</h2>
        )}
            
        <div className="App">
          {filteredPosts.length > 0 && (
            filteredPosts.map(post => (
              <PostCard obj={ post } key={ post.id } /> 
              )) 
          )}
        </div>          
      </div>
    );
  }  
}

export default Home;
