import React, {createContext, useState} from 'react';

 export const AppContext = createContext();

 const AppProvider = ({children}) => {

    const [products, setProducts] = useState([{
        
        "id": "1",
        "title": "First title",
        "src": "http://placeimg.com/360/360/any",
        "description": "Lorem ipsum dolor, sit amet",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magnam qui aspernatur facilis sed, dolorem nisi voluptate!",
        "price": 23,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
    },
    {
         "id": "2",
        "title": "Second title",
        "src": "http://placeimg.com/360/360/any",
        "description": "Lorem ipsum dolor, sit amet",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magnam qui aspernatur facilis sed, dolorem nisi voluptate!",
        "price": 43,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
    },
    {
        "id": "3",
        "title": "Third title",
        "src": "http://placeimg.com/360/360/any",
        "description": "Lorem ipsum dolor, sit amet",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magnam qui aspernatur facilis sed, dolorem nisi voluptate!",
        "price": 17,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
    },
    {
        "id": "4",
        "title": "Fourth title",
        "src": "http://placeimg.com/360/360/any",
        "description": "Lorem ipsum dolor, sit amet",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velmagnam qui aspernatur facilis sed, dolorem nisi voluptate!",
        "price": 24,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
    },
    {
        "id": "5",
        "title": "Fiveth title",
        "src": "http://placeimg.com/360/360/any",
        "description": "Lorem ipsum dolor, sit amet",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Velmagnam qui aspernatur facilis sed, dolorem nisi voluptate!",
        "price": 19,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
    },
    {
        "id": "6",
        "title": "Sixth title",
        "src": "http://placeimg.com/360/360/any",
        "description": "Lorem ipsum dolor, sit amet",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing eliVel magnam qui aspernatur facilis sed, dolorem nisi voluptate!",
        "price": 8,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
    }
])
       
    return ( 
        <AppContext.Provider value ={{products, setProducts}}>
            {children}
        </AppContext.Provider>
        );
}
 
export default AppProvider;