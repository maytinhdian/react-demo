import React from "react";
import "./edit.css";
const EditPage = () => {
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
              id=""
              placeholder="Le Thanh Nha"
            />

            <label htmlFor="age">Age</label>
            <input type="text" name="age" id="" placeholder="20" />

            <label htmlFor="about">Age</label>
            <textarea className="input-about" name="about" id="" />
          </div>
        </section>
      </form>
    </>
  );
};

export default EditPage;
