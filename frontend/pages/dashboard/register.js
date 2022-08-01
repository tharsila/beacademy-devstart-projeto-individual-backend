import Title from '../../components/Title/Title'
import {useRegister} from '../../data/hooks/pages/pets/useRegister'
import {Paper, Grid, TextField, Button, Snackbar, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@mui/material'

const Register = () => {
  const {name, setName,
    about, setAbout,
    weigth, setWeigth,
    race, setRace,
    age, setAge,
    location, setLocation,
    since, setSince,
    sex, setSex,
    size, setSize,
    image, setImage,
    message, setMessage,
    registerPet
  } = useRegister()
  return (
    <>
      <Title title="Cadastro de Pets para adoção" subtitle="Preencha os dados do novo Pet"></Title>

      <Paper sx={{maxWidth: 970, mx:'auto', p: '40px'}}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label={'Nome'}
              placeholder={'Digite o nome do pet'}
              fullWidth
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Fale sobre o pet'}
              multiline
              fullWidth
              rows={4}
              value={about}
              onChange={(event) => setAbout(event.target.value)}
            /> 
          </Grid>
          <Grid item xs={2}>
            <TextField
              label={'Peso'}
              placeholder={'Digite o peso do pet'}
              fullWidth
              value={weigth}
              onChange={(event) => setWeigth(event.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label={'Raça'}
              placeholder={'Digite a raça do pet'}
              fullWidth
              value={race}
              onChange={(event) => setRace(event.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label={'Idade'}
              placeholder={'Digite a idade do pet'}
              fullWidth
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label={'Localidade'}
              placeholder={'Digite a cidade do pet'}
              fullWidth
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label={'Desde quando no abrigo'}
              placeholder={'Digite a data de chegada'}
              fullWidth
              value={since}
              onChange={(event) => setSince(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Sexo</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={sex}
                onChange={(event) => setSex(event.target.value)}
              >
                <FormControlLabel value="Macho" control={<Radio />} label="Macho" />
                <FormControlLabel value="Fêmea" control={<Radio />} label="Fêmea" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Porte</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={size}
                onChange={(event) => setSize(event.target.value)}
              >
                <FormControlLabel value="Pequeno" control={<Radio />} label="Pequeno" />
                <FormControlLabel value="Médio" control={<Radio />} label="Médio" />
                <FormControlLabel value="Grande" control={<Radio />} label="Grande" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Foto'}
              placeholder={'Digite a URL da imagem'}
              fullWidth
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
            <Button
              variant={'contained'}
              color={'warning'}
              sx={{mt: '1rem'}}
              component={'a'}
              href={'https://imgur.com/upload'}
              target={'_blank'}
            >
              Enviar Imagem
            </Button>
          </Grid>
          <Grid item xs={12} sx={{textAlign: 'center'}}>
            <Button
              variant={'contained'}
              fullWidth
              sx={{maxWidth: {md: '200px', mt: '1rem'}}}
              style={{textTransform: 'none', backgroundColor: '#713FFF'}}
              onClick={registerPet}
            >
              Cadastrar Pet
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

export default Register