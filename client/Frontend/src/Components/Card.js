
const Card = ({genus, name, family, order}) => {

return (
    <div className='card' >
        <div className='text'>
          <h1>{name}</h1>
          <h2>{genus}</h2>
         <h2>{family}</h2>
         <h2>{order}</h2>
        </div>
      </div>
  )

}

export default Card;