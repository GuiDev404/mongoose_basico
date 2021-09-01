require('dotenv').config()
require('./connection');
const { 
  createProduct, createUser, 
  findAllProducts, findOneUser, 
  removeProducts, removeOneProduct,  findAndRemoveOneProduct,  removeProductById, 
  findOneAndUpdate, findAndManualUpdate,  updateOneUser,
  uniqueInAction 
} =  require('./crud');
  
// ------------- PRODUCTOS
// ? Crear un nuevo producto y lo devuelve
// createProduct({ 
//   name: 'Monitor HP',
//   description: 'Monitor HP Gama Gamer...',
//   price: 10000 
// })


// ? Todos los productos -> {}
// findAllProducts() 
// ? Todos los productos que tenga de nombre monitor hp 
// findAllProducts({ name: 'Monitor HP' }) 



// ? Devuelve { n: 1, ok: 1, deletedCount: 1 }
// removeOneProduct({ _id: '612fef4d6eb1113934fc99a3' }) 

// ? Devuelve el producto eliminado
// findAndRemoveOneProduct({ name: 'Mouse Genius' }) 

// ? Devuelve el producto eliminado
// removeProductById('612ff02052bc8c1f089648e5') 

// ? Elimina todos y devuelve { n: cantidadEliminada, ok: 1, deletedCount: cantidadEliminada }
// removeProducts() 
// ? Elimina los que cumplan la condicion y devuelve {n: cant, ok: 1, deletedCount: cant }
// removeProducts({ name: 'Monitor HP' })


// ------------- USUARIOS

// ? Crear un nuevo usuario y lo devuelve, tanto la instancia de new User() como el metodo save() devuelve el mismo objeto
// createUser({
//   username: 'asdas',
//   password: 'adasd',
//   name: 'asdasda65'
// })

// ? El usuario encontrado o null si no se encuentra
// findOneUser({ username: 'l-ganchi' }) 



// ? { n: 1, nModified: 1, ok: 1 }
// updateOneUser({ username: 'elepepe'}, { username: 'el_pepe' }) 

// ? Tanto el objeto que realizo el find y fue modificado como el que devuelve el metodo save devuelven los mismo
// findAndManualUpdate({ username: 'el_pepe'})

// ? Retorna el usuario antes de actualizar
// findOneAndUpdate({ username: "l-ganchi" }, { name: 'l-gante' }) 
// ? Retorna el usuario actualizado
// findOneAndUpdate({ username: "l-ganchi" }, { password: 'a5s4d56as6' }, true) 


/*
? Tira un error al crear el segundo usuario, con el mismo usarname. Este error se puede evitar en el controlador del registro, validando (buscando en la db) que ya existe un usuario con ese username/email. Y manejar el error por las dudas aunque si se hizo lo anterior correctamente no deberia llegar el error.
*/

// uniqueInAction({ username: 'nina', password: 'a5sd45a4' }) 