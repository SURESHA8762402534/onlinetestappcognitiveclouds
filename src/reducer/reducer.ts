export interface initialValue {
    drawer: boolean,
    ans1: boolean,
    ans2: boolean,
    ans3: boolean,
    ans4: boolean,
    ans5: boolean,
    score: number,
    
}

interface draweraction {
    type: 'SET_DRAWER'
}
interface scoreaction {
    type: 'SCORE'
}
interface ans1 {
    type: 'ANS1'
}
interface ans2 {
    type: 'ANS2'
}
interface ans3 {
    type: 'ANS3'
}
interface ans4 {
    type: 'ANS4'
}
interface ans5 {
    type: 'ANS5'
}
interface answers {
    type:'ANSWER',
    paload:['']
}
type action = draweraction | scoreaction | ans1 | ans2 | ans3 | ans4 | ans5 |answers

const InitialValue = {
    drawer: false,
    ans1: false,
    ans2: false,
    ans3: false,
    ans4: false,
    ans5: false,
    score: 0,
    
}

const reducer = (state: initialValue = InitialValue, action: action) => {
    const newState = {...state};

    switch (action.type) {
        case 'SET_DRAWER':
            newState.drawer = !newState.drawer;
            // console.log(newState.drawer)
            break;
        case 'SCORE':
            newState.score += 1
            // console.log(newState.score)
            break;
        case 'ANS1':
            newState.ans1 = true
            // console.log(newState.ans1)
            break;

        case 'ANS2':
            newState.ans2 = true
            break;
        case 'ANS3':
            newState.ans3 = true
            break;
        case 'ANS4':
            newState.ans4 = true
            break;
        case 'ANS5':
            newState.ans5 =true
            break;
        default:
            break;
    }
    return newState
}

export default reducer