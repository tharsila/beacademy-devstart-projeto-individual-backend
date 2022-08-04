import {useState, useEffect} from 'react';
import {ApiService} from '../../../services/ApiService'
import { useRouter } from 'next/router'

export function useIndex() {
  const [listPet, setListPet] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect (() => {
    const loadData = async () => {

      setLoading(true)
      ApiService.get('/pets')
      .then((response) => {
        setListPet(response.data)
      })
      .catch((error) => {
        setMessage(error.response?.data.message)
      })

      setLoading(false)
    }
    loadData()
  }, [listPet])

  return {listPet, setListPet, setLoading, message, setMessage}
}