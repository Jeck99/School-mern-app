import {useState} from 'react';
 import './App.css';
import { getStudents } from './services/student.service';

const App = () => {
  const [students, setStudents] = useState([]);

  const getAllStudents = () => {
    getStudents()
      .then(students => {
        console.log(students);
        setStudents(students);
      })
      .catch(err => {
        console.log(err);
      });
  }


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getAllStudents}>Get All Students</button>
        <ul>
          {students.map(student => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
