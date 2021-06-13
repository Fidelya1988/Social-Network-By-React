import React from 'react'
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css'
import Message from './Messages/Message';
import { Formik, Form, Field} from 'formik';

const DialogsForm = (props) => {
    return (
        <Formik
            initialValues={{ messageField: '' }}
            validate={values => {
                const errors = {}
                if (values.messageField === '') errors.messageField = 'Required'
                return errors
            }}
            onSubmit={values => props.sendMessage(values.messageField)
            }
        >
            <Form>
                <Field
                    as='textarea' name='messageField' id='messageField' placeholder='Type message...' />
                <div>
                    <button type='submit'>Send</button>
                </div>
            </Form>
        </Formik>
    )
}

const Dialogs = (props) => {

    let dialogsElements =
        props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} key={dialog.id} />)


    let messagesElements =
        props.messages.map(message => <Message message={message.message} id={message.id} key={message.id} />);

    return (

        <div className={styles.dialogs}>

            <div className={styles.dialogItems}>

                {dialogsElements}



            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div className={styles.textarea}>
                <DialogsForm sendMessage={props.sendMessage} />
            </div>



        </div>
    )




};


export default Dialogs