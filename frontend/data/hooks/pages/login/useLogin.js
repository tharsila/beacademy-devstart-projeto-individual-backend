import {useState} from 'react'
import {useRouter} from 'next/router'
import {ApiServiceSanctum} from '../../../services/ApiServiceSanctum'
import {setCookie } from 'nookies'

export function useLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  function signIn () {
    const csrf = ApiServiceSanctum.get('/sanctum/csrf-cookie')
    let item =
    {
      email, 
      password,
      csrf
    }

    console.warn(item)
    
    if(validateForm()) {
      ApiServiceSanctum.get('/sanctum/csrf-cookie')
      .then(() => {
        ApiServiceSanctum.post('/api/login', item)
        .then(() => {
          cleanForm()
          setCookie(undefined, 'nextauth.token', csrf, {
            maxAge: 60 * 60 * 1,

          })
          router.push('/dashboard')
          setMessage('Você esta logado!')
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
      email.length > 5
    )
  }

  function cleanForm() {
    setEmail(''); setPassword('');
  }

  return {
    email, setEmail, password, setPassword, message, setMessage, signIn
  }
}