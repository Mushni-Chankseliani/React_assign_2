import AddTodoForm from '../../components/forms/add-todo-form';
import TodoList from '../../components/list/todos-list';
import TodosProviderComponent from '../../contexts/todos-provider/TodosProvider';
import PropTypes from 'prop-types';

function Todos({ title = 'Todos' }) {
  return (
    <TodosProviderComponent>
      <h1 className="text-center mb-3">{title}</h1>
      <div className="row">
        <div className="col-4">
          <AddTodoForm />
        </div>
        <div className="col-8 d-flex flex-wrap">
          <TodoList />
        </div>
      </div>
    </TodosProviderComponent>
  );
}

Todos.propTypes = {
  mode: PropTypes.oneOf(['classCounter', 'homePage', 'notesPage']),
};

export default Todos;
