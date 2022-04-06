
import React, { useEffect, useState } from 'react'

import { PieChart } from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';
import { initialValue } from '../../reducer/reducer';



const Result = () => {
  const [score, setScore] = useState(0)
  const scores = useSelector<initialValue,initialValue['score']>(state => state.score)
  useEffect(() =>{
    setScore(scores) ;
    console.log(scores)}, [scores])
  return (
    <>
      <h1 >Your score is {score}/5
      <PieChart
        data={[
          { title: 'total',
          
          value: 5 - score, color: 'red', totalValue: 5 },
          { title: 'your score', value: score , color: 'green', totalValue: 5 }

        ]}
        radius={50}
   
      />;
       
      </h1>
      

    </>
  )
}

export default Result