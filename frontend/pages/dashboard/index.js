import Title from '../../components/Title/Title'
import Head from 'next/head'
import {useState} from 'react'
import {useIndex} from '../../data/hooks/pages/dashboard/useIndex'
import {ApiService} from '../../data/services/ApiService'

import {
  Paper, 
  TableContainer, 
  Table, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableBody,
  Button,
  Dialog,
  TextField, 
  Grid, 
  DialogActions,
  Snackbar,
  Radio, RadioGroup, FormControlLabel, FormControl, FormLabel
} from '@mui/material'

export default function Dashboard() {
  const {listPet, setListPet, setLoading} = useIndex()
  const [name, setName] = useState(''),
        [about, setAbout] =useState(''),
        [weigth, setWeigth] = useState(''),
        [race, setRace] = useState(''),
        [age, setAge] = useState(''),
        [location, setLocation] = useState(''),
        [since, setSince] = useState(''),
        [sex, setSex] = useState('Macho'),
        [size, setSize] = useState('Médio'),
        [image, setImage] = useState(''),
        [petId, setPetId] = useState(null),
        [petSelected, setPetSelected] = useState(null),
        [message, setMessage] = useState('')


  function showPet(pet) { 
    setPetId(pet.id)
    setName(pet.name)
    setAbout(pet.about)
    setWeigth(pet.weigth)
    setRace(pet.race)
    setAge(pet.age)
    setLocation(pet.location)
    setSince(pet.since)
    setSex(pet.sex)
    setSize(pet.size)
    setImage(pet.image)
    setPetSelected(true)
  }

  function editPet(petId) {
    if(validateForm()) {
      setLoading(true);
      ApiService.put(`/pets/${petId}`, {
        name,about, weigth, race, age, location, since, sex, size, image
      })
      .then(() => {
        setPetSelected(null)
        clearForm()
        setLoading(false)
        setMessage('Pet atualizado com sucesso!')
      })

    }else {
      setMessage('Preencha todos os campos!')
    }
  }

  function removePet(pet){ 
    ApiService.delete(`/pets/${pet.id}`)
    .then(() => {
      setListPet((prev) => prev.filter((pet) => pet.id !== pet.id))
      setMessage('Pet removido com sucesso!')
    })
  }

  function clearForm() {
    setName('')
    setAbout('')
    setWeigth('')
    setRace('')
    setAge('')
    setLocation('')
    setSince('')
    setSex('')
    setSize('')
    setImage('')
    setMessage('')
  }

  function validateForm() {
    return (
      name.length > 2 && about.length > 220 && weigth !== '' && race.length !== '' &&
      age.length !== '' && location.length > 3 && since.length > 3 && image.length > 20
    )
  }

  return (
    <>
      <Head>
        <title>Você está na área logada do HeltCat. Consulte Pets cadastrados, Pets adotados e muito mais.</title>
      </Head>
      <Title title={'Pets cadastrados para adoção'} subtitle={'Veja a lista de pets cadastrados'}/>
      <TableContainer component={Paper} sx={{maxWidth:'950px', mx: 'auto', p: {xs:'15px', md: '25px'}}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Idade</TableCell>
              <TableCell>Sexo</TableCell>
              <TableCell>Localizaçao</TableCell>
              <TableCell align={'center'}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listPet.map((pet) => (
              <TableRow key={pet.id}>
                <TableCell>{pet.id}</TableCell>
                <TableCell>{pet.name}</TableCell>
                <TableCell>{pet.age}</TableCell>
                <TableCell>{pet.sex}</TableCell>
                <TableCell>{pet.location}</TableCell>
                <TableCell align={'center'}>
                  <Button
                    variant={'contained'}
                    size="medium"
                    sx={{maxWidth: {md: '200px', mt: '1rem'}}}
                    style={{textTransform: 'none', backgroundColor: '#713FFF'}}
                    onClick={() => showPet(pet)}
                  >
                    +Info / Editar
                  </Button>
                  <Button
                      variant={'contained'}
                      size="medium"
                      sx={{maxWidth: {md: '200px', mt: '1rem'}}}
                      style={{textTransform: 'none', backgroundColor: '#713FFF', marginLeft: '1rem'}}
                      onClick={() => removePet(pet)}
                    >
                      Remover
                  </Button>
                
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
            onClick={() => editPet(petId)}
            >
            Atualizar Pet
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
