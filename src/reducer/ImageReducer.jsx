export const initialState = {
  images: [],
  loading: false,
  error: null,
  query: '',
  page: 1,
};

export function imageReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {...state, loading: true, error: null};  

    case "FETCH_SUCCESS":
      return {...state, loading:false, images: [...state.images, ...action.payload], };

    case "FETCH_FAILURE":
      return {...state, query: action.payload, images: [] , page: 1 }

    case "INCREMENT_PAGE":
      return {...state, page: state.page + 1};

    case "SET_QUERY":
      return { ...state, query: action.payload, page: 1, images: [] };
      
    default:
      return state;
  }
}