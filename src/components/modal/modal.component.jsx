import Modal from 'react-modal';
import Button from '../button/button.component';
import {ModalContainer,ModalImage} from './modal.styles';


const ModalOpen = ({name,modalIsOpen,imageUrl,setModalIsOpen}) => {

   return <Modal isOpen = {modalIsOpen} ariaHideApp={false}  onRequestClose ={()=> setModalIsOpen(false)}>
                <ModalContainer>
                    <ModalImage src={imageUrl} alt={`${name}`} />
                    <span>{name}</span>
                    <Button onClick ={()=> setModalIsOpen(false)} >Close</Button>
                    
                </ModalContainer>
          </Modal>
}

export default ModalOpen;