const ADD_POST = 'ADD-POST';
const WRIGHT_POST = 'WRIGHT-POST';
export const addPostActionCreator = () => ({ type: ADD_POST });
export const wrightPostActionCreator = (text) => ({ type: WRIGHT_POST, newText: text });

let initialState = (
    {
        postData: [
            { id: 1, message: 'Hey, how are you?', likeCounts: 20 },
            { id: 2, message: 'Tell me about your dream', likeCounts: 50 },

        ],

        newPostText: ''
    }
)


const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST: 

            let newPost = {
                id: state.postData.length + 1,
                message: state.newPostText,
                likeCounts: 0
            }
            return { 
                ...state,
               postData: [...state.postData, newPost],
               newPostText: ''
            
            }
        
         
        case WRIGHT_POST: 
          return {
              ...state,
             newPostText: action.newText
            
           
        }
        default: return state;
    }
}


export default profileReducer;