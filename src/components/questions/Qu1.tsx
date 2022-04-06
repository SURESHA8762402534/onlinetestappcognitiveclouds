import React, { useState } from 'react';
import { Grid,  Typography,  Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.primary,
// }));

export default function Qu1() {
    const questions = [
        {
            questionText: 'What is React js?',
            answerOptions: [
                { answerText: ' is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications,', isCorrect: false },
                { answerText: 'A component-based framework for building scalable web applications ', isCorrect: false },
                { answerText: 'is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.', isCorrect: true },
                { answerText: 'none of the Abow', isCorrect: false },
            ],
            isclicked: true
        }

    ];

    const [currentQuestion, setCurrentQuestion] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleAnswerOptionClick = (e: any) => {
        setCurrentQuestion(e.target.value)
        dispatch({type:'ANS1'})
        
    };

    const goto = () => {
        navigate('/que2')
        if(currentQuestion === 'is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.'){
            dispatch({type:'SCORE'})
        }
        
    }

    const backto = () => {
        navigate('/enterpage')
    }
    return (


<>


        <Grid container spacing={2} sx={{ml:22}}>
            
                
                    <Grid key={currentQuestion} item xs={12}>
                        <Typography sx={{ p: 3 }}>
                            Q1. {questions[0].questionText}
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
                                 
                                        <FormControlLabel key={idx} sx={{width:'200rem',ml:5}}   
                                        value={answerOption.answerText} 
                                        control={<Radio />} 
                                        label={answerOption.answerText} 
                                        />
                                  
                                </>


                            ))}

                        </RadioGroup>
                       

                    </Grid>


                
            <Grid container sx={{ m: 8 }}>
                <Grid item xs={2}><Button disabled><ArrowBackIcon onClick={backto} /></Button>  </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={2}><ArrowForwardIcon onClick={goto} /></Grid>
            </Grid>
        </Grid>
     
        </>


    );
}