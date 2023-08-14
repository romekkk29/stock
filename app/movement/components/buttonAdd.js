"use client"
import React,{useState} from "react";
import AddMovement from "./add";
import AddIcon from '@mui/icons-material/Add';
import styles from './buttonAdd.module.css'
import {
    Button
} from '@mui/material';

export default function Add() {
    const [open,setOpen]=useState(false)
    
    return (
    <>
            <div className={styles.buttonAdd}>
            <Button color="primary"
                      variant="outlined"
                      startIcon={<AddIcon fontSize='normal' />}
                      onClick={()=>setOpen(true)}>
                                                Add movement
            </Button>
            </div>
            <AddMovement open={open} setOpen={setOpen} ></AddMovement>
    </>)
}