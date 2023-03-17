import { createServer } from "miragejs"

if (window.server) {
  window.server.shutdown()
}

window.server = createServer({
  routes() {
    this.get("/api/product", (schema, req) => {
      // console.log(req.queryParams.type);
      const listProducts = [
        {
          id: 1,
          name: 'Chinese Fresh Cabbage',
          image: require('../src/asset/chinese-cabbage.png'),
          type: 'Vegetable',
          pricePerKg: '$5.66'
        },
        {
          id: 2,
          name: 'Fresh Red Tomato',
          image: require('../src/asset/one-fresh-red-tomato-isolated-white.png'),
          type: 'Fruit',
          pricePerKg: '$5.66'
        },
        {
          id: 3,
          name: 'Purple Sweet Potato',
          image: require('../src/asset/purple-sweet-potato.png'),
          type: 'Fruit',
          pricePerKg: '$5.66'

        },
        {
          id: 4,
          name: 'Green Beans',
          image: require('../src/asset/green-beans-handful-isolated-white-background-cutout.png'),
          type: 'Vegetable',
          pricePerKg: '$5.66'

        },
        {
          id: 5,
          name: 'Fresh Broccoli',
          image: require('../src/asset/fresh-broccoli-vegetable.png'),
          type: 'Vegetable',
          pricePerKg: '$5.66'

        },
        {
          id: 6,
          name: 'Potato',
          image: require('../src/asset/potato.png'),
          type: 'Fruit',
          pricePerKg: '$5.66'

        },
      ]
      return listProducts.filter(item => item.type == req.queryParams.type);
    })

    this.get("/api/category", (schema, req) => {
      const CATEGOTIES = [
        { id: '1', name: 'Vegetable', image: require('../src/asset/vegetable.png') },
        { id: '2', name: 'Fruit', image: require('../src/asset/fruit.png') },
        { id: '3', name: 'Dairy', image: require('../src/asset/dairy.png') },
        { id: '4', name: 'Meats', image: require('../src/asset/meats.png') },
      ]
      return CATEGOTIES;
    })
  },
})