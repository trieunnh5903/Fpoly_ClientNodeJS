import { createServer } from "miragejs"

if (window.server) {
    server.shutdown()
}

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

window.server = createServer({
    routes() {
        //lay danh sach theo san pham theo loai
        this.get("/api/product/", (schema, req) => {
           return listProducts.filter(item => {
            if(req.queryParams.type != ''){
                return item.type = req.queryParams.type
            }
            return true;
           })
           .filter(item => item.name.toLocaleLowerCase().includes(req.queryParams.searchKey.toLocaleLowerCase() || ''))
        })
        // lay danh sach category
        this.get("/api/category", () => {
            return [
                { id: '1', name: 'Vegetable', image: require('../src/asset/vegetable.png') },
                { id: '2', name: 'Fruit', image: require('../src/asset/fruit.png') },
                { id: '3', name: 'Dairy', image: require('../src/asset/dairy.png') },
                { id: '4', name: 'Meats', image: require('../src/asset/meats.png') },
            ]
        })
    },
})

