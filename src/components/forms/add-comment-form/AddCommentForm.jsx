import { useContext, useState } from 'react';
import { CommentsContext } from '../../../contexts/comments-provider/CommentsProvider';

function AddCommentForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const { addNewComment } = useContext(CommentsContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      name,
      email,
      body,
      id: Math.random().toString(),
    };

    addNewComment(newComment);
    setName('');
    setEmail('');
    setBody('');
  };

  return (
    <form className="row g-1" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder=""
          value={name}
          onChange={({ target }) => {
            setName(target.value);
          }}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder=""
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <textarea
          className="form-control"
          id="body"
          rows="3"
          value={body}
          onChange={({ target }) => {
            setBody(target.value);
          }}
          required></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-md">
        Add Comment
      </button>
    </form>
  );
}

export default AddCommentForm;
