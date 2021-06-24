
import { Formik, Form, Field, ErrorMessage } from 'formik';
import MainButton from '../../commons/Buttons';

const PostsForm = (props) => {

  return (
    <Formik
      initialValues={
        { postField: '' }
      }
      validate={values => {
        const errors = {}
        if (!values.postField) errors.postField = 'Type something'

        return errors;
      }


      }
      onSubmit={values => props.addPost(values.postField)}
     
    >
      <Form>
        <Field as='textarea' name='postField' id='postField' placeholder='Type message...' />
        <div>
          <ErrorMessage name='postField' />
       
        </div>
        <MainButton type='submit' value ='Add Post'/>
      </Form>
    </Formik>
  )
}






export default PostsForm;