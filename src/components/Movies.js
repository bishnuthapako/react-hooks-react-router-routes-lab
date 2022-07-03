import React from "react";
import { movies } from "../data";

function Movies() {

  console.log(movies, 'mov')

  return <div>{/*{code here}*/}
  <h1>Movies Page</h1>
  {movies.map((data, idx)=><div key={idx}>
    {data.title}
    {data.time}
    <ul><li>{data.genres}</li></ul>
  </div>)}

  
  </div>
  
}

export default Movies;
