export interface initialValue {
    drawer: boolean,
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