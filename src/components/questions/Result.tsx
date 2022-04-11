import { PieChart } from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';
import { initialValue } from '../../reducer/reducer';



const Result = () => {
  const RIGHTANSWER = useSelector<initialValue, initialValue['rightans']>(state => state.rightans)
  const WRONGANSWER = useSelector<initialValue, initialValue['wrongans']>(state => state.wrongans)
  const scores = useSelector<initialValue, initialValue['score']>(state => state.score)


  // const mystyle = {
  //   height: '30rem',
  //   width: '30rem',
  //   backgroundColor: "red",
  //   backgroundImage: `conic-gradient(green 0deg, green calc(${scores}*60)deg,  red calc(${scores}*60)deg, red 360deg)`,
  //   borderRadius: "50%"

  // }

  return (
    <div>
      <div style={{ marginLeft: 50, float: 'left' }}>
        <h1 style={{ marginBottom: '40px' }}>Your score is <b>{scores}/6</b></h1>

        <h3><u>RIGHT_ANSWERS</u></h3>
        {RIGHTANSWER.map(item => {
          return (
            <li style={{ color: 'green', marginBottom: '10px' }}>{item}</li>
          )
        })}

        <h3 style={{ marginTop: '40px' }}><u>WRONG_ANSWERS</u></h3>
        {WRONGANSWER.map(item => {
          return (
            <li style={{ color: 'red', marginBottom: '10px' }}>{item}</li>
          )
        })}
      </div>

      <div style={{ float: 'right', marginRight: '10rem', marginTop: '5rem' }}>
         {/* <div style={mystyle}></div> */}
      
      <PieChart
        data={[
          { title: 'total',
          
          value: 5 - scores, color: 'red', totalValue: 5 },
          { title: 'your score', value: scores , color: 'green', totalValue: 5 }

        ]}
        radius={50}
   
      />;
</div>


    </div>
  )
}

export default Result