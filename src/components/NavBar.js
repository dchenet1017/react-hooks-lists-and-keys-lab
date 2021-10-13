import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>


{links.map ((work) =>{
  const link = `#${work}`
return <a href={link} key ={work}>{work}</a>



})}

</nav>

   )
}

export default NavBar;
