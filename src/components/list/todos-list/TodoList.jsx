import { useContext } from 'react';

import TodoListItem from './TodoListItem';

import './todo-list.css';
import { TodosContext } from '../../../contexts/todos-provider/TodosProvider';

function TodoList(props) {
  const { todosList } = useContext(TodosContext);

  return (
    <>
      {todosList.map((item) => {
        return <TodoListItem item={item} key={item.id} />;
      })}
    </>
  );
}

export default TodoList;
