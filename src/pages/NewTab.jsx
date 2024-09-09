import React, { useEffect, useState } from "react";

const NewTab = () => {
  const [users, setUsers] = useState([]);
//   const [links, setLinks] = useState([]);


  const URL = "https://catfact.ninja/facts";
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setUsers( data.data)
        // setLinks(data.links)
      })
      .catch((err) => console.log('This is an error') 
      );
  }, []);
  return (
    <>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <div>{user.fact}</div>
            

          </li>
          
        ))}
      </ul>

      {/* <ul>
        {links.map((user, index)=>(
            <li key={index}>
                <div>{user.label}</div>
            </li>
        ))}
      </ul> */}
    </>
  );
};

export default NewTab;
