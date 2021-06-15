import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Redirect } from 'react-router-dom'
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
   
    return errors;
  }
  return (
    <Formik
      initialValues={
        {
          email: 'oleksandram1988@gmail.com',
          password: 'Kazkazubrik2020',
          rememberMe: false
        }

      }
      validate={validate}

      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
        props.login(values.email, values.password, values.rememberMe);
      if(props.isAuth) <Redirect to='/profile'/>
      }}

    >
      <Form>
        <div className={styles.inputItem}>
          
          <Field type='email' name='email' id='email' placeholder= 'Email' />
          <div className={styles.errors}>
            <ErrorMessage name='email' />
          </div>
        </div>
        <div className={styles.inputItem}>
         
          <Field type='password' name='password' id='password' placeholder='Password' />
          <div className={styles.errors}>
            <ErrorMessage name='password' />
          </div>
        </div>
       
        
        <div>
          <label htmlFor='rememberMe'>Remember me: </label>
          <Field className= {styles.checkbox} type='checkbox' name='rememberMe' id='rememberMe' />
        </div>
        <button type='submit'>Login</button>
      </Form>
    </Formik>
  )
}


export default LoginForm
