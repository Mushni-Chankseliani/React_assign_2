import { useContext, useState } from 'react';
import { TodosContext } from '../../../contexts/todos-provider/TodosProvider';

function AddTodoForm(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const { addNewTodo } = useContext(TodosContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      title,
      description,
      completed,
      id: Math.random().toString(),
    };

    addNewTodo(newTodo);
    setTitle('');
    setDescription('');
  };

  return (
    <form className="row g-1" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder=""
          value={title}
          onChange={({ target }) => {
            setTitle(target.value);
          }}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          value={description}
          onChange={({ target }) => {
            setDescription(target.value);
          }}
          required></textarea>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="completed"
          onChange={({ target }) => {
            setCompleted(target.checked);
          }}
        />
        <label className="form-check-label" htmlFor="completed">
          Completed
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-md">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodoForm;
