import React, { useState } from "react";
import "./edit.css";
const EditPage = () => {
  const avaUrl = [
   "https://preview.redd.it/w7rm34sdm8a71.png?width=587&format=png&auto=webp&s=986bd66673b1ae29e7f4532424396fcd46f3b72d",
   "https://preview.redd.it/w7rm34sdm8a71.png?width=587&format=png&auto=webp&s=986bd66673b1ae29e7f4532424396fcd46f3b72d",
   "https://preview.redd.it/w7rm34sdm8a71.png?width=587&format=png&auto=webp&s=986bd66673b1ae29e7f4532424396fcd46f3b72d",
   "https://preview.redd.it/w7rm34sdm8a71.png?width=587&format=png&auto=webp&s=986bd66673b1ae29e7f4532424396fcd46f3b72d",
   "https://preview.redd.it/w7rm34sdm8a71.png?width=587&format=png&auto=webp&s=986bd66673b1ae29e7f4532424396fcd46f3b72d",
   "https://preview.redd.it/w7rm34sdm8a71.png?width=587&format=png&auto=webp&s=986bd66673b1ae29e7f4532424396fcd46f3b72d",
   "https://preview.redd.it/w7rm34sdm8a71.png?width=587&format=png&auto=webp&s=986bd66673b1ae29e7f4532424396fcd46f3b72d",
  ];
  const [name,setName]=useState('Le Thanh Nha');
  const [age,setAge]=useState(20);
  const[about,setAbout]=useState("I'm cave");
  const [theme,setTheme]=useState("#ff9051");
  const[url,setUrl]=useState("https://preview.redd.it/w7rm34sdm8a71.png?width=587&format=png&auto=webp&s=986bd66673b1ae29e7f4532424396fcd46f3b72d")
  return (
    <>
      <form action="">
        <section className="edit-container">
          <button className="close">SAVE</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <label htmlFor="userName">Display Name</label>
            <input
              type="text"
              name="userName"
              id="1"
              placeholder="Le Thanh Nha"
              onChange={(e)=>setName(e.target.value)}
            />

            <label htmlFor="age">Age</label>
            <input type="text" name="age" id="2" placeholder="20" onChange={(e)=>setAge(e.target.value)} />

            <label htmlFor="about">About</label>
            <textarea className="input-about" name="about" id="3" onChange={(e)=>setAbout(e.target.value)} />
          </div>
          <label htmlFor="">Profile Picture</label>
          <div className="input-image-container">
            {avaUrl.map((url) => {
              return (
                <>
                  <img src={url} className="input-image" alt="" />
                </>
              );
            })}
          </div>
          <div className="theme-container">
            <label htmlFor="">Theme</label>
            <input type="color" name="" className="theme-color" id="4" />
          </div>
        </section>
      </form>
    </>
  );
};

export default EditPage;
