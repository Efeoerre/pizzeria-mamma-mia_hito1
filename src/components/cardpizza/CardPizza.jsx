import { formatNumber } from '../../utils/formatNumber';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Pizza {name}</h5>
        <hr />
        <p className="card-text text-center">
          <strong>Ingredientes:</strong>
        </p>
        <p className="text-center"> {ingredients.join(', ')}</p>
        <hr />
        <h4 className="text-center mb-3">
          Precio: ${formatNumber(price)}
        </h4>
        <div className="mt-auto d-flex justify-content-around">
          <button className="btn btn-outline-dark">Ver más </button>
          <button className="btn btn-dark">Añadir </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
