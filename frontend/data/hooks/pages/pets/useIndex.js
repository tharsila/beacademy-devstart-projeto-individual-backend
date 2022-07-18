import { useState, useEffect } from 'react';
import { ApiService } from '../../../services/ApiService'


export function useIndex() { 
  const [listPets, setListPets] = useState([])

  const [petSelected, setPetSelected] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [price, setPrice] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    ApiService.get('/pets')
    .then((response) => {
      setListPets(response.data)
    })
  }, [])

  function adoption() {
    if(petSelected !== null) {
      if(validateDataAdoption()) {
        ApiService.post('/adocoes', {
          pet_id: petSelected.id,
          name,
          email,
          price
        })
        .then(() => {
          setPetSelected(null)
          setMessage('Pet adotado com sucesso!')
          clearForm()
        })
        .catch((error) => {
          setMessage(error.response?.data.message)
        })

      }else {
        setMessage('Preencha todos os campos corretamente')
      }
    }
  }

  function validateDataAdoption() {
    return email.length > 0 && price.length > 0
  }

  function clearForm() {
    setName('')
    setEmail('')
    setPrice('')
  }
  
  return {
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
  }
}