import React, { useState,useEffect }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import logo from './logo.svg';


// useEffect

function Example(){
  const[count,setCount] = useState(0);
  useEffect(()=>{setTimeout(()=>{setCount(count => count+1)},20000)});
  return(
    <h1>website counting detail {count} times</h1>
  )
}


function Demo() {
  const [users, setUser] = useState({}); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>List out the user in API</h1>
      <ul>
      {users.map(user => (<li key={user.id}>{user.name}</li>))}
      </ul>
    </div>
  )
}

function Final(){
  return(
    <div>
      <Example/>
      <Demo/>
    </div>
  )
}

ReactDOM.render(<Final/>,document.getElementById('root'));