import Title from '../../../components/Title/Title'
import {
  Paper, 
  TableContainer, 
  Table, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableBody
} from '@mui/material'
import {useReport} from '../../../data/hooks/pages/pets/useReport'

const Report = () => {
  const {listReport} = useReport()

  return (
    <>
      <Title title={'Relatório de Adoção'} subtitle={'Veja a lista de pets adotados'}/>

      <TableContainer component={Paper} sx={{maxWidth:'950px', mx: 'auto', p: {xs:'15px', md: '25px'}}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pet</TableCell>
              <TableCell>Nome do Padrinho</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align={'right'}>Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listReport.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.pet.name}</TableCell>
                <TableCell>{report.name}</TableCell>
                <TableCell>{report.email}</TableCell>
                <TableCell align={'right'}>{report.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Report