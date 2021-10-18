import { connect } from "react-redux";
import { Dispatch } from "redux";
import TodoList, { Props } from "../TodoList";
import Actions from "../actions/AppAction";

type State = Pick<Props, "todos">;

type TodoListDispatch = Pick<Props, "handleRemoveTodo" | "handleSwitchDone">;

const mapStateToProps = (state: State) => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch): TodoListDispatch => {
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
