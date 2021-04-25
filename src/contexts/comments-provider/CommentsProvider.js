import React, { useState, useEffect } from 'react';
import API_SERVICE from '../../services/api';

export const CommentsContext = React.createContext(null);

// Provider -> store value
// Consumer -> use value

function CommentsProviderComponent({ children }) {
  const [commentsList, setCommentsList] = useState([]);

  const addNewComment = (newComment) => {
    const newList = [...commentsList, newComment];
    setCommentsList(newList);
  };

  const removeComment = (commentId) => {
    const newCommentsList = commentsList.filter((item) => item.id !== commentId);
    setCommentsList(newCommentsList);
  };

  const loadCommentListAsync = async () => {
    const list = await API_SERVICE.getCommentListAsync({ start: 60, limit: 20 });
    setCommentsList(list);
  };

  useEffect(() => {
    loadCommentListAsync();
  }, []);

  CommentsContext.displayName = 'CommentsContext';

  return (
    <CommentsContext.Provider
      value={{
        commentsList,
        addNewComment,
        removeComment,
        setCommentsList,
      }}>
      {children}
    </CommentsContext.Provider>
  );
}

export default CommentsProviderComponent;
