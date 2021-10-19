import { connect } from "react-redux";
import { Dispatch } from "redux";
import Actions from "../actions/AppAction";
import App, { AppProps } from "../App";

const mapStateToProps = () => {
  return {};
};
type AppDispatch = Pick<AppProps, "init">;

const mapDispatchToProps = (dispatch: Dispatch): AppDispatch => {
  return {
    init: () => {
      dispatch(Actions.init());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
