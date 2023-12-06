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
import { firestore } from "../../../firebase/firebase";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

import Menu from "../../menu";
import Navbar from "../../navbar";
import "./DashboardViews.css";
import Cookies from "js-cookie";

const DashboardViews: React.FC = () => {
  const [userData, setUserData] = useState({
    nama: "",
    jumlahSKS: 0,
    jumlahPelajar: 0,
    jumlahMatkul: 0,
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
              jumlahSKS: userDataFromFirestore.jumlahSKS || 0,
              jumlahPelajar: userDataFromFirestore.jumlahPelajar || 0,
              jumlahMatkul: userDataFromFirestore.jumlahMatkul || 0,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const cardList = [
    {
      icon: schoolOutline,
      description: "Jumlah SKS yang diampuh",
      number: `${userData.jumlahSKS}`,
    },
    {
      icon: personOutline,
      description: "Jumlah mahasiswa yang diajar",
      number: `${userData.jumlahPelajar}`,
    },
    {
      icon: bookOutline,
      description: "Jumlah mata kuliah yang diambil",
      number: `${userData.jumlahMatkul}`,
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
            <h6>Hi, {userData.nama}</h6>
            <IonGrid>
              <IonRow className="ion-row-dashboard">
                {cardList.map((card, index) => (
                  <IonCol key={index}>
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
