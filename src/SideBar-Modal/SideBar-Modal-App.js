import { AppProvider } from './Components/Context';
import Home from './Components/Home';
import Modal from './Components/Modal';
import SideBar from './Components/SideBar';
import './SideBar-Modal-App.css';

function SideBarModalApp() {

    return (
        <AppProvider>
            <>
                <Home />
                <Modal />
                <SideBar />
            </>
        </AppProvider>
    );
}

export default SideBarModalApp;