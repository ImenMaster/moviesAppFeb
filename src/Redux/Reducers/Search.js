export const GET_SEARCH = "GET_SEARCH";
const ON_CHANGE_INPUT = "ON_CHANGE_INPUT";
const ON_CHANGE_RATING = "ON_CHANGE_RATING";


export const getSearch = () => ({
  type: GET_SEARCH
});

export const ONChangeInput = (val) => ({
  type: ON_CHANGE_INPUT,
  val
  
});

export const ONChangeRating = (val) => ({
  type: ON_CHANGE_RATING,
  val
  
});

const initialState = {search:{inputVal:"",ratingVal:3}};

export default function Search (state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_INPUT:
    return {...state,search:{inputVal:action.val,ratingVal:state.search.ratingVal}}
    case ON_CHANGE_RATING:
    return {...state,search:{inputVal:state.search.inputVal,ratingVal:action.val}}
    default:
      return state;
  }
};
