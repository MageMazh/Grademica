import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
} from "@ionic/react";
import ExploreContainer from "../ExploreContainer";
import "./Menu.css";
import { homeOutline, helpCircleOutline, personOutline, libraryOutline, logOutOutline } from "ionicons/icons";
import { useLocation } from "react-router";

const appMenus = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    iosIcon: homeOutline,
    // mdIcon: homeSharp
  },
  {
    title: 'Profile',
    url: '/profile',
    iosIcon: personOutline,
    // mdIcon: paperPlaneSharp
  },
  {
    title: 'Perkuliahan',
    url: '/perkuliahan',
    iosIcon: libraryOutline,
    // mdIcon: heartSharp
  },
  {
    title: 'About',
    url: '/about',
    iosIcon: helpCircleOutline,
    // mdIcon: archiveSharp
  },
  {
    title: 'Log-out',
    url: '/login',
    iosIcon: logOutOutline,
    // mdIcon: trashSharp
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu className="main-menu" contentId="main">
      <IonContent className="main-menu__content">
        <IonTitle className="ion-padding main-menu__title">
        MENU UTAMA  
        </IonTitle>
      <IonList className="main-menu__list">
        {appMenus.map((appMenu, index) =>  {
          return(
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem className={location.pathname.startsWith(appMenu.url) ? 'main-menu__list__selected' : 'main-menu__list__not-selected'} routerLink={appMenu.url}>
                <IonIcon className="main-menu__list__icon" slot="start" ios={appMenu.iosIcon}/>
                <IonLabel>{appMenu.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}
      </IonList>
        </IonContent>
    </IonMenu>
  );
};

export default Menu;
