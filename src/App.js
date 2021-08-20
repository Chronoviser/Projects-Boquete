import './App.css';
import { Route, Link } from 'react-router-dom';
import BirthdayApp from './Birthday-Reminder/App';
import TourBookApp from './Tour-Book/App';
import Styled from 'styled-components';

const StyledLink = Styled(Link)`
  margin: 0 30% 0 30%;
  display: block;
  font-size: 24px;
  background: azure;
  font-weight: 600;
  padding: 15px;
  text-decoration: none;
  color: matte;
  cursor: pointer;
  border-bottom: 4px solid #fff;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`


function App() {
  return (
    <div className="App">
      <Route path='/' exact render={() =>
        <>
          <h1>Projects Boquete</h1>
          <StyledLink to="/birthday-reminder-app" exact>Birthday Reminder App</StyledLink>
          <StyledLink to="/tour-book-app" exact>Tour Book App</StyledLink>
        </>
      } />
      <Route path="/birthday-reminder-app" component={BirthdayApp} />
      <Route path="/tour-book-app" component={TourBookApp} />
    </div>
  );
}

export default App;
