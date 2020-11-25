import { useState } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { TextField, Button,} from '@material-ui/core'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../firebase'

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
  button: {
      width: '300px',
      margin: '30px auto 0 auto'
  },
  span: {
      color: 'blue'
  }
})


const Signup = () => {
    const classes = useStyles()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('') 
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        auth.createUserWithEmailAndPassword(email, password)
        .then((response)=>{
            response.user.updateProfile({
              displayName: username
              
            }).then(()=>{
              setLoading(false)
              history.push('/')
            })
        })
        .catch((e)=>{
          console.log('登録失敗', e)
          setLoading(false)
        })
    }

    return (
      <div className={classes.container}>
        <h1 className={classes.title}>ユーザー登録ページ</h1>
        <h3 className={classes.explanation}><span className={classes.span}>twitter-clone</span>を使用するために、アカウントを作成してください。</h3>

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
           <Button type='submit' variant='contained' color='primary' className={classes.button} size='large' disabled={loading}>登録</Button>
        </form> 
        <Link to='/login'>既にアカウントをお持ちの方</Link>
      </div>
    )
}

export default Signup