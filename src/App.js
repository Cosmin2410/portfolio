function App() {
  const me = {
    name: 'Cosmin Nae',
    age: new Date().getFullYear() - 2000,
    learned: ['HTML', 'CSS', 'JavaScript', 'React'],
    passionate: true,
    hobbies: ['Gaming', 'Technology', 'Programming'],
  };

  // 'La Belle Aurore',cursive pt <h1> before si after
  // League Spartan,Helvetica,Arial,sans-serif; pentru heading, titluri
  // LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif ---- italic

  // Main bg-color: #1c1d25
  // Secondary bg-color: #232323
  // Third color:#5c81e8

  // Gradient cu Third Color si alta putin mai inchisa

  // Fourth-color (contrast):#ef3937
  // Gradient cu #f06348

  // White: #ffffff

  //npm install --save-dev sass

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
