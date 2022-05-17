// import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Link } from "react-router-dom";

export const SignInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');   
    const submit = e => {
      console.log("troxa");
      e.preventDefault();
  
      Accounts.createUser(
        {
           username: username,
           email: email,
           password: password,
           
        });
    };
  
    return (
      <form onSubmit={submit} className="signin-form">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            onChange={e => setUsername(e.target.value)}
          />
        </div>
  
        <div>
          <label htmlFor="password">Password</label>
  
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
  
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
        <button type="submit">Criar Conta</button>
        <Link to= "/">
          <button type="submit">Voltar</button>
          </Link>
          
        </div>
      </form>
    );
  };