import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './Context';

function Modal() {

    const { isModalOpen, closeModal } = useGlobalContext();

    return (
        <div className={`${isModalOpen ? 'modalOverlay modalShowModal' : 'modalOverlay'}`} >
            <div className="modalContainer">
                <h3>modal content</h3>
                <FaTimes onClick={closeModal} className="modalOverlayButton"></FaTimes>
            </div>
        </div >
    );
}

export default Modal;