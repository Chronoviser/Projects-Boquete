import './App.css';
import { Route, Link } from 'react-router-dom';
import Styled from 'styled-components';
import BirthdayApp from './Birthday-Reminder/App';
import TourBookApp from './Tour-Book/App';
import ReviewsApp from './Reviews/Reviews-App';
import FAQApp from './FAQ/FAQ-App';
import MenuApp from './Menu/Menu-App';
import LIGApp from './Lorem-Ipsum-Generator/LIG-App';
import ColorGeneratorApp from './Color-Generator/Color-Generator-App';
import ModalStripeApp from './Modal-Stripe/Modal-Stripe-App';
import CockTailBarApp from './Cocktail-Bar/Cocktail-Bar-App';
import TenthApp from './The-10th-Project/Tenth-App';

const StyledLink = Styled(Link)`
  margin: 1% 5% 1% 5%;
  display: block;
  font-size: 24px;
  background: salmon;
  font-weight: 600;
  padding: 15px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  transition: color 0.5s;

  &:hover {
    background: white;
    box-shadow: none;
    color: salmon;
  }
`


function App() {
  return (
    <div className="App">
      <Route path='/' exact render={() =>
        <>
          <h1 style={{ color: "IndianRed" }}>Projects Boquete</h1>
          <div className="linksGrid">
            <StyledLink to="/birthday-reminder-app" exact>Birthday Reminder App</StyledLink>
            <StyledLink to="/tour-book-app" exact>Tour Book App</StyledLink>
            <StyledLink to="/reviews-app" exact>Reviews App</StyledLink>
            <StyledLink to="/faq-app" exact>FAQ App</StyledLink>
            <StyledLink to="/menu-app" exact>Menu App</StyledLink>
            <StyledLink to="/lorem-ipsum-generator-app" exact>Lorem Ipsum Generator App</StyledLink>
            <StyledLink to="/color-generator-app" exact>Color Generator App</StyledLink>
            <StyledLink to="/modal-stripe-app" exact>Modal Stripe App</StyledLink>
            <StyledLink to="/cocktail-bar-app" exact>Cocktail Bar App</StyledLink>
            <StyledLink to="/tenth-app" exact>The 10th Project App</StyledLink>
          </div>
        </>
      } />
      <Route path="/birthday-reminder-app" component={BirthdayApp} />
      <Route path="/tour-book-app" component={TourBookApp} />
      <Route path="/reviews-app" component={ReviewsApp} />
      <Route path="/faq-app" component={FAQApp} />
      <Route path="/menu-app" component={MenuApp} />
      <Route path="/lorem-ipsum-generator-app" component={LIGApp} />
      <Route path="/color-generator-app" component={ColorGeneratorApp} />
      <Route path="/modal-stripe-app" component={ModalStripeApp} />
      <Route path="/cocktail-bar-app" component={CockTailBarApp} />
      <Route path="/tenth-app" component={TenthApp} />
    </div>
  );
}

export default App;
