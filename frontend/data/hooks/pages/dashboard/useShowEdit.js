import {useState} from 'react'
import {ApiService} from '../../../services/ApiService'

export function useShowEdit() {
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
        [message, setMessage] = useState('')
  
  function editPet(data) {
    if(validateForm()) {
      ApiService.put(`/pets/${data.id}`,{
        name,
        about,
        weigth,
        race,
        age,
        location,
        since,
        sex,
        size,
        image
      })
      .then(() => {
        cleanForm()
        setMessage('Pet Atualizado com sucesso!')
      })
      .catch((error) => {
        setMessage(error.response?.data.message)
      })

    }else {
      setMessage('Preencha todos os campos!')
    }
  }

  function validateForm() {
    return (
      name.length > 2 && about.length > 220 && weigth !== '' && race.length !== '' &&
      age.length !== '' && location.length > 3 && since.length > 3 && image.length > 20
    )
  }

  function cleanForm() {
    setName(''); setAbout(''); setWeigth(''); setRace(''); setAge(''); setLocation('');
    setSince(''); setSex('male'); setSize('medium'); setImage('');
  }

  return {
    name, setName,
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
    editPet
  }
}
