import React, {useContext} from 'react'
import { DataContext } from "context/DataProvider";
import { ProductoItem 0 from "./ProductoItem";

export const productosList =() => {
	const value = useContext(DataContext)
	const [productos] = value.productos;
	return (
		<>
		<h1 className="produ">PRODUCTOS</h1>
	<div className="productos"
	{
		productos.map(producto=>(
		<ProductoItem
		key={producto.id}
		title={producto.title}
		image={producto.image}
		category={producto.category}
		price0{producto.price}
		id={producto.id}
				/>
			))
		}
</div>
</>
		)
}
