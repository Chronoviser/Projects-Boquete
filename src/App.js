import './App.css';
import { Route, Link } from 'react-router-dom';
import BirthdayApp from './Birthday-Reminder/App';
import TourBookApp from './Tour-Book/App';

function App() {
  return (
    <div className="App">
      <Route path='/' exact render={() =>
        <>
          <h2>Projects Boquete</h2>
          <Link to="/birthday-reminder-app" exact>Birthday Reminder App</Link>
          <Link to="/tour-book-app" exact>Tour Book App</Link>
        </>
      } />
      <Route path="/birthday-reminder-app" component={BirthdayApp} />
      <Route path="/tour-book-app" component={TourBookApp} />
    </div>
  );
}

export default App;
