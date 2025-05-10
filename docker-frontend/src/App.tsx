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
  const [privateIp, setPrivateIp] = useState('');
  const [publicIp, setPublicIp] = useState('');
  const tunnelBaseUrl = import.meta.env.VITE_TUNNEL_BASE_URL;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(`${tunnelBaseUrl}/users`)
        const response = await res.json();
        setUsers(response);
      } catch {
        try {
          const res = await fetch(`http://${baseUrl}:5001/users`)
          const response = await res.json();
          setUsers(response);
        } catch (error) {
          console.log(error)
        }
      } finally {
        const privateIpRes = await fetch('/api/ip')
        const privateIp = await privateIpRes.json();
        setPrivateIp(privateIp.ip)

        const publicIpRes = await fetch('https://api.ipify.org?format=json')
        const publicIp = await publicIpRes.json();
        setPublicIp(publicIp.ip)
      }
    }

    getUsers();
  }, [baseUrl, tunnelBaseUrl])

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
          <h2>Usuarios registrados:</h2>
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
        <h2>IP:</h2>
        <p>Privada: {privateIp}</p>
        <p>Pública: {publicIp}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
