import React, { useState, useEffect } from "react";

// const listProducts = [
//     {
//       id: 1,
//       name: 'Chinese Fresh Cabbage',
//       image: require('../asset/chinese-cabbage.png'),
//       type: 'Vegetable',
//       pricePerKg: '$5.66'
//     },
//     {
//       id: 2,
//       name: 'Fresh Red Tomato',
//       image: require('../asset/one-fresh-red-tomato-isolated-white.png'),
//       type: 'Fruit',
//       pricePerKg: '$5.66'
//     },
//     {
//       id: 3,
//       name: 'Purple Sweet Potato',
//       image: require('../asset/purple-sweet-potato.png'),
//       type: 'Fruit',
//       pricePerKg: '$5.66'

//     },
//     {
//       id: 4,
//       name: 'Green Beans',
//       image: require('../asset/green-beans-handful-isolated-white-background-cutout.png'),
//       type: 'Vegetable',
//       pricePerKg: '$5.66'

//     },
//     {
//       id: 5,
//       name: 'Fresh Broccoli',
//       image: require('../asset/fresh-broccoli-vegetable.png'),
//       type: 'Vegetable',
//       pricePerKg: '$5.66'

//     },
//     {
//       id: 6,
//       name: 'Potato',
//       image: require('../asset/potato.png'),
//       type: 'Fruit',
//       pricePerKg: '$5.66'

//     },
//   ]


export const useProduct = () => {
    const [listProducts, setListProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchProducts = async (type, searchTerm) => {
        setIsLoading(true);
        const res = await fetch(`/api/product/?type=${type || ''}&searchKey=${searchTerm || ''}`);
        const data = await res.json();
        setListProducts(data || []);
        setIsLoading(false);
    };
    
    const resetList = () => setListProducts([])
    return [listProducts, isLoading, fetchProducts, resetList];
}