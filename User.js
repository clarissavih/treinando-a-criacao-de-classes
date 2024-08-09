class User {
   
   constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
   
}

   login(email, password) {
      if (this.email == email && this.password == password) {
         console.log(` ${this.fullname}: O login foi sucedido!`)
      } else {
         console.log(` ${this.fullname}: Login não sucedido!`)
      }
   } 
}


const julie = new User(
   'julie',
   'juliesoares@gmail.com',
   '8907'
   )
julie.login('juliesoares@gmail.com', '8907')
julie.login('juliesoaresgmail.com', '8907')