import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
function App() {
  const [username, setusername] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();

  const handleUsername = (evt) => {
    setusername(evt.target.value);
  }
  const handlePass = (evt) => {
    setpass(evt.target.value);
  }
  const handleData = () => {
    const loginflag = axios.get(`https://expressbackend-5effn5acz-vidhya-balajis-projects.vercel.app/login?username=${username}&password=${pass}`)
    loginflag.then(function (data) {
      if (data.data === true) {
        navigate("/success")
      } else {
        navigate("/fail")
      }
    })
  }
  return (
    <div id="container">
      <h1>Login Here</h1>
      <p>Username</p><input type='text' value={username} placeholder="Email or Phone" onChange={handleUsername} ></input>
      <p>Password</p><input type='password' value={pass} onChange={handlePass} placeholder="Password"></input>
      <br></br>
      <button onClick={handleData}>Log In</button>
      <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </div>
  )
}
export default App