
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './../page.module.css'
import Pagination from './components/pagination';
import Add from './components/buttonAdd';


export default function Movement() {
  return (
    <main >
        
        <div className={styles.title}>MOVEMENT</div>
        <Add></Add>
        <TableContainer className={styles.table} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className={styles.tableHead}>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell >Movement Type</TableCell>
                <TableCell >Amount</TableCell>
                <TableCell >New Stock amount</TableCell>
              </TableRow>
            </TableHead>

            <Pagination >
            </Pagination>
          </Table>
    </TableContainer>
    </main>
  )
}
