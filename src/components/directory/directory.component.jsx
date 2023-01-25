import DirectoryItem from '../directory-item/directory-item.component.jsx';
import './directory.styles.scss';

const Directory = () => {
  const categories = [
    {
      id: 1,
      title: 'group A',
      imageUrl: "https://i.ibb.co/gwYZmpN/1.jpg",
      route: 'shop/group a'
    },
    {
      id: 2,
      title: 'group B',
      imageUrl: "https://i.ibb.co/2MkBnHn/2.jpg",
      route: 'shop/group b'
    },
    {
      id: 3,
      title: 'group C',
      imageUrl: "https://i.ibb.co/w0L9YYv/3.jpg",
      route: 'shop/group c'
    },
    {
      id: 4,
      title: 'group D',
      imageUrl: "https://i.ibb.co/QjXhjFN/4.jpg",
      route: 'shop/group d'
    },
    {
      id: 5,
      title: 'group E',
      imageUrl: "https://i.ibb.co/tpGfcB9/5.jpg",
      route: 'shop/group e'
    },
    {
      id: 6,
      title: 'group F',
      imageUrl: "https://i.ibb.co/t8TxJ7y/6.jpg",
      route: 'shop/group f'
    }
  ];
return (
    <div className='directory-container'>
    {categories.map(({ id,title,imageUrl,route }) => (
      <DirectoryItem  key={id} title={title} imageUrl={imageUrl} route={route} />
    ))}
  </div>
)

}

export default Directory;