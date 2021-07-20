import './style.css';

export const PostCard = (props) => {
  const { obj } = props;
  return (
    <div className="content">
      <ul>
        <li>TÍTULO: {obj.title}</li>
        <li>CORPO: {obj.body}</li>
      </ul>
      <img src={ obj.cover } alt={ obj.title } />
    </div> 
  );
}

