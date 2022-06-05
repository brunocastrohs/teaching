import React from 'react';
import List from '../List/index';
import mainDivStyle from './style';
import InputWithLabel from '../InputWithLabel/index';
import useSemiPersistenceState from '../../hooks/useSemiPersistenceState';

//antigo App
const Home = () => {

  const stories = [
    {
      objectID: 0,
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4
    },
    {
      objectID: 1,
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
    },
  ];

  const [searchTerm, setSearchTerm] = useSemiPersistenceState(
    'search',''
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function(story) {
    return story.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <div style={mainDivStyle}>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id='search'
        value={searchTerm}
        onInputChange={handleSearch}
        label='Search'
      />

      <hr />

      <List list={searchedStories} />

    </div>
  );
};

export default Home;