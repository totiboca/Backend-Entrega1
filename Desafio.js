class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1; // Para generar ids autoincrementables
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar campos obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error('Todos los campos son obligatorios.');
        return;
      }
  
      // Validar que no se repita el campo "code"
      if (this.products.some(product => product.code === code)) {
        console.error('Ya existe un producto con el mismo código.');
        return;
      }
  
      const newProduct = {
        id: this.nextId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
      return newProduct;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const foundProduct = this.products.find(product => product.id === id);
  
      if (foundProduct) {
        return foundProduct;
      } else {
        console.error('Producto no encontrado.');
        return null;
      }
    }
  }
  
  const productManager = new ProductManager();
 
  console.log(productManager.getProducts());