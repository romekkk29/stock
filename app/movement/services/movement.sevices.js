export const getMovement=async()=>{
    const url='https://back-chat-innovasoft.herokuapp.com/movimiento'
    return fetch(url,{
      next:{
        revalidate:60
      }})
    .then(res=>res.json())
    .then(datos=>datos)
   
    }

export const postMovement=async(move)=>{
      let id='0'
      if(move.nombre=='Apple iPhone 13'){
          id='64d1b2648ad680e1682726d0'
      }else if(move.nombre=='Samsung Galaxy S22'){
          id='64d1b2648ad680e1682726d0'
      }else if(move.nombre=='Google Pixel 6'){
          id='64d1b2648ad680e1682726d0'
      }else if(move.nombre=='Apple iPad Pro'){
          id='64d1bcb08ad680e1682726d3'
      }else if(move.nombre=='Amazon Echo Dot'){
          id='64d1bcff8ad680e1682726d4'
      }
      const objectPost={
          nombre: move.nombre,
          tipo:move.tipo,
          cantidad:move.cantidad,
          id:id
      }
      const url='https://back-chat-innovasoft.herokuapp.com/createmovimiento'
      return fetch(url,{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(objectPost)})
      .then(res=>res.json())
      .then(datos=>datos)
     
      }