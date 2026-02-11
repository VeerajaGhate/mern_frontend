import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Add() {
    const [name,setName]=useState("")
    const [author,setAuthor]=useState("")
    const [price,setPrice]=useState(0)
    const {id} =useParams()
    const navigate=useNavigate()

    async function prefill(){
      if(id){
        let response= await fetch(`${process.env.REACT_APP_API_URL}/books/${id}`,{
            method:"GET",
            headers:{"Content-Type":"application/json"},
        })
        let result= await response.json()
        setName(result.book.name)
        setAuthor(result.book.author)
        setPrice(result.book.price)
      }
    }

    useEffect(()=>{
      prefill()
    },[id,prefill])



    async function handleSubmit(e){
        e.preventDefault()
        const inputs={name,author,price}

        if(id){
          let response= await fetch(`${process.env.REACT_APP_API_URL}/books/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(inputs)
        })
        let result= await response.json()
        console.log(result)
        }

        else{
        setName("")
        setAuthor("")
        setPrice(0)
        let response= await fetch(`${process.env.REACT_APP_API_URL}/books`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(inputs)
        })
        let result= await response.json()
        console.log(result)
      }

      navigate('/')

    }
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
    <form onSubmit={handleSubmit} className="w-50">
  <div className="m-3 ">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
  </div>
  <div className="m-3 ">
    <label className="form-label" >Author</label>
    <input type="text" className="form-control" name="author" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
  </div>
  <div className="m-3">
    <label className="form-label" >Price</label>
    <input type="number" className="form-control" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Add
