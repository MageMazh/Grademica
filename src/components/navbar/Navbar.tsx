import {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonAvatar,
    IonLabel,
  } from "@ionic/react";

import ExploreContainer from "../ExploreContainer";

function Navbar() {
  return (
    <IonHeader>
    <IonToolbar>
      <IonTitle>
        Judul
      </IonTitle>
      <IonItem slot="end">
        <IonLabel className="ion-margin-end">
          username
        </IonLabel>
      <IonAvatar>
          <img
            alt="A person's head"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
          />
        </IonAvatar>
      </IonItem>
    </IonToolbar>
    </IonHeader>
  )
}

export default Navbar