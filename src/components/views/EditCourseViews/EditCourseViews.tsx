import {
  IonContent,
  IonIcon,
  IonSplitPane,
  IonRouterLink,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";

import Menu from "../../menu";
import Navbar from "../../navbar";
import "./EditCourseViews.css";
import FormCourse from "../../formCourse";
import { useParams } from "react-router";
import { dataCourse } from "../../../mockData/CourseData";

const EditCourseViews: React.FC = () => {
  const { courseCode }: { courseCode: string } = useParams();
  
  const selectedCourse = dataCourse.find(course => {
    return course.code === courseCode;
  });
  
  if (!courseCode || !selectedCourse) {
    return null;
  }

  const { name, code, sks, semester, level , percent_kehadiran, percent_keaktifan, percent_uts, percent_tugas, percent_uas} = selectedCourse;
  
  return (
    <>
      <Navbar />
      <IonSplitPane className="split-pane" when="md" contentId="main">
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
            <FormCourse name={name} code={code} level={level} semester={semester} sks={sks} percent_kehadiran={percent_kehadiran} percent_keaktifan={percent_keaktifan} percent_uts={percent_uas} percent_tugas={percent_tugas} percent_uas={percent_uas}/>
          </IonContent>
        </div>
      </IonSplitPane>
    </>
  );
};

export default EditCourseViews;
