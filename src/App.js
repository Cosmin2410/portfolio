function App() {
  const me = {
    name: 'Cosmin Nae',
    age: new Date().getFullYear() - 2000,
    learned: ['HTML', 'CSS', 'JavaScript', 'React'],
    passionate: true,
    hobbies: ['Gaming', 'Technology', 'Programming'],
  };

  return (
    <div>
      <img src="images/logo.svg" />
      <p>{me.name}</p>
      <p>{me.age}</p>
      <p>{me.learned}</p>
      <p>{me.passionate}</p>
      <p>{me.hobbies}</p>
    </div>
  );
}

export default App;
