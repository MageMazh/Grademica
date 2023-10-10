// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonPage, IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../ExploreContainer';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <>
       <IonSplitPane when="xs" contentId="main">
            <IonMenu contentId="main">
                <IonContent className="ion-padding">MENU UTAMA</IonContent>
            </IonMenu>

            <div className="ion-page" id="main">
                <IonContent className="ion-padding"></IonContent>
            </div>
        </IonSplitPane>
    </>
  );
};

export default Menu;
