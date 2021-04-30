const SEND_MESSAGE = 'SEND-MESSAGE';
const WRIGHT_MESSAGE = 'WRIGHT-MESSAGE';
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const wrightMessageActionCreator = (text) => ({ type: WRIGHT_MESSAGE, newText: text });

let initialState = (  {
    dialogsData: [
        {
            id: 1, name: 'Vova',
            img: 'https://forum.survarium.com/ru/images/avatars/gallery/personnages/avatar1.jpg'
        },
        {
            id: 2, name: 'Lera',
            img: 'https://image.freepik.com/free-vector/illustration-of-young-woman-meditating_23-2148513213.jpg'
        },
        {
            id: 3, name: 'Stasya',
            img: 'https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg'
        },
        {
            id: 4, name: 'Masha'
            ,
            img: 'https://i.pinimg.com/736x/36/e8/0d/36e80da1689795f5cfc128aa4c7ac978.jpg'
        },
        {
            id: 5, name: 'Dima',
            img: 'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg'
        },
        {
            id: 6, name: 'Eva'
            ,
            img: 'https://instagram.fiev22-1.fna.fbcdn.net/v/t51.2885-15/e35/150803616_125725922765394_6128650781430311225_n.jpg?_nc_ht=instagram.fiev22-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=HwUmKj6gl2AAX9FF0bS&tp=1&oh=018ace9e6cccdc7f9a84fdc39ccb8606&oe=60541F7C'
        }

    ],

    messagesData: [
        { id: 1, message: 'Hi!)' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Hi =))' },
        { id: 4, message: 'good' },




    ],
    newMessageText: ''
})


const dialogsReducer = (state = initialState, action) => {
  

    switch (action.type)  {
        case SEND_MESSAGE:
        let newMessage = {

            id: state.messagesData.length + 1,
            message: state.newMessageText
        }
        state.messagesData.push(newMessage);
        state.newMessageText = ''
        return state;

    case WRIGHT_MESSAGE:
        state.newMessageText = action.newText;

        return state;
       default: return state;
    }
}


export default dialogsReducer;