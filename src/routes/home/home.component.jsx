import Directory from '../../components/directory/directory.component';


const Home = () => {

    const categories = [
      {
        id: 1,
        title: 'group A',
        imageUrl: "https://i.ibb.co/gwYZmpN/1.jpg"
      },
      {
        id: 2,
        title: 'group B',
        imageUrl: "https://i.ibb.co/2MkBnHn/2.jpg"
      },
      {
        id: 3,
        title: 'group C',
        imageUrl: "https://i.ibb.co/w0L9YYv/3.jpg"
      },
      {
        id: 4,
        title: 'group D',
        imageUrl: "https://i.ibb.co/QjXhjFN/4.jpg"
      },
      {
        id: 5,
        title: 'group E',
        imageUrl: "https://i.ibb.co/tpGfcB9/5.jpg"
      },
      {
        id: 6,
        title: 'group F',
        imageUrl: "https://i.ibb.co/t8TxJ7y/6.jpg"
      }
    ];
  
    return (
  
      <Directory categories = {categories} />
  
    );
  };
  
  export default Home;