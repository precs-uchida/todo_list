import React from "react";
import { Textbox, Button, ButtonGroup, FormGroup } from "./Elements";

interface Props {
  input_todo_text: string;
  handleChangeText: (input_text: string) => void;
  handleAddTodo: (input_todo_text: string) => void;
}

const AddForm: React.FC<Props> = (props) => {
  const { input_todo_text, handleChangeText, handleAddTodo } = props;

  // todoテキストボックス値変更処理
  const changeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleChangeText(event.target.value);
  };

  // 追加ボタン処理
  const addClick = (): void => {
    if (!input_todo_text) {
      alert("todoを入力してください");
      return;
    }
    handleAddTodo(input_todo_text);
  };

  return (
    <FormGroup>
      <ButtonGroup>
        <Textbox
          value={input_todo_text}
          placeholder="今日やることを追加"
          onChange={changeText}
          type="text"
        />
        <Button color="blue" size="lg" onClick={addClick}>
          ADD
        </Button>
      </ButtonGroup>
    </FormGroup>
  );
};

export default AddForm;
