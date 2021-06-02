import React from 'react'
import { Redirect } from 'react-router';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css'
import Message from './Messages/Message';


const Dialogs = (props) => {

    let dialogsElements =
        props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} key={dialog.id} />)


    let messagesElements =
        props.messages.map(message => <Message message={message.message} id={message.id} key={message.id} />);


    
    let sendMessage = () => {

        props.sendMessage()
    }

    let onChangeText = (event) => {
       let text = event.target.value;
        props.onChangeText(text)
    }

if (!props.isAuth)
 return <Redirect to ='/login'/>
  
   


 return (
         
        <div className={styles.dialogs}>

            <div className={styles.dialogItems}>

                {dialogsElements}



            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div className={styles.textarea}>

                <textarea name="message" id="2" cols="70" rows="5"
                    value={props.newMessageText}
                    onChange={onChangeText} />
                <button onClick={sendMessage} className={styles.send}>Send</button>
            </div>
            
                

        </div>
    )




};


export default Dialogs