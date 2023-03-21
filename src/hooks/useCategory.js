import React from "react";
const CATEGOTIES = [
    { id: '1', name: 'Vegetable', image: require('../asset/vegetable.png') },
    { id: '2', name: 'Fruit', image: require('../asset/fruit.png') },
    { id: '3', name: 'Dairy', image: require('../asset/dairy.png') },
    { id: '4', name: 'Meats', image: require('../asset/meats.png') },
  ]
export const useCategory = () => {
    // const [categoryList, setCategoryList] = React.useState([]);

    // const fetchCategoryList = async () => {
    //     // setIsLoading(true);
    //     const res = await fetch(`/api/category`);
    //     const data = await res.json();
    //     setCategoryList(data || []);
    //     // setIsLoading(false);
    // };

    // React.useEffect(() => {
    //     fetchCategoryList()
    // }, [])


    return CATEGOTIES;
}