import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from './login.module.css'
const LoginForm = (props) => {
  const validate = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    if (!values.repassword) {
      errors.repassword = 'Required'
    } else if (values.password !== values.repassword) {
      errors.repassword = 'Passwords are diffrent!'
    }
    return errors;
  }
  return (
    <Formik
      initialValues={
        {
          email: 'myemail@mail.com',
          password: '',
          repassword: '',
          remindMe: false
        }

      }
      validate={validate}

      onSubmit={values => {
        alert(JSON.stringify(values, null, 2))
      }}

    >
      <Form>
        <div className={styles.inputItem}>
          <label htmlFor='email'>Email: </label>
          <Field type='text' name='email' id='email' />
          <div className={styles.errors}>
            <ErrorMessage name='email' />
          </div>
        </div>
        <div className={styles.inputItem}>
          <label htmlFor='password'>Password: </label>
          <Field type='password' name='password' id='password' />
          <div className={styles.errors}>
            <ErrorMessage name='password' />
          </div>
        </div>
        <div className={styles.inputItem}>
          <label htmlFor='repassword'>Password again: </label>
          <Field type='password' name='repassword' id='repassword' />
          <div className={styles.errors}>
            <ErrorMessage name='repassword' />
          </div>
        </div>
        <div className={styles.inputItem}>
          <label htmlFor='remindMe'>Remind me: </label>
          <Field type='checkbox' name='remindMe' id='remindMe' />
        </div>
        <button type='submit'>Register</button>
      </Form>
    </Formik>
  )
}


export default LoginForm
