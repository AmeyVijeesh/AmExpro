import { collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const [displayName, setDisplayName] = useState("User"); // Initialize to a default value

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is authenticated and data is available
        setDisplayName(user.displayName || "User");
      } else {
        // User is not authenticated
        setDisplayName("User");
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const bannerDisplay = () => {
    if (displayName === "User") {
      return "Hey there! Login to start shopping.";
    } else {
      return `Hey ${displayName}! Browse to start shopping.`;
    }
  };

  return (
    <>
      <div style={{ textAlign: "center", overflowX: "hidden" }}>
        <aside class="responsive-banner first">
          <div class="container-envelope">
            <svg class="cirle-a" height="160" width="160">
              <circle cx="80" cy="80" r="80" />
            </svg>
            <svg class="cirle-b" height="60" width="60">
              <circle cx="30" cy="30" r="30" />
            </svg>
            <svg class="cirle-c" height="600" width="600">
              <circle cx="300" cy="300" r="300" />
            </svg>
            <svg class="cirle-d" height="60" width="60">
              <circle cx="30" cy="30" r="30" />
            </svg>
            <img src="https://i.pinimg.com/originals/f2/d1/f9/f2d1f900f688ddca0765ec8e2d3900e1.png" />
            <div class="col-xs-12">
              <p className="banner-text">{bannerDisplay()}</p>
              <a
                target="_blank"
                href="https://www.silocreativo.com/en/showcase/"
                class="more-link"
              >
                Get started
              </a>
            </div>
          </div>
        </aside>
      </div>

      <nav>
        <p>Welcome {displayName}!</p>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  );
};

export default Home;
