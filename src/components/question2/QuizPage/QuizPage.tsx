import { useEffect, useState } from "react";
import Question from "../Question/Question";

import {
  questionsDataEnglish,
  questionsDataHindi,
  questionsDataSpanish,
} from "../Question/questionsData";
import Pagination from "../Pagination/Pagination";

type Props = {
  language: string;
  data: any;
  setData: any;
  navigate: any;
};

const QuizPage: React.FC<Props> = ({ ...props }) => {
  const [currPage, setCurrPage] = useState(0);

  useEffect(() => {
    const { language } = props;
    if (language === "english") {
      props.setData(questionsDataEnglish);
    } else if (language === "hindi") {
      props.setData(questionsDataHindi);
    } else if (language === "spanish") {
      props.setData(questionsDataSpanish);
    }
  }, []);

  const prevQue = () => {
    setCurrPage((prevState) => prevState - 1);
  };

  const nextQue = () => {
    setCurrPage((prevState) => prevState + 1);
  };

  const handleQueAttempt = (qid: number, ans: any) => {
    props.setData((prevState: any) =>
      prevState.map((i: any) => (i.id === qid ? { ...i, ansInput: ans } : i))
    );
    nextQue();
  };

  const handleFinishTest = (qid: number, ans: any) => {
    handleQueAttempt(qid, ans);
    props.navigate("/result");
  };

  return (
    <div>
      {props.data[currPage] !== undefined && (
        <div>
          <Pagination
            data={props.data}
            currPage={currPage}
            setCurrPage={setCurrPage}
          />
          <Question
            item={props.data[currPage]}
            currPage={currPage}
            data={props.data}
            prevQue={prevQue}
            nextQue={nextQue}
            handleQueAttempt={handleQueAttempt}
            handleFinishTest={handleFinishTest}
          />
        </div>
      )}
    </div>
  );
};

export default QuizPage;