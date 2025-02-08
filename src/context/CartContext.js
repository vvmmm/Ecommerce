// src/context/CartContext.js
import React, { createContext, useContext, useReducer, useEffect ,useState  } from 'react';

// Added this new component for notifications
export const Notification = ({ message }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return show ? (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      background: '#27ae60',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '4px',
      animation: 'slideIn 0.3s ease-out'
    }}>
      {message}
    </div>
  ) : null;
};


const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return action.payload;
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };
    case 'CLEAR_CART':
      return { items: [], totalItems: 0, totalPrice: 0 };
    default:
      return state;
  }
};

const calculateTotals = (items) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return { totalItems, totalPrice };
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], totalItems: 0, totalPrice: 0 });

  // Load cart from localStorage on initial load
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    const { items } = state;
    const { totalItems, totalPrice } = calculateTotals(items);
    const cartData = { items, totalItems, totalPrice };
    localStorage.setItem('cart', JSON.stringify(cartData));
  }, [state.items]);

  const [notification, setNotification] = useState("Added successfully");

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2000);
  };


const [quantity, setQuantity] = useState(0)



  // Handler to increment the quantity
  const increment = (product) => {
    setQuantity(prevQuantity => prevQuantity + 1);
    dispatch({ type: 'ADD_ITEM', payload: product });
    showNotification(`${product.title} added to cart!`);
  };

  // Handler to decrement the quantity
  const decrement = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  const addToCart = (product) => {
    increment(product)
    
    dispatch({ type: 'ADD_ITEM', payload: product });
    showNotification(`${product.title} added to cart!`);
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const { items } = state;
  const { totalItems, totalPrice } = calculateTotals(items);

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalPrice,
        quantity,
        notification,
        increment,
        decrement,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };