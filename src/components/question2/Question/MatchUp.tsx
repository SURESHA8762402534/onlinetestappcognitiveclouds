import { Button, TextField } from "@mui/material";
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

const MatchUp: React.FC<Props> = ({ ...props }) => {
  const { queObj } = props;
  const [optionsArr, setOptionsArr] = useState(queObj.columnA);

  const handleInputChange = (id: string) => (e: any) => {
    setOptionsArr((prevState: any) =>
      prevState.map((i: any) =>
        i.id === id
          ? {
              ...i,
              selectedOpt:
                queObj.columnB[e.target.value.toLowerCase().charCodeAt(0) - 97],
            }
          : i
      )
    );
  };

  const handleSubmit = () => {
    props.handleQueAttempt(queObj.id, optionsArr);
  };

  const finishTest = () => {
    props.handleFinishTest(queObj.id, optionsArr);
  };

  return (
    <div>
      <h2>{queObj.que}</h2>
      <div className="match-up-options-wrapper">
        <div>
          <p className="column-heading">Column A</p>
          {queObj.columnA.map((i: any) => {
            return (
              <p key={i.id}>
                <span style={{ marginRight: "10px" }}>
                  {queObj.columnA.indexOf(i) + 1}.
                </span>
                <span>{i.opt}</span>
              </p>
            );
          })}
        </div>
        <div className="match-up-answers-column">
          <p className="column-heading">Column B</p>
          {queObj.columnB.map((i: string, index: number) => {
            return (
              <p key={index}>
                <span style={{ marginRight: "10px" }}>
                  {String.fromCharCode(index + 65)}.
                </span>
                <span>{i}</span>
              </p>
            );
          })}
        </div>
      </div>
      <div className="match-up-answers">
        <p className="column-heading">Your answers:</p>
        {queObj.columnA.map((i: any) => {
          return (
            <p key={i.id}>
              <span style={{ marginRight: "10px" }}>
                {queObj.columnA.indexOf(i) + 1}.
              </span>
              <TextField
                variant="standard"
                style={{ width: "60px" }}
                onChange={handleInputChange(i.id)}
              />
            </p>
          );
        })}
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

export default MatchUp;