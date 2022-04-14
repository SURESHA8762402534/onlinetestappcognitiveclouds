export interface initialValue {
    
    score: number,
    rightans: {}[],
    wrongans: {}[],
    ansID:number[]
    
}


interface scoreaction {
    type: 'SCORE'
}

interface rightanswers {
    type:'ANSWER',
    payload:any
}

interface wronganswers {
    type:'WRONGANS',
    payload:any
}

interface answersID {
    type:'ID',
    payload:number
}

type action =  scoreaction |  rightanswers | wronganswers | answersID

const InitialValue = {
    score: 0,
    rightans:[],
    wrongans:[],
    ansID:[]
}

const reducer = (state: initialValue = InitialValue, action: action) => {
    const newState = {...state};

    switch (action.type) {
        
        case 'SCORE':
            newState.score = newState.rightans.length
            break;
        
        case 'ANSWER':
           if(newState.rightans.length < 1){
            newState.rightans = [...newState.rightans, action.payload]
           }else {
            let flag = true
            newState.rightans.forEach((item:any)=>{
                if(item.currentAns === action.payload.currentAns){
                    flag = false
                }
            })
            if(flag){
                newState.rightans = [...newState.rightans, action.payload]
            }
           }
                // if(!newState.rightans.includes(action.payload)){
                //     newState.rightans = [...newState.rightans, action.payload]
                // }     
           
             break;
        case 'WRONGANS':
          
            if(newState.wrongans.length < 1){
                newState.wrongans = [...newState.wrongans, action.payload]
               }else {
                let flag = true
                newState.wrongans.forEach((item:any)=>{
                    if(item.currentAns === action.payload.currentAns){
                        flag = false
                    }
                })
                if(flag){
                    newState.wrongans = [...newState.wrongans, action.payload]
                }
               }
            
            break;
        case 'ID':
            if(!newState.ansID.includes(action.payload)){
                newState.ansID = [...newState.ansID, action.payload]
            }
            
            break;
        default:
            break;
    }
    return newState
}

export default reducer