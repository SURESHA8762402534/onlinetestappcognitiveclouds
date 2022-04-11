import { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./result.css";

type Props = {
  data: any;
};
const Result: React.FC<Props> = ({ ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { data } = props;
  const [totalMarks, setTotalMarks] = useState(0);
  const [marks, setMarks] = useState(0);

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].type === "match-up") {
        let correct = data[i].ansInput
          ?.map((op: any) => op.answer === op.selectedOpt)
          .filter((i: any) => i === true).length;
        if (!isNaN(correct)) {
          setMarks((prevMarks) => prevMarks + 1);
        }
        setTotalMarks(
          (prevTotalMarks) => prevTotalMarks + data[i].columnA.length
        );
      } else if (data[i].type === "multi-select") {
        if (
          JSON.stringify(data[i].answer.sort()) ===
          JSON.stringify(data[i].ansInput.sort())
        ) {
          setMarks((prevMarks) => prevMarks + 1);
        }
        setTotalMarks((prevTotalMarks) => prevTotalMarks + 1);
      } else {
        data[i].answer === data[i].ansInput &&
          setMarks((prevMarks) => prevMarks + 1);
        setTotalMarks((prevTotalMarks) => prevTotalMarks + 1);
      }
    }
    setIsLoading(false);
  }, []);

  console.log(marks);

  if (isLoading) {
    return <p className="loader">Calculating result...</p>;
  }

  return (
    <div className="results-wrapper">
      <div className="correct-ans">
        <h2 role="ans-header">Answers</h2>
        {data.map((i: any, index: number) => {
          if (i.type === "match-up") {
            return (
              <div>
                <p>{index + 1}.</p>
                <div>
                  <p>Your answer:</p>
                  {i.ansInput.map((a: any) => (
                    <span style={{ marginRight: "10px" }}>{a.selectedOpt}</span>
                  ))}
                </div>
                <div>
                  <p>Correct answer:</p>
                  {i.ansInput.map((a: any) => (
                    <span style={{ marginRight: "10px" }}>{a.answer}</span>
                  ))}
                </div>
              </div>
            );
          } else if (i.type === "multi-select") {
            return (
              <div>
                <p>{index + 1}.</p>
                <div>
                  <span style={{ marginRight: "10px" }}>Your answer:</span>
                  {i.ansInput.map((a: string) => (
                    <span style={{ marginRight: "10px" }}>{a}</span>
                  ))}
                </div>
                <br />
                <div>
                  <span style={{ marginRight: "10px" }}>Correct answer:</span>
                  {i.answer.map((a: string) => (
                    <span style={{ marginRight: "10px" }}>{a}</span>
                  ))}
                </div>
              </div>
            );
          } else {
            return (
              <div>
                <p>{index + 1}.</p>
                <div>
                  <span style={{ marginRight: "10px" }}>Your answer:</span>
                  <span>{i.ansInput}</span>
                </div>
                <br />
                <div>
                  <span style={{ marginRight: "10px" }}>Correct answer:</span>
                  <span>{i.answer}</span>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="pie">
        <h2>Result</h2>
        <h3 style={{marginTop: "25px"}} role="marks-scored">Your total score is {marks} out of {totalMarks}.</h3>
        <PieChart
          totalValue={totalMarks}
          data={[
            {
              title: `Correct answers ${(marks / totalMarks) * 100}`,
              value: marks,
              color: "green",
            },
            {
              title: `Incorrect answers  ${
                ((totalMarks - marks) / totalMarks) * 100
              }`,
              value: totalMarks - marks,
              color: "red",
            },
          ]}
        />
      </div>
    </div>
  );
};

export {Result};