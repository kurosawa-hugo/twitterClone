import { useState, useContext } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { TextField, Button, } from '@material-ui/core'
import {Link, useHistory, Redirect} from 'react-router-dom'
import {auth} from '../firebase'
import {AuthContext} from '../components/AuthService'

const useStyles = makeStyles({
  container: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
  },
  form:{
      width: '450px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column'
  },
  lastTextField: {
      margin: '0 0 30px 0'
  },
  button: {
      width: '300px',
      margin: '0 auto'
  },
  span: {
      color: 'blue'
  }
})

 const Login = () => {
  const user = useContext(AuthContext)

  const classes = useStyles()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
      e.preventDefault()
      setLoading(true)
      auth.signInWithEmailAndPassword(email, password)
      .then(()=>{
        setLoading(false)
        history.push('/')
      })
      .catch((e)=>{
        setLoading(false)
        console.log('ログイン失敗', e)
      })
    }
  if(user) {
     return <Redirect to='/' />
  }

    return (
      <div className={classes.container}>
      <h1 className={classes.title}>ログインページ</h1>
      <h3 className={classes.explanation}><span className={classes.span}>twitter-clone</span>を使用するために、ログインしてください。</h3>

      <form className={classes.form} onSubmit={handleSubmit}>
         <TextField label='ユーザー名' variant='outlined' value={username}
         onChange={e => {
           setUsername(e.target.value)
         }}/>
         <TextField label='メールアドレス' variant='outlined' value={email}
         onChange={e => {
           setEmail(e.target.value)
         }}/>
         <TextField type='password' label='パスワード' variant='outlined' className={classes.lastTextField} value={password}
         onChange={e => {
           setPassword(e.target.value)
         }}/>
         <Button type='submit' variant='contained' color='primary' className={classes.button} size='large' disabled={loading}>ログイン</Button>
      </form> 
      <Link to='/signup'>まだアカウントをお持ちでない方</Link>
    </div>
    )
 }

 export default Login