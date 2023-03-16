import React, { useState, useEffect } from "react";

export const useProduct = () => {
    const [listProducts, setListProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchProducts = async (type) => {
        setIsLoading(true);
        const res = await fetch(`/api/product/?type=${type}`);
        const data = await res.json();
        setListProducts(data || []);
        setIsLoading(false);
    };
    
    return [listProducts, isLoading, fetchProducts];
}