import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [users, setUsers] = useState(null);
  const [selectUser, setSelectUser]= useState({id: null});
  const [load, setLoad]= useState(false);
  const idRef = useRef();


  const fetchData = async(url) => {
    setLoad(true);
    const response = await fetch(url);
    const data = await response.json();
    setLoad(false);
    return data
  }

  useEffect(() => {
    fetchData("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
    .then((data) => setUsers(data));
  }, []);

  const userDetails = (user) => {
    idRef.current = user.id;
    if (idRef.current !== selectUser.id)
      fetchData(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${user.id}.json`, user)
      .then((data) => setSelectUser(data))
  }
  
  return (
    <div className="App">
      <div className="List">
        <ul>
          {users && users.map((item) => (
            <List item={item} callback={userDetails} key={item.id} />
          ))}
        </ul>
      </div>

      <div>
        {load ? <div>Loading......</div> : selectUser.id && <Details user={selectUser} />}
      </div>
    </div>
  );
}

export default App;
