import React from "react";
import { FormGroup, TodoTable, TodoTr, TodoTd } from "./Elements";
import TodoItem from "./TodoItem";

interface Props {
  todos: string[];
  removeClick: (index: number) => void;
}

const TodoList: React.FC<Props> = (props) => {
  const { todos, removeClick } = props;

  return (
    <FormGroup>
      <div>
        <TodoTable className="list-group list-group-flush">
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                todo={todo}
                removeClick={() => removeClick(index)}
              />
            ))
          ) : (
            <TodoTr>
              <TodoTd>追加してください</TodoTd>
            </TodoTr>
          )}
        </TodoTable>
      </div>
    </FormGroup>
  );
};

export default TodoList;
