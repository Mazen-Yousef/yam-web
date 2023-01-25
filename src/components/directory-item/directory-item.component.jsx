import './directory-item.styles.scss';
import {useNavigate} from 'react-router-dom';



const DirectoryItem = ({title,imageUrl,route}) => {
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);

return (

<div className='directory-item-container'>
    <div className='background-image' style={{
    backgroundImage: `url(${imageUrl})`,
    }} />
    <div className='directory-item-body' onClick={onNavigateHandler}>
        <h2>{title}</h2>
        <p>show now</p>
    </div>
</div>
)}

export default DirectoryItem;