import Directory from './components/directory/directory.component';


const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Group A',
      imageUrl: "https://i.ibb.co/gwYZmpN/1.jpg"
    },
    {
      id: 2,
      title: 'Group B',
      imageUrl: "https://i.ibb.co/2MkBnHn/2.jpg"
    },
    {
      id: 3,
      title: 'Group C',
      imageUrl: "https://i.ibb.co/w0L9YYv/3.jpg"
    },
    {
      id: 4,
      title: 'Group D',
      imageUrl: "https://i.ibb.co/QjXhjFN/4.jpg"
    },
    {
      id: 5,
      title: 'Group E',
      imageUrl: "https://i.ibb.co/tpGfcB9/5.jpg"
    },
    {
      id: 6,
      title: 'Group Fffff',
      imageUrl: "https://i.ibb.co/t8TxJ7y/6.jpg"
    }
  ];

  return (

    <Directory categories = {categories} />

  );
};

export default App;
