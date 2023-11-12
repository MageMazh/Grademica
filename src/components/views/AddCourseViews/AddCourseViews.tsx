import {
  IonContent,
  IonIcon,
  IonSplitPane,
  IonRouterLink,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonItem,
  IonInput,
  IonList,
  IonGrid,
  IonCol,
  IonRow,
  IonLabel,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";

import Menu from "../../menu";
import Navbar from "../../navbar";
import "./AddCourseViews.css";
import FormCourse from "../../formCourse";

const AddCourseViews: React.FC = () => {
  return (
    <>
      <Navbar />
      <IonSplitPane className="split-pane" when="xs" contentId="main">
        <Menu />
        <div className="ion-page" id="main">
          <IonContent className="add-course ion-padding">
            <IonItem className="add-course__title">
              <IonRouterLink routerLink="/perkuliahan">
                <IonIcon className="add-course__icon" icon={chevronBackOutline} />
              </IonRouterLink>
                <h1>Tambah Mata Kuliah</h1>
            </IonItem>
            <FormCourse />
          </IonContent>
        </div>
      </IonSplitPane>
    </>
  );
};

export default AddCourseViews;
