import React from 'react'
import './style.css'

function Modal({ closeModal, onSubmit }){

    //funç]ao que altera e depois fecha o modal
    async function handleSubmit(e){
        e.preventDefault()
        await onSubmit({
            //techs
        })
    }

    function handleCloseModal(e){
        e.preventDefault()
        closeModal()
    }

    return (
        <div id="simpleModal" className="modal">
            <div className="modal-content">
                <form>
                    <label htmlFor="t">Tecnologias</label>
                    <input id="editTech" type="text"/>
                    <button type="submit" className="btn">Salvar</button>
                    <button onClick={handleCloseModal} className="btn">Cancelar</button>
                </form>
            </div>
        </div>
    )
}

export default Modal