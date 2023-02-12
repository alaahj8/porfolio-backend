import bcrypt from "bcryptjs";

const data = {
  user: [
    {
      name: "Hijazi",
      passwordHash: bcrypt.hashSync("123456", 8),
      isAdmin: true,
    },
  ],
  projects: [
    {
      name: "project1",
      image:
        "https://c1.wallpaperflare.com/preview/427/745/192/notebook-natural-laptop-macbook.jpg",
    },
    {
      name: "project2",
      image:
        "https://www.teahub.io/photos/full/1-13344_2560x1600-hd-laptop-wallpapers-hd-desktop-wallpapers-laptop.jpg",
    },
    {
      name: "project3",
      image:
        "https://wallpaperset.com/w/full/6/e/2/461150.jpg",
    },
    {
      name: "project4",
      image:
        "https://c1.wallpaperflare.com/preview/623/487/747/technology-code-coding-computer.jpg",
    },
    {
      name: "project5",
      image:
        "https://wallpaper.dog/large/5549717.jpg",
    },
    {
      name: "project6",
      image:
        "https://wallpaperaccess.com/full/1317183.jpg",
    },
  ],

  blogs: [
    {
      name: "How to build a app with Node.js and Express.js",
      image:
        "https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg",
    },
    {
      name: "Top 15 Free APIs",
      image:
        "https://schemazone.com/wp-content/uploads/2021/03/Project-Manager.jpg",
    },
  ],
  contacts: [
    {
      email: "hij.alaa8@gmail.com",
      phone: "+961 71330911",
    },
  ],
  about: [
    {
      name: "Alaa Hijazi",
      image: "ahj1.png",
    },
  ],

  skills: [
    {
      Title: "C language",
      image: "c.png",
      pers: "70%",
    },
    {
      Title: "CSHARP language",
      image: "csharp.png",
      pers: "75%",
    },
    {
      Title: "SWIFT language",
      image: "swift.png",
      pers: "85%",
    },
    {
      Title: "CSS language",
      image: "css.png",
      pers: "85%",
    },
    {
      Title: "HTML language",
      image: "html.png",
      pers: "90%",
    },
    {
      Title: "JAVA language",
      image: "java.png",
      pers: "70%",
    },
    {
      Title: "JAVA SCRIPT language",
      image: "javascript.png",
      pers: "80%",
    },
    {
      Title: "PHP language",
      image: "php.png",
      pers: "95%",
    },
    {
      Title: "PYTHON language",
      image: "python.png",
      pers: "70%",
    },
    {
      Title: "RUBY language",
      image: "ruby.png",
      pers: "75%",
    },
  ],
};
export default data;
