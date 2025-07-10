import React from "react";
import {Link} from 'react-router-dom'

function Home(){
 return(
    <div>
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="q">Active</a>
  </li>
  <li class="nav-item">
    <Link class="nav-link" href="q">Link</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" href="q">Link</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link disabled" aria-disabled="true" href="w">Disabled</Link>
  </li>
</ul>
       
    </div>
 )
}
export default Home;