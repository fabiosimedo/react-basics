export const PostCard = (props) => {
  const { obj } = props;
  return (
    <div className="content">
      <ul>
        <li>TÍTULO: {obj.title}</li>
        <li><h2>CORPO: {obj.body}</h2></li>
      </ul>
      <img src={ obj.cover } alt={ obj.title } />
    </div> 
  );
}

