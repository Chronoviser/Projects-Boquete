import {
    FaTimes,
    FaHome,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaUserFriends,
    FaFolderOpen,
    FaCalendarAlt,
    FaWpforms
} from 'react-icons/fa';
import { useGlobalContext } from './Context';

function SideBar() {
    const { isSideBarOpen, closeSideBar } = useGlobalContext();

    return (
        <aside className={`${isSideBarOpen ? 'modalSideBar modalShowSideBar' : 'modalSideBar'}`}>
            <div className="modalHeader">
                <p style={{ color: "cornflowerblue" }}><strong style={{ color: "#222" }}>Tas</strong>pro</p>
                <p style={{ color: "red", cursor: "pointer" }}><FaTimes onClick={closeSideBar} /></p>
            </div>
            <div className="modalLinks">
                <p className="modalLinksP"><FaHome />&nbsp;&nbsp;Home</p>
                <p className="modalLinksP"><FaUserFriends />&nbsp;&nbsp;Team</p>
                <p className="modalLinksP"><FaFolderOpen />&nbsp;&nbsp;Projects</p>
                <p className="modalLinksP"><FaCalendarAlt />&nbsp;&nbsp;Calendar</p>
                <p className="modalLinksP"><FaWpforms />&nbsp;&nbsp;Documents</p>
            </div>
            <div className="modalSocials">
                <a href='https://github.com/Chronoviser'><FaGithub className="modalSocialsIcon" /></a>
                <a href='https://linkedin.com/in/abhisheksinghsde'> <FaLinkedin className="modalSocialsIcon" /></a>
                <a href='https://www.instagram.com/chronoviser/'> <FaInstagram className="modalSocialsIcon" /></a>
            </div>
        </aside>
    );
}

export default SideBar;