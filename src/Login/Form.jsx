import { Form, Field } from 'react-final-form'
import styles from './login.module.css'
const LoginForm = (props) => {
  const onSubmit = (e) => {
    debugger;
  }


  const validate = (e) => {
    const errors = {}
    if (e.password && e.password.length < 8) {

      errors.password = 'Too short'
    }
    return errors;
  }
  const initialData = {
    login: 'sashunya'
  }
  return (
    <div>
      <Form
        onSubmit={onSubmit}

        validate={validate}
        initialValues={initialData}
        render={({ handleSubmit }) => (

          <form onSubmit={handleSubmit}>
            <div>
              <label>Login</label>
              <Field name='login' component='input' placeholder='Login' />
            </div>
            <div>
              <Field
                name='password'
                render={({ input, meta }) => (
                  <div>
                    <label>Password</label>
                    <input {...input} />
                    {meta.touched && meta.error && <div>{meta.error}</div>}
                  </div>
                )}
                placeholder='Password'
              />
            </div>
            <div>
            <label>remindMe</label>
            <Field name="remind Me" component="input" type="checkbox" />
          </div>
            <button type='submit'>Submit</button>

          </form>

        )

        } />
    </div>
  )
}


export default LoginForm
