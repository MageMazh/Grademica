import {
  IonContent,
  IonIcon,
  IonSplitPane,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";
import { bookOutline, personOutline, schoolOutline } from "ionicons/icons";

import Menu from "../../menu";
import Navbar from "../../navbar";
import "./DashboardViews.css";

const DashboardViews: React.FC = () => {
  const cardList = [
    {
      icon: schoolOutline,
      description: "Jumlah SKS yang diampuh",
      number: "14",
    },
    {
      icon: personOutline,
      description: "Jumlah mahasiswa yang diajar",
      number: "190",
    },
    {
      icon: bookOutline,
      description: "Jumlah mata kuliah yang diambil",
      number: "6",
    },
  ];

  return (
    <>
      <Navbar />
      <IonSplitPane className="split-pane" when="md" contentId="main">
        <Menu />
        <div className="ion-page" id="main">
          <IonContent className="dashboard ion-padding">
            <h1>Dashboard</h1>
            <h6>Hi, username</h6>
            <IonGrid>
              <IonRow className="ion-row-dashboard">
                {cardList.map((card, index) => (
                  <IonCol>
                    <IonCard className="dashboard-card dashboard-card-responsive">
                      <div className="dashboard-card__background-icon">
                        <IonIcon
                          className="dashboard-card__icon"
                          icon={card.icon}
                        ></IonIcon>
                      </div>
                      <IonCardContent className="dashboard-card__description">
                        {card.description}
                      </IonCardContent>
                      <IonCardContent className="dashboard-card__number">
                        {card.number}
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>

            <IonCard className="dashboard-card">
              <IonCardTitle className="dashboard-card__information">
                Informasi
              </IonCardTitle>
              <IonCardContent>
                <ol className="dashboard-card__list-information">
                  <li>
                    Dikarenakan sistem informasi ini masih dalam proses
                    pengembangan maka kami memohon maaf jika terdapat kekurangan
                    yang menyebabkan kekurangan nyaman anda.{" "}
                  </li>
                  <li>
                    Diharapkan dapat menginput nilai seluruh mata kuliah sebelum
                    batas penginputan nilai.
                  </li>
                </ol>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </div>
      </IonSplitPane>
    </>
  );
};

export default DashboardViews;
