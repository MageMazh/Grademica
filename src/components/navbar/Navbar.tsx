import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonAvatar,
  IonLabel,
  IonImg,
  IonMenuButton,
  IonButtons,
} from "@ionic/react";

import "./Navbar.css";
import logounhas from "../../assets/images/Logo_UH.webp";
import Menu from "../menu";
import { firestore } from "../../firebase/firebase";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import Cookies from "js-cookie";

function Navbar() {
  const [userData, setUserData] = useState({
    nama: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = Cookies.get('authToken')
        if (user) {
          const userDocRef = doc(firestore, "users", user);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userDataFromFirestore = userDocSnap.data();
            setUserData({
              nama: userDataFromFirestore.nama || "User",
            });
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Menu />
      <IonHeader className="header-navbar">
        <div className="header-navbar__left">
          <IonButtons slot="start">
            <IonMenuButton
              className="ion-hide-md-up header-navbar__hamburger"
              autoHide={false}
            ></IonMenuButton>
          </IonButtons>
          <IonImg className="header-navbar__logo" src={logounhas}></IonImg>
          <IonToolbar className="header-navbar__title">
            <IonTitle>Grademica</IonTitle>
            <IonTitle>UNIVERSITAS HASANUDDIN</IonTitle>
          </IonToolbar>
        </div>
        <div>
          <IonItem className="header-navbar__account">
            <IonLabel>{userData.nama}</IonLabel>
            <IonAvatar className="header-navbar__account__profile">
              <img
                alt="A person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
          </IonItem>
        </div>
      </IonHeader>
    </>
  );
}

export default Navbar;
