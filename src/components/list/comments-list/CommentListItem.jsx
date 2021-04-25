import { useContext } from 'react';
import { CommentsContext } from '../../../contexts/comments-provider/CommentsProvider';

function CommentsListItem({ item }) {
  const { removeComment } = useContext(CommentsContext);

  const onClick = () => {
    removeComment(item.id);
  };

  return (
    <div
      className={`card comment-list-item text-white ${
        item.completed ? 'bg-danger' : 'bg-primary'
      }`}>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.email}</p>
        <p className="card-text">{item.body}</p>
        <button className="btn btn-danger" onClick={onClick}>
          REMOVE
        </button>
      </div>
    </div>
  );
}

export default CommentsListItem;
