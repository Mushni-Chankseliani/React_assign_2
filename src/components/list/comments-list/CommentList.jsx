import { useContext } from 'react';

import CommentListItem from './CommentListItem';

import './comment-list.css';
import { CommentsContext } from '../../../contexts/comments-provider/CommentsProvider';

function CommentList(props) {
  const { commentsList } = useContext(CommentsContext);

  return (
    <>
      {commentsList.map((item) => {
        return <CommentListItem item={item} key={item.id} />;
      })}
    </>
  );
}

export default CommentList;
