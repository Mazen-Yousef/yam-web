// import './directory-item.styles.scss';
import {useNavigate} from 'react-router-dom';
import {BackgroundImage,Body,DirectoryItemContainer} from './directory-item.styles';



const DirectoryItem = ({title,imageUrl,route}) => {
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);

return (

<DirectoryItemContainer>
    <BackgroundImage imageUrl={imageUrl} />
    <Body onClick={onNavigateHandler}>
        <h2>{title}</h2>
        <p>show now</p>
    </Body>
</DirectoryItemContainer>
)}

export default DirectoryItem;