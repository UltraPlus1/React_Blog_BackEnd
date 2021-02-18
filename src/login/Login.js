import React,{useState} from "react";
import LoginForm from "./LoginForm";
import "./login.css";

const Login = () => {
  const [login,setLogin] = useState(true);
  if(login){
      return (
          <div className="login">
              <LoginForm/>
          </div>
      )
  }
};

export default Login;
