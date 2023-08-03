import React, { useState, useEffect } from "react";
import IP from "../config/ip";



export const useProduct = () => {
    const [listProducts, setListProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchProducts = async (idCategory, searchTerm) => {
        setIsLoading(true);
        const res = await fetch(`http://${IP}:3000/api/product/?idCategory=${idCategory || ''}&searchKey=${searchTerm || ''}`);
        const data = await res.json();
        console.log(data);
        // const data = [
        //     {
        //         "_id": "6425584b6805082661fc0bd1",
        //         "name": "Chinese Fresh Cabbage",
        //         "price": 5.66,
        //         "quantity": 2,
        //         "image": "https://images.unsplash.com/photo-1590759485298-244d7a5737e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        //         "category": "64238cf6fc13ae1b630003fc",
        //         "__v": 0
        //     },
        //     {
        //         "_id": "64294a9394603255bd67371c",
        //         "name": "Purple Sweet Potato",
        //         "price": 5.66,
        //         "quantity": 2,
        //         "category": "64238cf6fc13ae1b630003fc",
        //         "__v": 0,
        //         "image": "https://images.unsplash.com/photo-1584699006710-3ad3b82fce7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        //     },
        //     {
        //         "_id": "64294b0894603255bd67372e",
        //         "name": "Green Beans",
        //         "price": 5.66,
        //         "quantity": 2,
        //         "category": "64238cf6fc13ae1b630003fc",
        //         "__v": 0,
        //         "image": "https://images.unsplash.com/photo-1574963835594-61eede2070dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        //     },
        //     {
        //         "_id": "64294c5e94603255bd673737",
        //         "name": "Broccoli",
        //         "price": 5.62,
        //         "quantity": 2,
        //         "category": "64238cf6fc13ae1b630003fc",
        //         "__v": 0,
        //         "image": "https://images.unsplash.com/photo-1614336215203-05a588f74627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        //     },
        //     {
        //         "_id": "643366c1094c1cc2976051b2",
        //         "name": "orange",
        //         "price": 5.66,
        //         "quantity": 22,
        //         "image": "http://172.16.75.134:3000/images/image-1681090241080-521211580-oranges-1995079_960_720.jpg",
        //         "category": "64238cf6fc13ae1b630003fc",
        //         "__v": 0
        //     }
        // ]
        setListProducts(data || []);
        setIsLoading(false);
    };
    const resetList = () => setListProducts([])
    return [listProducts, isLoading, fetchProducts, resetList];
}