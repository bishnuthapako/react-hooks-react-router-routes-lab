import React from 'react'
import { actors } from "../data";

function Actors() {


  const actorValue = actors.map((actor,idx)=> 
    <div key={idx}>
       <div>{actor.name}<ul><li>{actor.movies}</li></ul></div>
    </div>
    )

  return (
    <div>Actors
      {/* code here */}
      <h1>Actors Page</h1>
      {actorValue}
     
    </div>
  )
}

export default Actors

