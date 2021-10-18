import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Todo } from "../types/Todo";
import TodoList from "../TodoList";
import Actions from "../actions/AppAction";

interface State {
  input_todo_text: string;
  todos: Todo[];
}

const mapStateToProps = (state: State) => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleRemoveTodo: (index: number) => {
      dispatch(Actions.removeTodo(index));
    },
    handleSwitchDone: (index: number) => {
      dispatch(Actions.switchDone(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
