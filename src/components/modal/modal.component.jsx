import Modal from 'react-modal';
import Button from '../button/button.component';
import './modal.styles.scss';


const ModalOpen = ({name,modalIsOpen,imageUrl,setModalIsOpen}) => {

   return <Modal isOpen = {modalIsOpen} ariaHideApp={false}  onRequestClose ={()=> setModalIsOpen(false)}>
                <div className='modal-contener'>
                    <img className='modalImg' src={imageUrl} alt={`${name}`} />
                    <span className='modalName'>{name}</span>
                    <Button onClick ={()=> setModalIsOpen(false)} >Close</Button>
                    
                </div>
          </Modal>
}

export default ModalOpen;