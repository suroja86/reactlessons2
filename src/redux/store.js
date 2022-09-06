import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'My first post!', likesCount: 10},
                {id: 2, message: 'Hi, how are you?', likesCount: 4},
                {id: 3, message: 'My some post', likesCount: 4},
            ],
            newPostText: '123',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'I\'am ok'},
                {id: 4, message: 'Yo'},
            ],
            newMessageText: '',
            dialogs: [
                {id: 1, name: 'User 1'},
                {id: 2, name: 'User 2'},
                {id: 3, name: 'User 3'},
                {id: 4, name: 'User 4'}
            ],
        },
    },
    _callSubscriber() {
        console.log('rerender')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export default store
