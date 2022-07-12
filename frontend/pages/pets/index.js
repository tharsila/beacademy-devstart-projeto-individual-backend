import Link from 'next/link';
import Head from 'next/head';
import Title from '../../components/title/Title'
import List from '../../components/list/List'
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'
import { useIndex } from '../../data/hooks/pages/pets/useIndex'

export default function Pet() {
  const {
    listPets, 
    petSelected, 
    setPetSelected, 
    name, 
    setName, 
    email, 
    setEmail, 
    price, 
    setPrice,
    message, 
    setMessage,
    adoption
  } = useIndex()

  return (
    <>
      <Head>
        <title>Página de Pets</title>
      </Head>
      <Title 
      title="" 
      subtitle={
        <>
          Com um pequeno valor mensal, você <br/>
          pode <strong>ajudar um pet virtualmente</strong>
        </>
      }/>
      <List 
        pets={listPets}
        onSelect={(pet) => setPetSelected(pet)}
      />
      <Dialog 
        open={petSelected !== null}
        fullWidth
        PaperProps={{ sx: { p: '40px' }}}
        onClose={() => setPetSelected(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label={'Nome'}
              type={'text'}
              fullWidth
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label={'E-mail'}
              type={'email'}
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label={'Quantia por mês'}
              type={'number'}
              fullWidth
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: '40px' }}>
          <Button 
            style={{textTransform: 'none'}}
            onClick={() => setPetSelected(null)}
            >
            Cancelar
          </Button>
          <Button 
            variant={'contained'} 
            style={{textTransform: 'none', backgroundColor: '#713FFF'}}
            onClick={() => adoption()}
            >
            Confirmar adoção
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar 
        open={message.length > 0}
        message={message}
        autoHideDuration={2500}
        onClose={() => setMessage('')}
      />
    </>
    
  )
}