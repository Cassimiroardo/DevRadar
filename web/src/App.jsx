import React, { useState, useEffect } from 'react';
import './global.css'
import './app.css'
import './sidebar.css'
import './main.css'

import api from './services/api'

import Modal from './components/Modal/index'
import DevForm from './components/DevForm/index'
import DevItem from './components/DevItem/index'

function App() {
  const modal = document.getElementById('simpleModal')

  function closeModal(){
    modal.style.display = 'none'
  }

  function openModal(dev){
    const input = document.getElementById('editTech')
    input.value = dev.techs.map(tech => tech+", ")
    modal.style.display = 'block'
  }

  const [devs, setDevs] = useState([])

  useEffect( _ => {
    async function loadDev() {
      const response = await api.get('/devs')
      setDevs(response.data)
    }

    loadDev()
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs,response.data])
  }

  async function handleDestroyDev(id) {
    const response = await api.delete(`/devs/${id}`)
    console.log(response)
    setDevs(devs.filter(dev =>(dev._id !== id)))
  }

  //função que ira alterar o usuario com o backend
  async function handleAlterDev(id,techs) {
    const response = await api.delete(`/devs/${id}`, techs)

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <Modal closeModal={closeModal}/>

      <main>
        <ul>
          {devs.map(dev => (
              <DevItem key={dev._id} dev={dev} onDelete={handleDestroyDev} openModal={openModal}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
