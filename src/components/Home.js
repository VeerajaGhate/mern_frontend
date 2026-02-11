import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
    const[books,setBooks]=useState([])

    async function handleDelete(id){
        let response= await fetch(`${process.env.REACT_APP_API_URL}/books/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
        })
        let result=await response.json()
        setBooks(result.books)
    }
    async function getall(){
        let response= await fetch(`${process.env.REACT_APP_API_URL}/books`,{
            method:"GET",
            headers:{"Content-Type":"application/json"}
        })
        let result= await response.json()
        setBooks(result.books)
    }
    
    useEffect(()=>{
    getall()},
    [])
    

  return (
    <div className="d-flex justify-content-around my-4">
        {books.map((bk,index)=>
        <div key={index} style={{"width":"25%"}}>
            <div className="card m-3 text-white bg-dark">
                    <div className="card-body">
                        <h5 className="card-title">{bk.name}</h5>
                        <h6 className="card-subtitle mb-2">{bk.author}</h6>
                        <h6 className="card-text">{bk.price}</h6>
                        <button className="btn btn-danger btn-sm m-1" onClick={() => handleDelete(bk._id)}>Delete</button>
                        <button className="btn btn-primary btn-sm m-1" onClick={() => navigate(`/add/${bk._id}`)}>Update</button>
                    </div>
                </div>
            </div>
            
        )}
    </div>
    
  )
}

export default Home
