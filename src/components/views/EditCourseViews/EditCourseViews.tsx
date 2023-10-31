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
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";

import Menu from "../../menu";
import Navbar from "../../navbar";
import "./EditCourseViews.css";
import FormCourse from "../../formCourse";

const EditCourseViews: React.FC = () => {
  return (
    <>
      <Navbar />
      <IonSplitPane className="split-pane" when="xs" contentId="main">
        <Menu />
        <div className="ion-page" id="main">
          <IonContent className="edit-course ion-padding">
            <div className="edit-course__title">
              <IonRouterLink routerLink="/perkuliahan">
                <IonIcon
                  className="edit-course__icon"
                  icon={chevronBackOutline}
                />
              </IonRouterLink>
              <h1>Edit Mata Kuliah</h1>
            </div>
            <FormCourse />
          </IonContent>
        </div>
      </IonSplitPane>
    </>
  );
};

export default EditCourseViews;
