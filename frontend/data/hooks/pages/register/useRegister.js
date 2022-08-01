import {useState} from 'react'
import { useRouter } from 'next/router'
import {ApiServiceSanctum} from '../../../services/ApiServiceSanctum'


export function useRegister() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, SetPasswordConfirmation] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  function signUp () {

    let item =
    {
      name, 
      email, 
      password,
      "password_confirmation": passwordConfirmation,
      nameToken: "Usuario Logado"
    }

    console.warn(item)
    
    if(validateForm()) {
      ApiServiceSanctum.get('/sanctum/csrf-cookie')
      .then(() => {
        ApiServiceSanctum.post('/api/register', item)
        .then(() => {
          cleanForm()
          router.push('/login')
          setMessage('Conta criada com sucesso')
        })
        .catch((error) => {
          setMessage(error.response?.data.message)
        })
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

    setName(''); setEmail(''); setPassword(''); SetPasswordConfirmation('');
  }

  return {
    name, setName, email, setEmail, password, passwordConfirmation, SetPasswordConfirmation, setPassword, message, setMessage, signUp
  }
}