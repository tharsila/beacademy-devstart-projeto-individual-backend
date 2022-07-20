import {useState} from 'react'
import { useRouter } from 'next/router'
import {ApiService} from '../../../services/ApiService'

export function useRegister() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  function signUp () {
    let item ={name, password, email}
    console.warn(item)
    
    if(validateForm()) {
      ApiService.post('/register', item)
      .then(() => {
        cleanForm()
        setMessage('Conta criada com sucesso')
        router.push('pets/login')
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
      name.length > 2
    )
  }

  function cleanForm() {
    setName(''); setEmail(''); setPassword('');
  }

  return {
    name, setName, email, setEmail, password, setPassword, message, setMessage, signUp
  }
}