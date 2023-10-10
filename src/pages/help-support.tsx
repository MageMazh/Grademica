import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from "@ionic/react";
import "./help-support.css";

const HelpSupport: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Help and Support</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content">
        <IonGrid>
          <IonRow>
            <IonCard className="card-1-column">
              <IonCardHeader>
                <IonCardTitle>
                  {" "}
                  <IonText color="primary">
                    <h1
                      style={{
                        fontWeight: "bold",
                        fontSize: "48px",
                        textAlign: "center",
                      }}
                    >
                      Expert support when you need it
                    </h1>
                  </IonText>
                </IonCardTitle>
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "-5px",
                    textAlign: "center",
                  }}
                >
                  From enterprise teams needing critical support to developers
                  looking for help from the community, <br /> we have support
                  options for you
                </p>
              </IonCardHeader>
            </IonCard>
          </IonRow>
          <IonRow>
            <IonCard className="card-2-column">
              <IonCardHeader>
                <IonCardTitle>
                  <IonText color="primary">
                    <h1
                      style={{
                        fontWeight: "bold",
                        fontSize: "32px",
                        textAlign: "center",
                      }}
                    >
                      Community help
                    </h1>
                  </IonText>
                </IonCardTitle>
                <p
                  style={{
                    fontSize: "18px",
                    marginTop: "-5px",
                    textAlign: "center",
                  }}
                >
                  For developers using Sistem Informasi community open source
                  projects and not on an Enterprise subscription, there are many
                  ways to get help from the community
                </p>
              </IonCardHeader>
            </IonCard>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <div style={{ height: "250px", overflow: "hidden" }}>
                  <img
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    alt="Silhouette of mountains"
                    src="https://i.pinimg.com/564x/a8/32/01/a832011f912c2b61e5639dc576856ae8.jpg"
                  />
                </div>
                <IonCardHeader>
                  <a href="#">
                    <IonCardTitle>Community Forum</IonCardTitle>
                    <IonCardSubtitle>
                      The Forum is the best place to connect
                    </IonCardSubtitle>
                  </a>
                </IonCardHeader>

                <IonCardContent>
                  The Forum is the best place to connect with other Sistem
                  Informasi developers, ask questions, or even help out others.
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <div style={{ height: "250px", overflow: "hidden" }}>
                  <img
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    alt="Silhouette of mountains"
                    src="https://cdn.sstatic.net/Img/home/illo-teams.svg?v=7e543f14fcc0"
                  />
                </div>
                <IonCardHeader>
                  <a href="#" style={{ listStyle: "none" }}>
                    <IonCardTitle>World-wide Discord</IonCardTitle>
                    <IonCardSubtitle>World-wide Discord Chat</IonCardSubtitle>
                  </a>
                </IonCardHeader>

                <IonCardContent>
                  World-wide Discord Chat in our Discord channel with other
                  Ionic community members, and occasionally some Ionic core team
                  members.
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <div style={{ height: "250px", overflow: "hidden" }}>
                  <img
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    alt="Silhouette of mountains"
                    src="https://cdn.sstatic.net/Img/home/illo-public.svg?v=14bd5a506009"
                  />
                </div>
                <IonCardHeader>
                  <a href="#">
                    <IonCardTitle> StackOverflow</IonCardTitle>
                    <IonCardSubtitle>
                      StackOverflow For crowdsourced technical questions
                    </IonCardSubtitle>
                  </a>
                </IonCardHeader>

                <IonCardContent>
                  StackOverflow For crowdsourced technical questions from expert
                  Ionic devs in our community. Also frequented by the Ionic core
                  team.
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="sosial-media">
            <div className="icon-sosial">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"
                  fill="#3880ff"
                ></path>
              </svg>
              <span>Twitter</span>
            </div>
            <div className="icon-sosial">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"
                  fill="#3880ff"
                ></path>
              </svg>
              <span>Youtube</span>
            </div>
            <div className="icon-sosial">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"
                  fill="#3880ff"
                ></path>
              </svg>
              <span>Facebook</span>
            </div>
            <div className="icon-sosial">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M13.0281 2.00098C14.1535 2.00284 14.7238 2.00879 15.2166 2.02346L15.4107 2.02981C15.6349 2.03778 15.8561 2.04778 16.1228 2.06028C17.1869 2.10944 17.9128 2.27778 18.5503 2.52528C19.2094 2.77944 19.7661 3.12278 20.3219 3.67861C20.8769 4.23444 21.2203 4.79278 21.4753 5.45028C21.7219 6.08694 21.8903 6.81361 21.9403 7.87778C21.9522 8.14444 21.9618 8.36564 21.9697 8.58989L21.976 8.78397C21.9906 9.27672 21.9973 9.8471 21.9994 10.9725L22.0002 11.7182C22.0003 11.8093 22.0003 11.9033 22.0003 12.0003L22.0002 12.2824L21.9996 13.0281C21.9977 14.1535 21.9918 14.7238 21.9771 15.2166L21.9707 15.4107C21.9628 15.6349 21.9528 15.8561 21.9403 16.1228C21.8911 17.1869 21.7219 17.9128 21.4753 18.5503C21.2211 19.2094 20.8769 19.7661 20.3219 20.3219C19.7661 20.8769 19.2069 21.2203 18.5503 21.4753C17.9128 21.7219 17.1869 21.8903 16.1228 21.9403C15.8561 21.9522 15.6349 21.9618 15.4107 21.9697L15.2166 21.976C14.7238 21.9906 14.1535 21.9973 13.0281 21.9994L12.2824 22.0002C12.1913 22.0003 12.0973 22.0003 12.0003 22.0003L11.7182 22.0002L10.9725 21.9996C9.8471 21.9977 9.27672 21.9918 8.78397 21.9771L8.58989 21.9707C8.36564 21.9628 8.14444 21.9528 7.87778 21.9403C6.81361 21.8911 6.08861 21.7219 5.45028 21.4753C4.79194 21.2211 4.23444 20.8769 3.67861 20.3219C3.12278 19.7661 2.78028 19.2069 2.52528 18.5503C2.27778 17.9128 2.11028 17.1869 2.06028 16.1228C2.0484 15.8561 2.03871 15.6349 2.03086 15.4107L2.02457 15.2166C2.00994 14.7238 2.00327 14.1535 2.00111 13.0281L2.00098 10.9725C2.00284 9.8471 2.00879 9.27672 2.02346 8.78397L2.02981 8.58989C2.03778 8.36564 2.04778 8.14444 2.06028 7.87778C2.10944 6.81278 2.27778 6.08778 2.52528 5.45028C2.77944 4.79194 3.12278 4.23444 3.67861 3.67861C4.23444 3.12278 4.79278 2.78028 5.45028 2.52528C6.08778 2.27778 6.81278 2.11028 7.87778 2.06028C8.14444 2.0484 8.36564 2.03871 8.58989 2.03086L8.78397 2.02457C9.27672 2.00994 9.8471 2.00327 10.9725 2.00111L13.0281 2.00098ZM12.0003 7.00028C9.23738 7.00028 7.00028 9.23981 7.00028 12.0003C7.00028 14.7632 9.23981 17.0003 12.0003 17.0003C14.7632 17.0003 17.0003 14.7607 17.0003 12.0003C17.0003 9.23738 14.7607 7.00028 12.0003 7.00028ZM12.0003 9.00028C13.6572 9.00028 15.0003 10.3429 15.0003 12.0003C15.0003 13.6572 13.6576 15.0003 12.0003 15.0003C10.3434 15.0003 9.00028 13.6576 9.00028 12.0003C9.00028 10.3434 10.3429 9.00028 12.0003 9.00028ZM17.2503 5.50028C16.561 5.50028 16.0003 6.06018 16.0003 6.74943C16.0003 7.43867 16.5602 7.99944 17.2503 7.99944C17.9395 7.99944 18.5003 7.43954 18.5003 6.74943C18.5003 6.06018 17.9386 5.49941 17.2503 5.50028Z"
                  fill="#3880ff"
                ></path>
              </svg>
              <span>Instagram</span>
            </div>
            <div className="icon-sosial">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z"
                  fill="#3880ff"
                ></path>
              </svg>
              <span>Tiktok</span>
            </div>
            <div className="icon-sosial">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"
                  fill="#3880ff"
                ></path>
              </svg>
              <span>E-Mail</span>
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HelpSupport;
