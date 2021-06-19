
import { Formik, Form, Field, ErrorMessage } from 'formik';


const PostsForm = (props) => {
debugger;
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
        <button type='submit'>Add Post</button>
      </Form>
    </Formik>
  )
}






export default PostsForm;