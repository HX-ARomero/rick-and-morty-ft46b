import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes"

const initialState = {
    myFavorites: [],//[{},{},{}]
    allCharacters:[],
    errors: ""
}

function reducer(state = initialState, { type, payload }){
    switch(type){
        case 'ADD_FAV':
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload,
                errors: ""
            };
        case 'REMOVE_FAV':
                return { 
                    ...state,
                    myFavorites: payload,
                    errors: ""
                };
        case FILTER:
            const genderFiltered = state.allCharacters.filter(char => char.gender === payload)

            return {
                ...state,
                myFavorites:payload === 'All' ? state.allCharacters : genderFiltered
            }

        case ORDER:
    
            const orderedCharacter = state.myFavorites.sort((a,b)=>{
                if(payload === 'ascendente') return a.id - b.id
                return b.id - a.id
            })
            return {
                ...state,
                myFavorites:[...orderedCharacter]
            }
        case "ERROR":
            return {
                ...state,
                errors: payload
            }
        default:
            return state
    }
}

export default reducer