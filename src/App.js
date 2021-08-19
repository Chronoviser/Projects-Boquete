import './App.css';
import { Route, Link } from 'react-router-dom';
import BirthdayApp from './Birthday-Reminder/App';

function App() {
  return (
    <div className="App">
      <Route path='/' exact render={() =>
        <>
          <h2>Projects Boquete</h2>
          <Link to="/birthday-reminder-app" exact>Birthday Reminder App</Link>
        </>
      } />
      <Route path="/birthday-reminder-app" component={BirthdayApp} />
    </div>
  );
}

export default App;
