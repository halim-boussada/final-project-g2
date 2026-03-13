"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
  const data =await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => res.json());
    if(data.accessToken){
        localStorage.setItem("token" ,data.accessToken )
        router.push("/dashboard/products")
    } else {
        alert("Wrong password")
    }
  }

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login}>login</button>
    </div>
  );
}
