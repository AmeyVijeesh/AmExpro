import React, { useEffect, useState } from "react";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";

const UserCart = ({ user }) => {
  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    // Load the user's cart when the component mounts
    loadUserCart();
  }, [user]);

  const loadUserCart = async () => {
    if (!user) {
      return;
    }

    const userCartRef = collection(db, "carts");
    const cartQuery = query(userCartRef, where("userId", "==", user.uid));

    const querySnapshot = await getDocs(cartQuery);

    if (querySnapshot.empty) {
      setUserCart([]);
    } else {
      const userCartData = querySnapshot.docs[0].data().cart;
      setUserCart(userCartData);

      // Add a listener for real-time updates
      const cartDoc = querySnapshot.docs[0].ref;
      cartDoc.onSnapshot((doc) => {
        const updatedCart = doc.data().cart;
        setUserCart(updatedCart);
      });
    }
  };

  const addToUserCart = async (item) => {
    if (!user) {
      return;
    }

    const userCartRef = collection(db, "carts");
    const cartQuery = query(userCartRef, where("userId", "==", user.uid));

    const querySnapshot = await getDocs(cartQuery);

    if (querySnapshot.empty) {
      // Create a new cart for the user
      await addDoc(userCartRef, {
        userId: user.uid,
        cart: [item],
      });
    } else {
      // Update the existing cart for the user
      const cartDoc = querySnapshot.docs[0].ref;
      const cartData = (await cartDoc.get()).data();
      const updatedCart = [...cartData.cart, item];
      await cartDoc.update({ cart: updatedCart });
    }

    loadUserCart(); // Reload the user's cart to reflect the changes
  };

  return (
    <div>
      {/* Render user's cart items and handle adding/removing items from the cart */}
      {userCart.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-details">
            <span className="cart-item-name">{item.name}</span>
          </div>
          <span className="cart-item-price">${item.price}</span>
          {/* Add a button to remove items from the cart if needed */}
        </div>
      ))}
    </div>
  );
};

export default UserCart;
