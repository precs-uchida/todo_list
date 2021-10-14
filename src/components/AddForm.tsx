import React from "react";
import { Textbox, Button, ButtonGroup, FormGroup } from "./Elements";

interface Props {
  input_todo_text: string;
  addClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  changeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddForm: React.FC<Props> = (props) => {
  const { input_todo_text, addClick, changeText } = props;
  return (
    <FormGroup>
      <ButtonGroup>
        <Textbox
          value={input_todo_text}
          placeholder="今日やることを追加"
          onChange={changeText}
          type="text"
        />
        <Button className="blue lg" onClick={addClick}>
          ADD
        </Button>
      </ButtonGroup>
    </FormGroup>
  );
};

export default AddForm;
