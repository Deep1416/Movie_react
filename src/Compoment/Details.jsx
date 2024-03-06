import React from 'react'
import Data from "./Data.json"
import Card from './Card'

function Details() {
  return (
    <div className = "flex flex-wrap justify-center gap-12 bg-black">
      
     {
      Data.map((e) =>{
        return (
          <Card movieName ={e.Title} year ={e.Year} director = {e.Director} time = {e.Runtime} 
          action = {e.Genre} disc = {e.Plot} poster = {e.Poster} image = {e.Images}  />
          
        )
      })
     }
    </div>
    
  )
}

export default Details
