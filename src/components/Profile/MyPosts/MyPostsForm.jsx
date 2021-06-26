import { Formik, Form, Field, ErrorMessage } from "formik";
import MainButton from "../../commons/Buttons";
import styles from "./MyPosts.module.css";
const PostsForm = (props) => {
  return (
    <Formik
      initialValues={{ postField: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.postField) errors.postField = "Type something";

        return errors;
      }}
      onSubmit={(values) => props.addPost(values.postField)}
    >
      {({ errors }) => (
        <Form>
          <Field
            as="textarea"
            name="postField"
            id="postField"
            placeholder="Type message..."
            className={errors.postField && styles.errors}
          />

          <div>
            <ErrorMessage name="postField" className={styles.errors}/>
          </div>
          <MainButton type="submit" value="Add Post" />
        </Form>
      )}
    </Formik>
  );
};

export default PostsForm;
