import React, { useState } from 'react'
import { Grid, Typography,  Radio, RadioGroup, FormControlLabel,Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const Qu2 = () => {
  const questions = [

    {
      questionText: 'Can you use Hooks in class component?',
      answerOptions: [
          { answerText: 'YES', isCorrect: false },
          { answerText: 'NO', isCorrect: true },
          { answerText: 'SOMETIMES', isCorrect: false },
          { answerText: 'NONE OF THE ABOW', isCorrect: false },
      ],
      isclicked:true
  }
  ];

  const [currentQuestion, setCurrentQuestion] = useState('');
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const [flag, setflag] = useState<boolean>(false)

  const handleAnswerOptionClick = (e: any) => {
    setCurrentQuestion(e.target.value)
    dispatch({type:'ANS4'})
  };

  const save = () => {
    if(currentQuestion === 'NO'){
      dispatch({type:'SCORE'})
    }
    setflag(true)
  }
  const goto = () => {
    navigate('/que5')
    
  }

  const backto = () => {
   navigate('/que3')
  }
  return (
    <>
      <Grid sx={{ml:22}}>
      <Grid xs={12}>
        <Typography sx={{ p: 3 }}>
          Q4. {questions[0].questionText}

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
             
                <FormControlLabel sx={{width:'200rem',ml:5}}  key={idx} value={answerOption.answerText} control={<Radio />} label={answerOption.answerText} />
     

            </>


          ))}

        </RadioGroup>

      </Grid>




      <Grid container sx={{ m: 8 }}>
        <Grid item xs={2}><ArrowBackIcon onClick={backto} />  </Grid>
        <Grid item xs={7}></Grid>
        <Grid item xs={2}><Button disabled={flag} variant='outlined' onClick={save} style={{backgroundColor:'grey',marginRight:20, color:'blue'}}>Save</Button><ArrowForwardIcon onClick={goto} /></Grid>
      </Grid>
      </Grid>
    
               
    </>
  )
}

export default Qu2