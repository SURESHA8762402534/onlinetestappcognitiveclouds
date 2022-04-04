import React, { useState } from 'react'
import { Grid, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Qu2 = () => {
  const questions = [

    {
      questionText: 'React is Built by?',
      answerOptions: [
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Facebook', isCorrect: true },
        { answerText: 'Google', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
      isclicked: true
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAnswerOptionClick = (e: any) => {

    setCurrentQuestion(e.target.value)
  };

  const goto = () => {
    navigate('/que3')
    if(currentQuestion === 'Facebook'){
      dispatch({type:'SCORE'})
    }
  }

  const backto = () => {
   navigate('/que1')
  }
  return (
    <>
      <Grid sx={{ml:22}}>
      <Grid xs={12}>
        <Typography sx={{ p: 3 }}>
          Q2. {questions[0].questionText}

        </Typography>

      </Grid>

      <Grid item xs={12} sx={{ m: 1 }}>



        <RadioGroup

          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={(e) => { console.log(e.target.value) }}
          onClick={handleAnswerOptionClick}
        >
          {questions[0].answerOptions.map((answerOption, idx) => (
            <>
              
                <FormControlLabel key={idx} sx={{width:'200rem',ml:5}}   value={answerOption.answerText} control={<Radio />} label={answerOption.answerText} />
            

            </>


          ))}

        </RadioGroup>

      </Grid>




      <Grid container sx={{ m: 8 }}>
        <Grid item xs={2}><ArrowBackIcon onClick={backto} />  </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={2}><ArrowForwardIcon onClick={goto} /></Grid>
      </Grid>
      </Grid>
    
               
    </>
  )
}

export default Qu2