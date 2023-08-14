"use client"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './page.module.css'
import { useGetProductsQuery } from './store/slice';




export default async function Home() {
  const {data,error,isLoading,isFetching}=useGetProductsQuery()
  if (isLoading || isFetching) return <p>... loading</p>
  if(error) return <p>error</p>
  return (
    <main >
        <div className={styles.title}>STOCK</div>
        <TableContainer className={styles.table} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className={styles.tableHead}>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell >Description</TableCell>
                <TableCell >Stock amount</TableCell>
                <TableCell >Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((product) => (
                <TableRow
                  key={product._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.nombre}
                  </TableCell>
                  <TableCell >{product.descripcion}</TableCell>
                  <TableCell >{product.stock}</TableCell>
                  <TableCell >{product.precio}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </TableContainer>
    </main>
  )
}
