import {
  IonContent,
  IonMenu,
} from "@ionic/react";
import ExploreContainer from "../ExploreContainer";
import "./Menu.css";

const Menu: React.FC = () => {
  return (
    <IonMenu className="split-pane__menu" contentId="main">
      <IonContent className="ion-padding">MENU UTAMA</IonContent>
    </IonMenu>
  );
};

export default Menu;
