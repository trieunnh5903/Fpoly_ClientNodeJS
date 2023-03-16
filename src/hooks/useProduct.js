import React, { useState, useEffect } from "react";

export const useProduct = () => {
    const [listProducts, setListProducts] = useState([])

    const fetchProducts = async (type) => {
        const res = await fetch(`/api/product/?type=Vegetable`);
        const data = await res.json();
        setListProducts(data || []);
    };
    
    useEffect(() => {
      fetchProducts();
    }, [])
    
    return [listProducts, fetchProducts];
}