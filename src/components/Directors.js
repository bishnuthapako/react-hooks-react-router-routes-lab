import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors, "dir")


 
 return <div>
    {/*{code here}*/}
  <h1>Directors Page</h1>
  {directors.map((film, index)=> 
          <div key={index}>
              <div>
              {film.name}
              <ul> <li>{film.movies}</li> </ul>
            </div>
          </div>
  )}


  </div>;
}

export default Directors;
