import React from "react";
import IP from "../config/ip";

export const useCategory = () => {
    const [categoryList, setCategoryList] = React.useState([]);

    const fetchCategoryList = async () => {
        const res = await fetch(`http://${IP}:3000/api/category`);
        const data = await res.json();
        setCategoryList(data || []);
    };

    React.useEffect(() => {
        fetchCategoryList()
    }, [])


    return categoryList;
}