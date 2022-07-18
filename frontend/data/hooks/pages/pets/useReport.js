import { useState, useEffect } from 'react';
import { ApiService } from '../../../services/ApiService'

export function useReport() {
  const [listReport, setListReport] = useState([])

  useEffect(() => {
    ApiService.get('/adocoes')
    .then((response) => {
      setListReport(response.data)
    })
  },[])

  return {listReport}
}