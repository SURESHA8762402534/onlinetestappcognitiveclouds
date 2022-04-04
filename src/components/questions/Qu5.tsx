import React, { useState } from 'react'
import { Grid, Typography, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Qu2 = () => {
  const questions = [

    {
      questionText: 'What is JSX?',
      answerOptions: [
          { answerText: 'It is a Library, which used to right HTML code', isCorrect: false },
          { answerText: 'It allows us to write HTML inside JavaScript ', isCorrect: true },
          { answerText: 'help react identify which elements were added, changed or removed', isCorrect: false },
          { answerText: 'NONE OF THE ABOW', isCorrect: false },
      ],
      isclicked:true
  }
  ];

  const [currentQuestion, setCurrentQuestion] = useState('');
  const navigate = useNavigate();
  const dispatch =useDispatch()

  const handleAnswerOptionClick = (e: any) => {
    setCurrentQuestion(e.target.value)
  };

  const goto = () => {
    navigate('/result')
    if(currentQuestion === 'It allows us to write HTML inside JavaScript '){
      dispatch({type:'SCORE'})
    }
  }

  const backto = () => {
   navigate('/que4')
  }
  return (
    <>
    <Grid sx={{ml:22}}>
    <Grid xs={12}>
        <Typography sx={{ p: 3 }}>
          Q5. {questions[0].questionText}

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
              
                <FormControlLabel sx={{width:'200rem',ml:5}} key={idx} value={answerOption.answerText} control={<Radio />} label={answerOption.answerText} />
             

            </>


          ))}

        </RadioGroup>

      </Grid>




      <Grid container sx={{ m: 8 }}>
        <Grid item xs={2}><ArrowBackIcon onClick={backto} />  </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={2}><Button variant='outlined' onClick={goto} >Submit</Button></Grid>
      </Grid>
    </Grid>
    
               
    </>
  )
}

export default Qu2