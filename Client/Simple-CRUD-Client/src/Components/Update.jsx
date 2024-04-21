import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updateUser = {name, email}

    fetch(`http://localhost:5000/users/${loadedUser._id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateUser)
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount>0){
            alert("user updated successfully")
        }
    })

  }
  return (
    <div>
      <h2>{loadedUser.name}</h2>
      <form onSubmit={handleUpdate}>
        <input name="name" defaultValue={loadedUser.name} type="text" /><br />
        <input name="email" defaultValue={loadedUser.email} type="text" /><br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
