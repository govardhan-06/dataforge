import React from 'react'
import CreateCTF from "../components/CreateCTF"
import Navigationbar from '../components/Navigationbar'
import "../styles/addCTF.css"

function AddCTF() {
  return (
    <div className='bg-dark text-light'>
       <Navigationbar/>
       <CreateCTF/>
    </div>
  )
}

export default AddCTF
