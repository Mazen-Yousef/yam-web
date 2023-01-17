import DirectoryItem from '../directory-item/directory-item.component.jsx';
import './directory.styles.scss';

const Directory = ({categories}) => {
return (
    <div className='directory-container'>
    {categories.map(({ id,title,imageUrl }) => (
      <DirectoryItem  key={id} title={title} imageUrl={imageUrl} />
    ))}
  </div>
)

}

export default Directory;