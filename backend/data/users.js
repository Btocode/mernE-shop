import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456",10),
    isAdmin: true,
  },
  {
    name: 'Afsan Saeed',
    email: "afsan@gmail.com",
    password: bcrypt.hashSync("123456",10),

  },
  {
    name: 'zulfikar Ali',
    email: "ali@gmail.com",
    password: bcrypt.hashSync("123456",10),
    
  },

]

export default users