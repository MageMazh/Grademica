import {
  IonContent,
  IonIcon,
  IonSplitPane,
  IonRouterLink,
  IonItem,
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
      <IonSplitPane className="split-pane" when="md" contentId="main">
        <Menu />
        <div className="ion-page" id="main">
          <IonContent className="dashboard ion-padding">
            <IonItem className="add-course__title">
              <IonRouterLink routerLink="/perkuliahan">
                <IonIcon
                  className="add-course__icon"
                  icon={chevronBackOutline}
                />
              </IonRouterLink>
              <h1>Tambah Mata Kuliah</h1>
            </IonItem>
            <FormCourse
              handle="add"
              id={""}
              name={""}
              code={""}
              sarjana={""}
              semester={""}
              sks={""}
              percent_kehadiran={0}
              percent_keaktifan={0}
              percent_uts={0}
              percent_tugas={0}
              percent_uas={0}
            />
          </IonContent>
        </div>
      </IonSplitPane>
    </>
  );
};

export default AddCourseViews;
