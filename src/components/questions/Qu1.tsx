import React, { useEffect, useState } from 'react';
import { Grid, Typography, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { initialValue } from '../../reducer/reducer';

type Props = {
    queObj: any;
    currPage: number;
    data: any;
    prevQue: any;
    nextQue: any;
    // handleQueAttempt: any;
    // handleFinishTest: any;
};

const Qu1: React.FC<Props> = ({ ...props }) => {

    const [currentAns, setAns] = useState<string>('');

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const checkstate = useSelector<initialValue, initialValue['rightans']>(state => state.rightans);

    const handleAnswerOptionClick = (e: any) => {
        setAns(e.target.value)

    };

    const goto = () => {
        navigate('/result')
        dispatch({ type: 'SCORE' })
        console.log(props.queObj)

    }

    const save =()=>{}
    useEffect(() => {
           if(currentAns !== ''){
            if (props.data.answer === currentAns) {
                dispatch({ type: 'ANSWER', payload:{id:props.data.id, que:props.data.questionText, currentAns} })
                
            } else {
                dispatch({ type: 'WRONGANS', payload:{id:props.data.id, que:props.data.questionText, currentAns} })
            }
            dispatch({type:'ID', payload:props.currPage+1})
           }
       
    },[currentAns])

    return (

        <>

            <Grid container spacing={2} sx={{ ml: 10 }}>


                <Grid item xs={12}>
                    <Typography sx={{ p: 3 }}>
                        Q{props.currPage + 1}. {props.data?.questionText}
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
                        {props.data.answerOptions.map((answerOption: any, idx: any) => (
                            <>

                                <FormControlLabel key={idx} sx={{ width: '200rem', ml: 5 , m:1}}
                                    value={answerOption.answerText}
                                    control={<Radio />}
                                    label={answerOption.answerText}
                                />

                            </>


                        ))}

                    </RadioGroup>


                </Grid>



                <Grid container sx={{ m: 8 }}>
          <Grid item xs={2}><Button onClick={props.prevQue} variant='outlined' disabled={props.currPage <= 0}><ArrowBackIcon /></Button>  </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={1}><Button disabled={props.data.type != "multi-select"} variant='outlined' onClick={save} >Save</Button></Grid>
          <Grid item xs={1}><Button disabled={props.currPage < props.queObj.length - 1} variant='outlined' onClick={goto} >Submit</Button></Grid>
          <Grid item xs={1}> <Button variant='outlined' disabled={props.currPage >= props.queObj.length - 1} onClick={props.nextQue}><ArrowForwardIcon /></Button></Grid>
        </Grid>
            </Grid>

        </>


    );
}

export default Qu1