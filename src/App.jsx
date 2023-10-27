import { useEffect, useState } from 'react';
import styled from './App.module.scss';
import SearchLine from './components/searchLine/SearchLine';
import UsersList from './components/usersList/UsersList';
import axios from 'axios';
import useSearch from './hooks/useSearch';

function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const filtredUrl = useSearch(searchQuery);

  const handleQueryChange = (value) => {
    setSearchQuery(value);
  }

  useEffect(() => {
    const getUsers = async () => {
      await axios.get(filtredUrl).then((response) => {
        setUsers(response.data);
      }).catch((error) => {
        console.log(error);
      })
    }
    getUsers();
  }, [filtredUrl]);

  return (
    <>
      <div className={styled.appWrapper}>
        <SearchLine onInputChange={handleQueryChange}/>
        <UsersList users={users}/>
      </div>
    </>
  )
}

export default App
