import React from 'react'

import './style.css'

function DevItem({ dev, onDelete, openModal }) {

  async function handleDelete(e) {
    e.preventDefault()
    await onDelete(dev._id)
  }

  function handleEdit(e) {
    e.preventDefault()
    openModal(dev)
  }

    return (
        <li className="dev-item">
            <header className="h">
              <img src={dev.avatar_url} alt={`dev: ${dev.name}`}/>
              <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
              </div>
            </header>
            <p className="m">{dev.bio}</p>
            <div className="f">
            <button onClick={handleDelete}>Deletar</button>
            <button onClick={handleEdit}>Editar</button>
            <a href={`https://github.com/${dev.github_username}`}>Acessar github</a>
            </div>
        </li>
    )
}

export default DevItem