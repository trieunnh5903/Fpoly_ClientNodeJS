import React from "react";
const axios = require('axios');
// http://192.168.1.6:3000/api/user/login
export const useLogin = () => {
   const fetchLogin = async (email, password) => {
      axios.post('/api/user/login', {
         email: email,
         password: password,
      })
         .then(function (response) {
            console.log(response);
         })
         .catch(function (error) {
            console.log(error);
         });
   }

   return [fetchLogin];
}