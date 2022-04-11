import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
  import React, { useState } from "react";
  
  type Props = {
    queObj: any;
    currPage: number;
    data: any;
    prevQue: any;
    nextQue: any;
    handleQueAttempt: any;
    handleFinishTest: any;
  };
  
  const TrueFalse: React.FC<Props> = ({ ...props }) => {
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
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Options</FormLabel>
            <RadioGroup
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="true-false"
              onChange={handleInputChange}
            >
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel value="false" control={<Radio />} label="False" />
            </RadioGroup>
          </FormControl>
        </div>
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
    );
  };
  
  export default TrueFalse;