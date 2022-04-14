import Qu1 from '../questions/Qu1'
import Qu2 from '../questions/Qu2'
import Qu3 from '../questions/Qu3'
import Qu4 from '../questions/Qu4'
import Qu5 from '../questions/Qu5'

type Props = {
  item: any;
  currPage: number;
  data: any;
  // handleQueAttempt: any;
  // handleFinishTest: any;
  prevQue: any;
  nextQue: any;
};

const Question: React.FC<Props> = ({ ...props }) => {
  switch (props.data.type) {
    case "mcq":
      return (
        <Qu1
          queObj={props.item}
          currPage={props.currPage}
          data={props.data}
          prevQue={props.prevQue}
          nextQue={props.nextQue}
          // handleQueAttempt={props.handleQueAttempt}
          // handleFinishTest={props.handleFinishTest}
        />
      );
    case "boolean":
      return (
        <Qu4
          queObj={props.item}
          currPage={props.currPage}
          data={props.data}
          prevQue={props.prevQue}
          nextQue={props.nextQue}
          // handleQueAttempt={props.handleQueAttempt}
          // handleFinishTest={props.handleFinishTest}
        />
      );
    case "fill-up":
      return (
        <Qu2
          queObj={props.item}
          currPage={props.currPage}
          data={props.data}
          prevQue={props.prevQue}
          nextQue={props.nextQue}
          // handleQueAttempt={props.handleQueAttempt}
          // handleFinishTest={props.handleFinishTest}
        />
      );
    case "multi-select":
      return (
        <Qu5
          queObj={props.item}
          currPage={props.currPage}
          data={props.data}
          prevQue={props.prevQue}
          nextQue={props.nextQue}
          // handleQueAttempt={props.handleQueAttempt}
          // handleFinishTest={props.handleFinishTest}
        />
      );
    case "match-up":
      return (
        <Qu3
          queObj={props.item}
          currPage={props.currPage}
          data={props.data}
          prevQue={props.prevQue}
          nextQue={props.nextQue}
          // handleQueAttempt={props.handleQueAttempt}
          // handleFinishTest={props.handleFinishTest}
        />
      );
    default: {
      return <div></div>;
    }
  }
};

export default Question;
