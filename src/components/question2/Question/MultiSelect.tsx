import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
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
  
  const MultiSelect: React.FC<Props> = ({ ...props }) => {
    const { queObj } = props;
    const [ansInput, setAnsInput]: any = useState([]);
  
    const handleInput = (e: any) => {
      const {
        target: { value },
      } = e;
      setAnsInput(typeof value === "string" ? value.split(",") : value);
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
          <p className="column-heading">Options</p>
          <div>
            {queObj.options.map((i: any, index: number) => {
              return (
                <div key={index} style={{ margin: "25px 0" }}>
                  <span style={{ marginRight: "10px" }}>{index + 1}.</span>
                  <span>{i}.</span>
                </div>
              );
            })}
          </div>
          <div style={{ margin: "40px 0" }}>
            <p className="column-heading">Select all valid options:</p>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Options</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={ansInput}
                onChange={handleInput}
                input={<OutlinedInput label="Option" />}
              >
                {queObj.options.map((i: string) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
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
  
  export default MultiSelect;