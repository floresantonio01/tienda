import React, {useContext} from "react";
import { link } from "react-router-dom";
import { DataContext } from "context/DataProvider"

export const ProductoItem = ({key, title, image, category, price, id}) => {

		const value = useContext(DataContext);
		const addCarrito = value.addCarrito;



return (

	<div key={id} className="producto">
		<Link to={'producto/${id}'}>
		<div className="producto_img">
			<img src={image} alt={title} />
		</div>
		</link>
		<div className="producto-footer">
			<h1>{title}</h1>
			<p>{category}</p>
			<p className="price">${price} </p>
		</div>
		<div className="bottom">
			<button onClick={() => addcarrito(id)} className="btn">Añadir al carrito</button>
		<div>
		<Link to={*/producto/${id}*} className="btn">Vista</Link>
		</div>
	</div>
</div> 
  );
};







