import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Hero from './Components/Hero';
import Submenu from './Components/Submenu';
import { AppProvider } from './Components/context';
import './Stripe-App.css';

function StripeApp() {
    return (
            <AppProvider>
              <Navbar />
              <Sidebar />
              <Hero />
              <Submenu />
            </AppProvider>
    );
}

export default StripeApp;