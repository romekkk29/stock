"user client"
import React,{useState} from "react";
import Box from '@mui/material/Box';
import {
    Grid,
    Typography,
    Button,
    Modal,
    TextField,
    Autocomplete,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import {useAddMovementMutation,useGetMovementsQuery} from './../../store/slice'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '78%',
    bgcolor: 'background.paper',
    
    boxShadow: 24,
    borderRadius:'10px',
    p: 2,
    '@media (max-width: 568px)': {
        top: '70%',
      },
  };
const styleModal = {
    overflow:'scroll'
  };


export default function AddMovement({open,setOpen}) {
    const [addMovements]=useAddMovementMutation()
    const { refetch: refetchMovements } = useGetMovementsQuery(); // Use destructuring to get refetch function


    const [editRegistro,setEditRegistro]=useState({
        nombre:"",
        tipo:"",
        cantidad:0

    })
    const [validate,setValidate]=useState(false)
    const handleAdd=async()=>{
           setValidate(true)
           if(editRegistro.nombre&&editRegistro.tipo&&Number.isInteger(parseInt(editRegistro.cantidad))){
                    let id='0'
                    if(editRegistro.nombre=='Apple iPhone 13'){
                        id='64d1b2648ad680e1682726d0'
                    }else if(editRegistro.nombre=='Samsung Galaxy S22'){
                        id='64d1b2648ad680e1682726d0'
                    }else if(editRegistro.nombre=='Google Pixel 6'){
                        id='64d1b2648ad680e1682726d0'
                    }else if(editRegistro.nombre=='Apple iPad Pro'){
                        id='64d1bcb08ad680e1682726d3'
                    }else if(editRegistro.nombre=='Amazon Echo Dot'){
                        id='64d1bcff8ad680e1682726d4'
                    }
                    const objectPost={
                        nombre: editRegistro.nombre,
                        tipo:editRegistro.tipo,
                        cantidad:editRegistro.cantidad,
                        id:id
                    }   

                     const response = await addMovements(objectPost)
                     if (response.data) {
                        // Invalidate the query to refresh the data
                        refetchMovements();
                    }
                             
                }        
          
           
           setOpen(false)
    }
    return (
        <>
            <div>
            <Modal
                    open={open}
                    onClose={()=>{setOpen(false);setValidate(false)}}
                    sx={styleModal}
                    > 
                    <Box sx={style}>
                        <Grid container spacing={4} sx={{padding:'20px'}}>
                        <Grid item xs={12} sm={12} md={8}>
                        <Typography id="modal-modal-title" variant="h4" component="h4">
                        Add movement
                        </Typography></Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <Autocomplete 
                                
                                        disablePortal
                                        id="combo-box-demo"
                                        options={[
                                            'Apple iPhone 13','Samsung Galaxy S22','Google Pixel 6','Apple iPad Pro','Amazon Echo Dot'
                                        
                                        
                                    ]}
                                value={ editRegistro.nombre}
                                onChange={(event, newItem) => setEditRegistro({ ...editRegistro, ...{nombre:newItem} })}
                                disableCloseOnSelect
                                getOptionLabel={(option) => option}
                                style={{ width: '80%' }}
                                renderInput={(params) => (
                                    <TextField 
                                    required 
                                    error={validate&&!editRegistro.nombre>0?true:false}
                                    helperText={validate&&!editRegistro.nombre>0?'Fiel is obligatory':null}
                                    {...params} 
                                    label='Product name'  />
                                    )}
                            />
                            </Grid>      
                            <Grid item xs={12} sm={8} md={6}>
                            <Autocomplete 
                                
                                disablePortal
                                id="combo-box-demo"
                                options={[
                                    'Venta',
                                'Correcion','Ingreso Stock'
                                
                                
                            ]}
                                value={ editRegistro.tipo}
                                onChange={(event, newItem) => setEditRegistro({ ...editRegistro, ...{tipo:newItem } })}
                                disableCloseOnSelect
                                getOptionLabel={(option) => option}
                                style={{ width: '80%' }} 
                                 renderInput={(params) => (
                                    <TextField 
                                    required 
                                    error={validate&&!editRegistro.tipo?true:false}
                                    helperText={validate&&!editRegistro.tipo?'Field is obligatory':null}
                                    {...params} 
                                    label='Movement type' />
                                    )}
                            />
                    </Grid>
       
               
    
            <Grid item xs={12} sm={12} md={4}>
            <TextField
                error={validate&&!Number.isInteger(parseInt(editRegistro.cantidad))?true:false}
                helperText={validate&&!Number.isInteger(parseInt(editRegistro.cantidad))?'It must be Integer':null}
                fullWidth
                required
                name="Cantidad"
                variant="outlined"
                label="Amount"
                value={editRegistro.cantidad}
                onChange={(e) => setEditRegistro({ ...editRegistro, cantidad: e.target.value })}
            /></Grid>  
                         
 
       

            <Grid item xs={12} sm={12} md={12} sx={{display:'flex',justifyContent:'flex-end',gap:'40px'}}>

                            <Button color="primary" variant="outlined"
                                        
                                        onClick={()=>{setOpen(false);setValidate(false)}}>
                                            Back
                                    </Button>
                      
                                        
                                   

                                                                         
                                    <Button color="primary"
                                        variant="outlined"
                                        startIcon={<AddIcon fontSize='normal' />}
                                        onClick={()=>handleAdd()}>
                                                Add movement
                                    </Button>
                    </Grid>

        </Grid>
          </Box>
        </Modal>
        </div>   
        
        </>
      );
    }