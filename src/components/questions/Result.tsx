import { PieChart } from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';
import { initialValue } from '../../reducer/reducer';



const Result = () => {
  const RIGHTANSWER = useSelector<initialValue, initialValue['rightans']>(state => state.rightans)
  const WRONGANSWER =useSelector<initialValue, initialValue['wrongans']>(state => state.wrongans)
  const scores = useSelector<initialValue,initialValue['score']>(state => state.score)
  
  return (
    <div style={{marginLeft:50}}>
      <h1 style={{marginBottom:'40px'}}>Your score is <b>{scores}/5</b></h1>

<h3><u>RIGHT_ANSWERS</u></h3>
      {RIGHTANSWER.map(item => {
        return(
          <li style={{color:'green', marginBottom:'10px'}}>{item}</li>
        )
      })}

<h3 style={{ marginTop:'40px'}}><u>WRONG_ANSWERS</u></h3>
      {WRONGANSWER.map(item => {
        return(
          <li style={{color:'red',marginBottom:'10px'}}>{item}</li>
        )
      })}
      
       
      
      <PieChart
        data={[
          { title: 'total',
          
          value: 5 - scores, color: 'red', totalValue: 5 },
          { title: 'your score', value: scores , color: 'green', totalValue: 5 }

        ]}
        radius={40}
   
      />;
      

    </div>
  )
}

export default Result