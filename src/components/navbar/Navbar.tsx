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
import { menuOutline } from "ionicons/icons";
import Menu from "../menu";

function Navbar() {
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
            <IonLabel>username</IonLabel>
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
