import React from 'react'

const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      {children}
    </div>
  )
}

export default Card
{/* Donc card là a juste été utilisé pour mettre le contenu dans une case et changer de couleur*/}