import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
  import { useState } from "react";
  
  type Props = {
    queObj: any;
    currPage: number;
    data: any;
    prevQue: any;
    nextQue: any;
    handleQueAttempt: any;
    handleFinishTest: any;
  };
  
  const MCQ: React.FC<Props> = ({ ...props }) => {
    const { queObj } = props;
    const [ansInput, setAnsInput] = useState("");
  
    const handleInputChange = (e: any) => {
      setAnsInput(e.target.value);
    };
  
    const handleSubmit = () => {
      props.handleQueAttempt(queObj.id, ansInput);
    };
  
    const finishTest = () => {
      props.handleFinishTest(queObj.id, ansInput);
    };
  
    return (
      <div>
        <h2>{queObj.que}</h2>
        <div>
          <FormControl className="mcq-options-wrapper">
            <FormLabel id="demo-radio-buttons-group-label">Options</FormLabel>
            <RadioGroup
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="mcq"
              className="mcq-options"
              onChange={handleInputChange}
            >
              {queObj.options.map((option: string) => {
                return (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
          <div className="to-fro-btns">
            <Button
              disabled={props.currPage <= 0}
              variant="contained"
              onClick={props.prevQue}
            >
              Prev
            </Button>
            <Button
              variant="contained"
              onClick={
                props.currPage < props.data.length - 1 ? handleSubmit : finishTest
              }
            >
              {props.currPage < props.data.length - 1 ? "Submit" : "Finish test"}
            </Button>
            <Button
              disabled={props.currPage >= props.data.length - 1}
              variant="contained"
              onClick={props.nextQue}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  };
  
  export default MCQ;