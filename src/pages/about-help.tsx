import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from "@ionic/react";
import "./about-help.css";
import Navbar from "../components/navbar";

const HelpSupport: React.FC = () => {
  return (
    <IonPage>
      <Navbar />
      <IonContent>
        <IonRow style={{ padding: "0px 43px" }}>
          <IonCardTitle>
            <IonText>
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "48px",
                  textAlign: "center",
                }}
              >
                About & Help
              </h1>
            </IonText>
          </IonCardTitle>
        </IonRow>
        <IonGrid style={{ padding: "30px" }}>
          <IonRow>
            <IonCol class="card-content">
              <IonCard style={{ padding: "22px", backgroundColor: "white" }}>
                <IonCardContent
                  class="card-content"
                  style={{ paddingLeft: "22px", paddingRight: "22px" }}
                >
                  <div>
                    <h3 style={{ fontWeight: "bold", fontSize: "20px" }}>
                      Visi
                    </h3>
                    <p
                      style={{
                        fontSize: "20px",
                        marginTop: "-5px",
                      }}
                    >
                      Grademica adalah platform yang dirancang khusus untuk
                      memudahkan dosen dalam proses penginputan nilai mahasiswa.
                      Kami berkomitmen untuk menyediakan alat yang sederhana,
                      andal, dan efisien untuk membantu Anda dalam tugas-tugas
                      akademik.
                    </p>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: "bold", fontSize: "20px" }}>
                      Misi
                    </h3>
                    <p
                      style={{
                        fontSize: "20px",
                        marginTop: "-5px",
                      }}
                    >
                      Misi kami adalah menyediakan alat yang mendukung
                      pendidikan dan mempermudah proses administrasi akademik
                      dosen. Kami berupaya untuk membuat penginputan nilai
                      semudah mungkin, sehingga Anda dapat fokus pada hal-hal
                      yang lebih penting dalam pengajaran dan pembimbingan
                      mahasiswa.
                    </p>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard style={{ padding: "22px", backgroundColor: "white" }}>
                <IonCardContent
                  class="card-content"
                  style={{ paddingLeft: "22px", paddingRight: "22px" }}
                >
                  <div>
                    <h3 style={{ fontWeight: "bold", fontSize: "20px" }}>
                      FAQ:
                    </h3>
                    <p
                      style={{
                        fontSize: "20px",
                        marginTop: "-5px",
                      }}
                    >
                      FAQ (Pertanyaan yang Sering Diajukan):
                      <ul>
                        <li>Bagaimana cara mengatasi masalah masuk?</li>
                        <li>Bagaimana jika saya lupa kata sandi saya?</li>
                        <li>
                          Apakah saya dapat mengubah data nilai setelah
                          mengirimkannya?
                        </li>
                      </ul>
                    </p>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard
                style={{
                  padding: "22px",
                  marginTop: "30px",
                  backgroundColor: "white",
                }}
              >
                <IonCardContent
                  class="card-content"
                  style={{ paddingLeft: "22px", paddingRight: "22px" }}
                >
                  <div>
                    <h3 style={{ fontWeight: "bold", fontSize: "20px" }}>
                      Panduan
                    </h3>
                    <div
                      style={{
                        fontSize: "20px",
                        backgroundColor: "#44A5FF",
                        color: "white",
                        fontWeight: "bold",
                        padding: "10px",
                        marginTop: "20px",
                        textDecoration: "none",
                        width: "100%",
                        cursor: "pointer",
                      }}
                    >
                      Download panduan pengguna
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HelpSupport;
