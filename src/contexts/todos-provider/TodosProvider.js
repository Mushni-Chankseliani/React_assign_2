import React, { useState, useEffect } from 'react';
import API_SERVICE from '../../services/api';

export const TodosContext = React.createContext(null);
// Provider -> store value
// Consumer -> use value

function TodosProviderComponent({ children }) {
  const [todosList, setTodosList] = useState([]);

  const addNewTodo = (newTodo) => {
    const newList = [...todosList, newTodo];
    setTodosList(newList);
  };

  const loadTodoListAsync = async () => {
    const list = await API_SERVICE.getTodoListAsync({ start: 60, limit: 20 });
    setTodosList(list);
  };

  useEffect(() => {
    loadTodoListAsync();
  }, []);

  const removeTodo = (commentId) => {
    const newTodosList = todosList.filter((item) => item.id !== commentId);
    setTodosList(newTodosList);
  };

  TodosContext.displayName = 'TodosContext';

  return (
    <TodosContext.Provider
      value={{
        todosList,
        addNewTodo,
        removeTodo,
        setTodosList,
      }}>
      {children}
    </TodosContext.Provider>
  );
}

export default TodosProviderComponent;
