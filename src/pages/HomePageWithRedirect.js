import { useState } from "react";
import { Navigate } from "react-router-dom";

const imgURL =
  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif";

  
function HomePageWithRedirect(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);

  if(!isLoggedIn) return <Navigate to="/" />
  else return (<div>Hello</div>);

}

export default HomePageWithRedirect;
