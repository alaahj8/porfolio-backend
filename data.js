import bcrypt from 'bcryptjs';

const data = {
  user: [
    {
      name: 'Hijazi',
      passwordHash: bcrypt.hashSync('123456', 8),
      isAdmin: true,
      },
    ],
  projects: [
    {
      name: 'project1',
      image: 'https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg',
    },
    {
      name: 'project2',
      image: 'https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg',
    },
    {
      name: 'project3',
      image: 'https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg',
    },
    {
      name: 'project4',
      image: 'https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg',
    },
    {
      name: 'project5',
      image: 'https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg',
    },
    {
      name: 'project6',
      image: 'https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg',
    },
  ],
 
  blogs: [
    {
      name: 'How to build a app with Node.js and Express.js',
      image: 'https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg',
     
    },
    {
      name: 'Top 15 Free APIs',
      image: 'https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg',
     
    },
   
  ],
  contacts: [
    {
      email: 'hij.alaa8@gmail.com',
      phone: '+961 71330911',
     
    },
   
   
  ],
  about: [
    {
      name: 'Alaa Hijazi',
      image: 'ahj1.png',
     
    },
   
   
  ],
  
  skills: [

    {
      Title: 'C language',
      image: 'c.png',
      pers: '70%',
     
    },
    {
      Title: 'CSHARP language',
      image: 'csharp.png',
      pers: '75%',
     
    },
    {
      Title: 'SWIFT language',
      image: 'swift.png',
      pers: '85%',
     
    },
    {
      Title: 'CSS language',
      image: 'css.png',
      pers: '85%',
     
    },
    {
      Title: 'HTML language',
      image: 'html.png',
      pers: '90%',
     
    },
    {
      Title: 'JAVA language',
      image: 'java.png',
      pers: '70%',
     
    },
    {
      Title: 'JAVA SCRIPT language',
      image: 'javascript.png',
      pers: '80%',
     
    },
    {
      Title: 'PHP language',
      image: 'php.png',
      pers: '95%',
     
    },
    {
      Title: 'PYTHON language',
      image: 'python.png',
      pers: '70%',
     
    },
    {
      Title: 'RUBY language',
      image: 'ruby.png',
      pers: '75%',
     
    },
   
  ],
  
};
export default data;
