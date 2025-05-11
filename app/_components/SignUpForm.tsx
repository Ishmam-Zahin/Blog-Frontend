import styles from '@/app/_styles/signUpForm.module.css';
import { useReducer } from 'react';
import { signupFormType, action } from '../_lib/types';
import SignupBtn from './SignupBtn';
import { useMutation } from '@tanstack/react-query';
import createUser from '../_lib/apiFunctions/createUser';
import ApiError from '../_lib/ApiError';
import ShowErrors from './ShowErrors';

const initialState = {
  first_name: '',
  last_name: '',
  gender: 'M',
  age: 0,
  user_name: '',
  email: '',
  password: '',
  password2: '',
}

function reducer(prevState: signupFormType, action: action){
  if(action.type === 'change/first_name'){
    return {...prevState, first_name: action.payload}
  }
  if(action.type === 'change/last_name'){
    return {...prevState, last_name: action.payload}
  }
  if(action.type === 'change/user_name'){
    return {...prevState, user_name: action.payload}
  }
  if(action.type === 'change/email'){
    return {...prevState, email: action.payload}
  }
  if(action.type === 'change/password'){
    return {...prevState, password: action.payload}
  }
  if(action.type === 'change/password2'){
    return {...prevState, password2: action.payload}
  }
  if(action.type === 'change/age'){
    return {...prevState, age: Number(action.payload)}
  }
  if(action.type === 'change/gender'){
    return {...prevState, gender: action.payload}
  }
  if(action.type === 'reset'){
    return initialState;
  }

  return prevState;
}

export default function SignUpForm(
  {
      accountState,
  }: {
      accountState: number,
  }
) {
    const [formState, dispatch] = useReducer(reducer, initialState)
    const {isError, isPending, error, mutate} = useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            dispatch({type: 'reset', payload: ''})
            window.alert('Account Created Successfully!\n You can now login.')
        }
    })
  return (
    <div className={`${styles.container} ${accountState == 1 ? '' : styles.hide}`}>
        <h1 className={styles.text}>Create Your Account Now!</h1>
        <div className={styles.firstContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor='first_name' className={styles.label}>First Name</label><br/>
            <input
            id='first_name'
            className={styles.input}
            placeholder='first name'
            name='first_name'
            type="text"
            value={formState.first_name}
            onChange={(e) => dispatch({type: 'change/first_name', payload: e.target.value})}
            />
            {isError && error instanceof ApiError && error.data.first_name ?
            <ShowErrors errors={error.data.first_name}/> : null}
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='last_name' className={styles.label}>last Name</label><br/>
            <input
            id='last_name'
            className={styles.input}
            placeholder='last name'
            name='last_name'
            type="text"
            value={formState.last_name}
            onChange={(e) => dispatch({type: 'change/last_name', payload: e.target.value})}
            />
            {isError && error instanceof ApiError && error.data.last_name ?
            <ShowErrors errors={error.data.last_name}/> : null}
          </div>
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor='user_name' className={styles.label}>Username</label><br/>
            <input
            id='user_name'
            className={styles.input}
            placeholder='username'
            name='user_name'
            type="text"
            value={formState.user_name}
            onChange={(e) => dispatch({type: 'change/user_name', payload: e.target.value})}
            />
            {isError && error instanceof ApiError && error.data.user_name ?
            <ShowErrors errors={error.data.user_name}/> : null}
        </div>
        <div className={styles.firstContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor='age' className={styles.label}>Age</label><br/>
            <input
            id='age'
            className={styles.input}
            placeholder='age'
            name='age'
            type="number"
            value={formState.age}
            onChange={(e) => dispatch({type: 'change/age', payload: e.target.value})}
            />
            {isError && error instanceof ApiError && error.data.age ?
            <ShowErrors errors={error.data.age}/> : null}
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor='gender' className={styles.label}>Gender</label><br/>
            <select
            id='gender'
            className={styles.input}
            name='gender'
            value={formState.gender}
            onChange={(e) => dispatch({type: 'change/gender', payload: e.target.value})}
            >
              <option value='M'>Male</option>
              <option value='F'>Female</option>
              <option value='O'>Other</option>
            </select>
            {isError && error instanceof ApiError && error.data.gender ?
            <ShowErrors errors={error.data.gender}/> : null}
          </div>
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor='email' className={styles.label}>Email</label><br/>
            <input
            id='email'
            className={styles.input}
            placeholder='email'
            name='email'
            type="email"
            value={formState.email}
            onChange={(e) => dispatch({type: 'change/email', payload: e.target.value})}
            />
            {isError && error instanceof ApiError && error.data.email ?
            <ShowErrors errors={error.data.email}/> : null}
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor='password' className={styles.label}>Password</label><br/>
            <input
            id='password'
            className={styles.input}
            placeholder='password'
            name='password'
            type="password"
            value={formState.password}
            onChange={(e) => dispatch({type: 'change/password', payload: e.target.value})}
            />
            {isError && error instanceof ApiError && error.data.password ?
            <ShowErrors errors={error.data.password}/> : null}
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor='password2' className={styles.label}>Confirm Password</label><br/>
            <input
            id='password2'
            className={styles.input}
            placeholder='confirm password'
            name='password2'
            type="password"
            value={formState.password2}
            onChange={(e) => dispatch({type: 'change/password2', payload: e.target.value})}
            />
            {isError && error instanceof ApiError && error.data.password2 ?
            <ShowErrors errors={error.data.password2}/> : null}
        </div>
        <div className={styles.btnContainer}>
            <SignupBtn formState={formState} mutate={mutate} isPending={isPending} />
        </div>
    </div>
  )
}
