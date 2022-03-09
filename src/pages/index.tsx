import type { NextPage } from "next";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { RootState, useAppSelector } from "../redux/store";
import loginSlice, {actions as loginActions} from "../redux/modules/loginSlice"
import { useEffect, useState } from "react";


const IndexPage: NextPage = (props:any) => {
 
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");

  const dispatch= useDispatch();
  const login = useAppSelector((state: RootState)=> state.login)

   const {fetch} = loginActions

   useEffect(() => {
		console.log(login);
	}, [login]);


  return (
    <div>
      <Head>
        <title className="text-primary-dark">Shop Admin</title>
        <meta name="description" content="shop admin" />
      </Head>
       
       {
         <div>
         <input className="bg-teal-500" name="email" value={email} onChange={(e)=> setEmail(e.currentTarget.value)} />
         <input name="password" value={password} onChange={(e)=> setPassword(e.currentTarget.value)} />
         <button onClick={() => dispatch(fetch({email: email, password: password}))}> {login.result}</button>
        </div>
        
         
         }
      

    </div>
  );
};

export default IndexPage;
