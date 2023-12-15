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
  import { useState, useEffect } from "react";

  import Menu from "../../menu";
  import Navbar from "../../navbar";
  import "./AdminDashboardViews.css";
import MenuAdmin from "../../menuAdmin";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../../../firebase/firebase";

const AdminDashboardViews: React.FC = () => {
  const [userData, setUserData] = useState({
    nama: "",
    jumlahPengguna: 0,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = sessionStorage.getItem("user_id")
        if (user) {
          const userDocRef = doc(firestore, "users", user);
          const userDocSnap = await getDoc(userDocRef);
          const userColRef = collection(firestore, "users");
          const userColSnap = await getDocs(userColRef);
          const count = userColSnap.size;

          if (userDocSnap.exists()) {
            const userDataFromFirestore = userDocSnap.data();
            setUserData({
              nama: userDataFromFirestore.nama || "User",
              jumlahPengguna: count || 0,
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
      icon: personOutline,
      description: "Jumlah user dan admin",
      number: `${userData.jumlahPengguna}`,
    },
  ];


return (
    <>
      <Navbar />
      <IonSplitPane className="split-pane" when="md" contentId="main">
        <MenuAdmin />
        <div className="ion-page" id="main">
          <IonContent className="dashboard ion-padding">
            <h1>Dashboard</h1>
            <h6>Hi, {userData.nama}</h6>
            <IonGrid>
              <IonRow className="ion-row-dashboard">
                {cardList.map((card, index) => (
                  <IonCol key={index} size="2.8">
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
                    Admin dapat melakukan penambahan akun pada menu Create-user{" "}
                  </li>
                  <li>
                    Admin dapat melakukan Reset Password terhadap akun user apabila pengguna
                    telah melakukan persetujuan di email yang terkait.
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

export default AdminDashboardViews;
