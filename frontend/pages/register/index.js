import Title from '../../components/Title/Title'
import {Paper, Grid, TextField, Button, Snackbar} from '@mui/material'
import {useRegister} from '../../data/hooks/pages/register/useRegister'

export default function register(){

  const {name, setName, email, setEmail, password, setPassword, passwordConfirmation, SetPasswordConfirmation, message, setMessage, signUp} = useRegister()

  return (
    <>
      <Title title="Criar conta" subtitle="Complete os campos com suas informações"/>
      <Paper sx={{maxWidth: 970, mx:'auto', p: '40px'}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label={"Nome"}
              placeholder={"Nome"}
              type={'text'}
              fullWidth
              value={name}
              onChange={((e) => setName(e.target.value))}
            />
          </Grid>
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
          <Grid item xs={12}>
            <TextField
              label={"Confirmar Senha"}
              placeholder={'Confirmar Senha'}
              type={'Password'}
              fullWidth
              value={passwordConfirmation}
              onChange={((e) => SetPasswordConfirmation(e.target.value))}
            />
            {passwordConfirmation}
          </Grid>
          <Grid item xs={12} sx={{textAlign: 'center'}}>
            <Button
              variant={'contained'}
              fullWidth
              sx={{maxWidth: {md: '200px', mt: '1rem'}}}
              style={{textTransform: 'none', backgroundColor: '#713FFF'}}
              onClick={signUp}
            >
              Criar conta
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        open={message.length > 0}
        autoHideDuration={2500}
        onClose={() => setMessage('')}
        message={message}
      />
    </>
  )
}