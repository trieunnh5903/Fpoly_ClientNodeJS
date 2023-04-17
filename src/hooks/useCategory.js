import React from "react";
import IP from "../config/ip";

export const useCategory = () => {
    const [categoryList, setCategoryList] = React.useState([]);

    const fetchCategoryList = async () => {
        // const res = await fetch(`http://${IP}:3000/api/category`);
        // const data = await res.json();
        const data = [
            {
                "_id": "64238cf6fc13ae1b630003fc",
                "name": "Vegetable",
                "image": "https://firebasestorage.googleapis.com/v0/b/fpolygroceryshop-f4260.appspot.com/o/categories%2Fvegetables.png?alt=media&token=279399a3-2ea0-48f7-87aa-1233101838af"
            },
            {
                "_id": "64238cf6fc13ae1b630003fd",
                "name": "Fruit",
                "image": "https://firebasestorage.googleapis.com/v0/b/fpolygroceryshop-f4260.appspot.com/o/categories%2Ffruit.png?alt=media&token=e328f865-9477-4ee5-9039-96b9b015a3c3"
            },
            {
                "_id": "64238cf6fc13ae1b630003ff",
                "name": "Meats",
                "image": "https://firebasestorage.googleapis.com/v0/b/fpolygroceryshop-f4260.appspot.com/o/categories%2Fmeats.png?alt=media&token=7074df68-cd39-4560-a555-106ea8be739a"
            },
            {
                "_id": "64238cf6fc13ae1b63000400",
                "name": "Fish",
                "image": "https://firebasestorage.googleapis.com/v0/b/fpolygroceryshop-f4260.appspot.com/o/categories%2Ffish.png?alt=media&token=cb176daa-1325-4e48-b167-64abfb5e9ce4"
            },
            {
                "_id": "64238cf6fc13ae1b63000401",
                "name": "Seafood",
                "image": "https://firebasestorage.googleapis.com/v0/b/fpolygroceryshop-f4260.appspot.com/o/categories%2Fseafood.png?alt=media&token=78c780a8-27d3-474c-b08e-b4b6664ed821"
            },
            {
                "_id": "64238cf6fc13ae1b63000403",
                "name": "Egg & Milk",
                "image": "https://firebasestorage.googleapis.com/v0/b/fpolygroceryshop-f4260.appspot.com/o/categories%2Fegg%26milk.png?alt=media&token=daa83c5e-43a4-45f1-b874-b5ab189d470f"
            },
            {
                "_id": "6429736b01fb40b5da218f95",
                "name": "Cake",
                "image": "https://firebasestorage.googleapis.com/v0/b/fpolygroceryshop-f4260.appspot.com/o/categories%2Fcake.png?alt=media&token=8de481f6-5681-4c9c-95b3-472d4455765c"
            }
        ]
        setCategoryList(data || []);
    };

    React.useEffect(() => {
        fetchCategoryList()
    }, [])


    return categoryList;
}