import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

const store = {

    _state: {

        profile: {
            postData: [
                { id: 1, message: 'Hey, how are you?', likeCounts: 20 },
                { id: 2, message: 'Tell me about your dream', likeCounts: 50 },

            ],

            newPostText: ''
        },


        dialogs: {
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
        },

        sidebar: {


            friendsData: [
                { id: 1, name: 'Stasya', img: 'https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg' },
                { id: 2, name: 'Dipper', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2YNFcBGNpYx8nqtN_TUOdWg4lkerCe7Dkw&usqp=CAU' },
                { id: 3, name: 'Spanch Bob', img: 'https://www.meme-arsenal.com/memes/7676c1255a62f822fd9c2160a12794e2.jpg' },
                { id: 4, name: 'Gibson Girl', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOCuZENwByVupRplLp-xeKESHJFik3wQ1ig&usqp=CAU' }
            ]
        },



    },

    _callSubscriber() {
        console.log("state haven`t change")
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;

    },


    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);

        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._callSubscriber(this._state);
    }

}



window.store = store;





export default store

