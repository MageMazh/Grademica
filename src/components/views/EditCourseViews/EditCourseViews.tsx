import { IonContent, IonIcon, IonSplitPane, IonRouterLink, IonLoading } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";

import Menu from "../../menu";
import Navbar from "../../navbar";
import "./EditCourseViews.css";
import FormCourse from "../../formCourse";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { firestore } from "../../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Cookies from "js-cookie";

const EditCourseViews: React.FC = () => {
  const { id }: { id: string } = useParams();
  const [courseData, setCourseData] = useState<any>({
    name: "",
    code: "",
    sks: "",
    semester: "",
    sarjana: "",
    percent_kehadiran: 0,
    percent_keaktifan: 0,
    percent_uts: 0,
    percent_tugas: 0,
    percent_uas: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = sessionStorage.getItem("user_id")

        if (user) {
          const userDocRef = doc(
            firestore,
            "users",
            user,
            "Mata Kuliah",
            id
          );
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const data = userDocSnap.data();

            setCourseData({
              name: data.name || "",
              code: data.code || "",
              sks: data.sks || "",
              semester: data.semester || "",
              sarjana: data.sarjana || "",
              percent_kehadiran: data.percent_kehadiran || 0,
              percent_keaktifan: data.percent_keaktifan || 0,
              percent_uts: data.percent_uts || 0,
              percent_tugas: data.percent_tugas || 0,
              percent_uas: data.percent_uas || 0,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!courseData.name) {
    return (
      <>
        <Navbar />
        <IonSplitPane className="split-pane" when="md" contentId="main">
          <Menu />
          <div className="ion-page" id="main">
          <IonLoading isOpen={!courseData.name} message="Loading..." duration={0} />            
          </div>
        </IonSplitPane>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <IonSplitPane className="split-pane" when="md" contentId="main">
        <Menu />
        <div className="ion-page" id="main">
          <IonContent className="dashboard ion-padding">
            <div className="edit-course__title">
              <IonRouterLink routerLink="/perkuliahan">
                <IonIcon
                  className="edit-course__icon"
                  icon={chevronBackOutline}
                />
              </IonRouterLink>
              <h1>Edit Mata Kuliah</h1>
            </div>
            <FormCourse
              handle="edit"
              id={id}
              name={courseData.name}
              code={courseData.code}
              sarjana={courseData.sarjana}
              semester={courseData.semester}
              sks={courseData.sks}
              percent_kehadiran={courseData.percent_kehadiran}
              percent_keaktifan={courseData.percent_keaktifan}
              percent_uts={courseData.percent_uas}
              percent_tugas={courseData.percent_tugas}
              percent_uas={courseData.percent_uas}
            />
          </IonContent>
        </div>
      </IonSplitPane>
    </>
  );
};

export default EditCourseViews;
