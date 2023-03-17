import React from "react";

export const useCategory = () => {
    const [categoryList, setCategoryList] = React.useState([]);

    const fetchCategoryList = async () => {
        // setIsLoading(true);
        const res = await fetch(`/api/category`);
        const data = await res.json();
        setCategoryList(data || []);
        // setIsLoading(false);
    };

    React.useEffect(() => {
        fetchCategoryList()
    }, [])


    return categoryList;
}