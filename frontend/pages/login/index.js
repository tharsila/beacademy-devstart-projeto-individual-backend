import Title from '../../components/Title/Title'
import Head from 'next/head'
import {Paper, Grid, TextField, Button, Snackbar} from '@mui/material'
import {useLogin} from '../../data/hooks/pages/login/useLogin'

export default function login(){
  const {email, setEmail, password, setPassword, message, setMessage, signIn} = useLogin()

  return (
    <>
      <Head>
        <title>HelpCat | Login</title>
      </Head>
      <Title title="Acesse sua conta" subtitle="Informe seu email e senha de cadastro"/>
      <Paper sx={{maxWidth: 970, mx:'auto', p: '40px'}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label={"E-mail"}
              placeholder={"E-mail"}
              type={'email'}
              fullWidth
              value={email}
              onChange={((e) => setEmail(e.target.value))}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Senha"}
              placeholder={'Senha'}
              type={'Password'}
              fullWidth
              value={password}
              onChange={((e) => setPassword(e.target.value))}
            />
            {password}
          </Grid>
          <Grid item xs={12} sx={{textAlign: 'center'}}>
            <Button
              variant={'contained'}
              fullWidth
              sx={{maxWidth: {md: '200px', mt: '1rem'}}}
              style={{textTransform: 'none', backgroundColor: '#713FFF'}}
              onClick={signIn}
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Paper>
      {/* <Snackbar
        open={message.length > 0}
        autoHideDuration={2500}
        onClose={() => setMessage('')}
        message={message}
      /> */}
    </>
  )
}