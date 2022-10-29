import './App.css';
import { useFormik } from 'formik';

function App() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: 'hamdi',
      lastName: 'dilekçi',
      email: 'dilekcihamdi@gmail.com',
      gender: 'male',
      hobbies: [],
      country: ''
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input onChange={handleChange} name="firstName" value={values.firstName} />
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input onChange={handleChange} name="lastName" value={values.lastName} />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input onChange={handleChange} name="email" value={values.email} />
        <br />
        <br />
        <label htmlFor="gender">male</label>
        <input type="radio" onChange={handleChange} name="gender" value="male" checked={values.gender === "male"} />
        <label htmlFor="gender">female</label>
        <input type="radio" onChange={handleChange} name="gender" value="female" checked={values.gender === "female"} />
        <br />
        <br />
        <div>
          <input type="checkbox" value="game" name="hobbies" onChange={handleChange} />
          game
        </div>
        <div>
          <input type="checkbox" value="football" name="hobbies" onChange={handleChange} />
          football
        </div>
        <div>
          <input type="checkbox" value="travel" name="hobbies" onChange={handleChange} />
          travel
        </div>
        <br />
        <br />
        <select name="country" value={values.country} onChange={handleChange}>
          <option value="turkey">Turkey</option>
          <option value="englang">England</option>
          <option value="usa">USA</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <div>
          <ul>
            <li>Firstname: {values.firstName}</li>
            <li>Lastname: {values.lastName}</li>
            <li>E-mail: {values.email}</li>
            <li>Gender: {values.gender}</li>
            <li>Hobbies: {values.hobbies.join(', ')}</li>
            <li>Country: {values.country}</li>
          </ul>
        </div>
      </form>
    </div>
  );
}
export default App;
