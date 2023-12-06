import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonModal,
  IonText,
  IonTitle,
} from "@ionic/react";
import ExploreContainer from "../ExploreContainer";
import "./Menu.css";
import {
  homeOutline,
  helpCircleOutline,
  personOutline,
  libraryOutline,
  logOutOutline,
} from "ionicons/icons";
import { useHistory, useLocation } from "react-router";
import { menuController } from "@ionic/core/components";
import { useRef, useState } from "react";
import Cookies from "js-cookie";

const appMenus = [
  {
    title: "Dashboard",
    url: "/dashboard",
    iosIcon: homeOutline,
    // mdIcon: homeSharp
  },
  {
    title: 'Account',
    url: '/profile',
    iosIcon: personOutline,
    // mdIcon: paperPlaneSharp
  },
  {
    title: "Perkuliahan",
    url: "/perkuliahan",
    iosIcon: libraryOutline,
    // mdIcon: heartSharp
  },
  {
    title: "About",
    url: "/about",
    iosIcon: helpCircleOutline,
    // mdIcon: archiveSharp
  },
  {
    title: "Log-out",
    url: "/login",
    iosIcon: logOutOutline,
    // mdIcon: trashSharp
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [isLogOpen, setIsLogOpen] = useState(false);

  const modal = useRef<HTMLIonModalElement>(null);

  const logOutHandle = () => {
    Cookies.remove('authToken');
    history.push('/login');
  }

  function dismiss() {
    modal.current?.dismiss();
  }

  async function openPageMenu(url: string) {
    await menuController.close(); // Close the menu
    history.push(url);
  }

  return (
    <IonMenu className="main-menu" contentId="main">
      <IonModal
        className="logout-modal"
        isOpen={isLogOpen}
        onDidDismiss={() => setIsLogOpen(false)}
      >
        <IonContent className="logout-modal-content">
          <IonText className="save-modal-text ion-margin-bottom">
            <h1>Apa kamu yakin untuk keluar dari akun?</h1>
          </IonText>
          <div className="save-modal-button ion-margin-top">
            <IonButton color="danger" onClick={() => setIsLogOpen(false)}>
              Tidak
            </IonButton>
            <IonButton onClick={logOutHandle} >Ya</IonButton>
          </div>
        </IonContent>
      </IonModal>
      <IonContent className="main-menu__content">
        <IonTitle className="ion-padding main-menu__title">MENU UTAMA</IonTitle>
        <IonList className="main-menu__list">
          {appMenus.map((appMenu, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                {appMenu.title !== "Log-out" ? (
                  <IonItem
                    className={
                      location.pathname.startsWith(appMenu.url)
                        ? "main-menu__list__selected"
                        : "main-menu__list__not-selected"
                    }
                    onClick={() => openPageMenu(appMenu.url)}
                  >
                    <IonIcon
                      className="main-menu__list__icon"
                      slot="start"
                      ios={appMenu.iosIcon}
                    />
                    <IonLabel>{appMenu.title}</IonLabel>
                  </IonItem>
                ) : (
                  <IonItem
                    className="main-menu__list__not-selected"
                    onClick={() => setIsLogOpen(true)}
                  >
                    <IonIcon
                      id="open-custom-dialog"
                      className="main-menu__list__icon"
                      slot="start"
                      ios={appMenu.iosIcon}
                    />
                    <IonLabel id="open-custom-dialog">{appMenu.title}</IonLabel>
                  </IonItem>
                )}
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
