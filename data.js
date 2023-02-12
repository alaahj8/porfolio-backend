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
      image:"https://c1.wallpaperflare.com/preview/427/745/192/notebook-natural-laptop-macbook.jpg",
    },
    {
      name: "project2",
      image:"https://c1.wallpaperflare.com/preview/411/694/389/black-business-computer-desk.jpg",
    },
    {
      name: "project3",
      image:"https://c1.wallpaperflare.com/preview/722/538/350/interior-minimal-white-workspace.jpg",
    },
    {
      name: "project4",
      image:"https://c1.wallpaperflare.com/preview/547/595/807/business-computer-contemporary-dark.jpg",
    },
    {
      name: "project5",
      image:"https://c1.wallpaperflare.com/preview/114/619/629/designer-desk-gardens-home-office.jpg",
    },
    {
      name: "project6",
      image:"https://c1.wallpaperflare.com/preview/510/217/278/technology-business-computer-designer.jpg",
    },
  ],

  blogs: [
    {
      name: "How to build a app with Node.js and Express.js",
      image:
        "https://c4.wallpaperflare.com/wallpaper/516/457/114/programming-css-html-code-wallpaper-preview.jpg",
    },
    {
      name: "Top 15 Free APIs",
      image:
        "https://c4.wallpaperflare.com/wallpaper/67/72/30/code-programming-microsoft-visual-studio-wallpaper-preview.jpg",
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
