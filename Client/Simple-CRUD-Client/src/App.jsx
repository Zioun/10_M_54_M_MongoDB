import "./App.css";
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="name" /> <br />
        <input name="email" type="text" placeholder="email" /> <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
