export interface initialValue {
    drawer: boolean,
    ans1:string,
    ans2:string,
    ans3:string,
    ans4:string,
    ans5:string,
    score:number
}

interface draweraction {
    type: 'SET_DRAWER'
}
interface scoreaction {
    type:'SCORE'
}

type action = draweraction | scoreaction

const InitialValue = {
    drawer: false,
    ans1:'',
    ans2:'',
    ans3:'',
    ans4:'',
    ans5:'',
    score:0
}

const reducer = (state: initialValue = InitialValue, action: action) => {
    const newState = state;

    switch (action.type) {
        case 'SET_DRAWER':
            newState.drawer = true;
            console.log(newState.drawer)
            break;
        case 'SCORE':
        newState.score += 1
        console.log(newState.score)
        break;  
        default:
            break;
    }
    return newState
}

export default reducer