import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface UserProps {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<[]>();
  const tunnelBaseUrl = import.meta.env.VITE_TUNNEL_BASE_URL;
  const hostIP = window.location.hostname
  // const localBaseUrl = import.meta.env.VITE_LOCAL_BASE_URL;

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(`${tunnelBaseUrl}/users`)
        const response = await res.json();
        setUsers(response);
      } catch {
        try {
          const res = await fetch(`http://${hostIP}:5001/users`)
          const response = await res.json();
          setUsers(response);
        } catch (error) {
          console.log(error)
        }
      }
    }

    getUsers();
  }, [hostIP, tunnelBaseUrl])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React</h2>
      <h2>Practica Docker</h2>
      <div className="card">
        <div>
          <p>Usuarios registrados:</p>
          {users && (
            users.map((item: UserProps, index) => {
              return (
                <div key={`user-${index}`} className='user'>
                  <p>{index + 1}.</p>
                  <p>{item.name}</p>
                  <p>{item.email}</p>
                </div>
              )
            })
          )}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
