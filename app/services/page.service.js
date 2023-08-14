

export const getStock=async()=>{
        const url='https://back-chat-innovasoft.herokuapp.com/stock'
        return fetch(url,{
          next:{
            revalidate:360
          }})
        .then(res=>res.json())
        .then(datos=>datos)
       
      
}