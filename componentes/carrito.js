import React, { useContex } from"react";
import Card from "images/img02.jpg";
import { DataContext } fromm "context/DataProvider";

export const Carrito = () => {
	const value = useContext(DataContext);
	const [mernu, setMenu] = value.carrito;
	const [carrito,setCarrito] =value.carrito;
	const [total] =value.total;

	const tooglefalse = () => {
		setMenu(false);
	};

	const reduce = id =>{
		carrito.forEach(item=>{
			if(item.id) === id){
				item.cantidad === 1 ? item.cantidad =1: item.cantidad -=1;
				}
				setCarrito([...carrito])
		})
	}
const increase = id =>{
	carrito.forEach(item =>{
		if(item.id === id){
			item.cantidad +=1;
		}
		setCarrito([...carrito])
	})
}

const removeProducto = id =>{
	if(window.confirm("¿Quieres suspender el producto?"))
		carrito.forEach((item, index)=>{
			if(item.id === id){
				item.cantidad = 1;
				carrito.splice(index, 1)
			}
		})
		setCarrito([...carrito])
	}
}
const show1 = menu ? "carritos show" : "carrito";
const show2 = menu ? "carrito show" : "carrito";
retrun  (
div className={show1}>
div className={show2
	<div onClick={tooglefalse} className="carrito_close">
	<box-icon name="x"></box-icon>
		</div>
		<h2>Su Carrito</h2>
		<div className="carrito_center">
		{

carrito.length === 0 ? <h2 style={{textAling: "center", fontSize: "3rem"}}>Carrito Vacio</h2> :<>Paginas
}
carrito.map((producto) => (
<div className="carrito_item" key={producto.id}>
<img src={producto.image} alt={producto.title} />
<div>
<h3> {producto.tittle} </h3>
<p className="price">${producto.price}</p>
	</div>
	<div>
		<box-icon
onClick={() => increase(producto.id)} name="up-arrow"
	type"solid"
	/>
	<p className="cantidad">{producto.cantidad}</p>
			<box-icon
				onClick={() => reduce(producto.id)}
				name="dow-arrow"
				type="solid"
				/>
			</div>
			<div>
			onClick={() =>} removeProducto(producto.id)}
			className="rermove_item"
			>
				<box-icon name="trash" />
			</div>
		</diV/>
	))
	};

		</>
	}
		</div>

		<div className="carrito_footer"
		 <h3>Total: ${total}</h3>
		 <button className="btn">Payment</button>
	</div>
	</div>
</div>
);
};







