import React, { useState, useEffect } from 'react'

function DevForm({ onSubmit }) {
    const [techs, setTechs] = useState('')
    const [github_username, setGithubUsername] = useState('')

    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    useEffect( _ => {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords
            setLatitude(latitude)
            setLongitude(longitude)
          },
          (err) => {
            console.log(err)
          },
          {
            timeout: 30000,
          }
        )
      }, [])
    
    async function handleSubmit(e){
        e.preventDefault()

    await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        })


    setGithubUsername('')
    setTechs('')
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="input-block">

          <label htmlFor="user">Usuario do github</label>
          <input name="github_username" id="user" required value={github_username} onChange={ e => setGithubUsername(e.target.value) }/>

          </div>

          <div className="input-block">
          
          <label htmlFor="techs">Technologias</label>
          <input name="techs" id="techs" required value={techs} onChange={ e => setTechs(e.target.value) }/>

          </div>

          <div className="input-group">

          <div className="input-block">

          <label htmlFor="latitude">Latitude</label>
          <input name="latitude" id="latitude" required value={latitude} onChange={ e => setLatitude(e.target.value) }/>

          </div>

          <div className="input-block">

          <label htmlFor="longitude">Longitude</label>
          <input name="longitude" id="longitude" required value={longitude} onChange={ e => setLongitude(e.target.value) }/>

          </div>

          </div>

          <button type="submit">SALVAR</button>
        </form>
    )
}

export default DevForm