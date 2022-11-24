import React, {createContext, useState} from 'react';


 export const AppContext = createContext();

 const AppProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addCart = (id) =>{
        const check = cart.every(item =>(
                item.id !== id
            ))
            if(check){
                const data = products.filter(product =>(
                    product.id === id
                 ))
                 setCart([...cart,...data])
                 
            }else{
                alert("The product has been added to cart.")
            }
    }

    const reduction = id =>{
       cart.forEach(item => {
        if(item.id === id){
            item.count === 1 ? item.count = 1 : item.count -=1;
        }  
    })
      setCart([...cart]) 
      getTotal()
    }
    const increase = id =>{
        cart.forEach(item => {
            if(item.id === id){
                item.count += 1;
            }
        })
        setCart([...cart])
        getTotal()
    }
    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item.id === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
            getTotal()
        }
      
    }
    const getTotal = () =>{
        const total = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        setTotal(total)
    }
    
   

  

    const [products, setProducts] = useState([{
        
        "id": "1",
        "title": "Samartphone 01",
        "src": "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_9_9_36_15_911_03.jpg",
        "description": "Lorem ipsum dolor, sit amet",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magnam qui aspernatur facilis sed, dolorem nisi voluptate!",
        "price": 600,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
    },
    {
         "id": "2",
        "title": "Smartphone 02",
        "src": "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/5/pr_2021_5_11_10_10_10_336_00.jpg",
        "description": "Lorem ipsum dolor, sit amet",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magnam qui aspernatur facilis sed, dolorem nisi voluptate!",
        "price": 400,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
    },
    {
        "id": "3",
        "title": "Smartphone 03",
        "src": "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/9/pr_2020_9_21_12_9_23_990_00.jpg",
        "description": "Lorem ipsum dolor, sit amet",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magnam qui aspernatur facilis sed, dolorem nisi voluptate!",
        "price": 617,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
    },
    {
        "id": "4",
        "title": "Smartphone 04",
        "src": "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/11/pr_2022_11_4_9_39_33_714_07.jpg",
        "description": "Lorem ipsum dolor, sit amet",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velmagnam qui aspernatur facilis sed, dolorem nisi voluptate!",
        "price": 499,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
    },
    {
        "id": "5",
        "title": "Smartphone 05",
        "src": "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_4_9_24_12_96_00.jpg",
        "description": "Lorem ipsum dolor, sit amet",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Velmagnam qui aspernatur facilis sed, dolorem nisi voluptate!",
        "price": 320,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
    },
    {
        "id": "6",
        "title": "Smartphone 06",
        "src": "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_18_8_37_10_578_00.jpg",
        "description": "Lorem ipsum dolor, sit amet",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing eliVel magnam qui aspernatur facilis sed, dolorem nisi voluptate!",
        "price": 470,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
    }
])
       
    return ( 
        <AppContext.Provider value ={{products, addCart, cart, setProducts, reduction, increase, removeProduct, total, getTotal}}>
            {children}
        </AppContext.Provider>
        );
}
 
export default AppProvider;