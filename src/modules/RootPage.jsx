import { styled } from "styled-components";
import CatniCard from "../common/CatniCard";
import ImmuniceCard from "../common/ImmuniceCard";
import AlphaAceCard from "../common/AlphaAceCard";
import DorothyCard from "../common/DorothyCard";
import cert from "../assets/unityuser.jfif";
import me from "../assets/me.jpg";
import linkedin from "../assets/linkedin-color.png";
import AnimationCard from "../common/AnimationCard";

function RootPage(){

  function gotoLinkedin(){
    window.location.href = "https://www.linkedin.com/in/pherawatwong/";
  }

  function gotoCertiport(){
    window.location.href = "https://verify.certiport.com/";
  }

  function gotoLikeME(){
    window.location.href = "https://youtu.be/ePd7x8mdO-0";
  }

  return (
    <PageLayout>
      <div className="profile">
        <a href="https://www.linkedin.com/in/pherawatwong/"><img src={me} className="profile--pic" onClick={gotoLinkedin}/></a>
        <div className="profile--name">Pherawat Wongsawad</div>
      </div>
      <div className="a-box">
        <div className="award-title">Awards</div>
        <div className="award">
          <CatniCard/>
          <ImmuniceCard/>
          <AlphaAceCard/>
          <DorothyCard/>
          <AnimationCard/>
        </div>
      </div>
      <div className="work">
        <div className="work--title">
          Experiences
        </div>
        <div onClick={gotoLikeME} className="likeme">
          <div className="work--role">Unity VR Developer Internship</div>
          <div className="work--date">28 March to 27 May 2022</div>
          <iframe width="960" height="540"
            src="https://www.youtube.com/embed/ePd7x8mdO-0?si=l1cyI3k4ZPykmjNp">
          </iframe>
        </div>
      </div>
      <div className="cert">
        <div className="cert--title">Unity Certified User: Programmer</div>
        <img src={cert} className="cert--pic"/>
        <div className="cert--id" onClick={gotoCertiport}><a href="https://verify.certiport.com/">Credential ID: 4xqU-XMS8</a></div>
      </div>
      <div className="contact">
        <div className="contact--title">Contact</div>
        <div className="contact--url">
          <div className="contact--email">Email: pooh_phe_wong@outlook.com</div>
          <a href="https://www.linkedin.com/in/pherawatwong/"><img src={linkedin} className="contact--icon" onClick={gotoLinkedin}/></a>
        </div>
      </div>
    </PageLayout>
  )
}

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .profile {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2em 0;
    gap: 1em;

    &--name {
      font-size: 6em;
      font-weight: 800;
      color: black;
    }

    &--pic {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
      cursor: pointer;
    }

    &--pic:hover {
      box-shadow: 1px 1px 2px blue, 0 0 25px blue, 0 0 5px blue;
    }
  }

  .a-box {
    width: 100%;
    background-color: #dfdfdf;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .award-title {
    font-size: 3em;
    font-weight: 700;
    text-align: center;
    margin-top: 1em;
  }

  .award {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 2em 1em;
    padding-bottom: 2em;

  }
  .contact {
    display:  flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 100%;
    padding: 1em 0;
    align-items: center;
    gap: 1em;

    &--title {
      text-align: center;
      font-size: 3em;
      font-weight: 600;
    }

    &--url {
      display: flex;
      justify-content: center;
      gap: 1em;
      align-items: center;
    }

    &--icon {
      width: 50px;
      height: 50px;
      object-fit: cover;
      cursor: pointer;
    }

    &--email {
      font-size: 1.25em;
    }
  }

  .work {
    padding: 0.75em 0;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &--title {
      font-weight: 700;
      font-size: 3em;
    }

    .likeme {
      margin: 0.25em 0;
      display: flex;
      flex-direction: column;
    }

    &--role {
      font-size: 1.5em;
      font-weight: 600;
    }

    &--date {
      
    }
  }

  .cert {
    width: 100%;
    background-color: #dfdfdf;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    padding: 1em 0;

    &--title {
      font-size: 3em;
      font-weight: 600;
      text-align: center;
    }
    &--pic {
      width: 750px;
    }
    &--id {
      a {
        color: black;
        text-decoration: none;
      }
    }
  }
`;

export default RootPage;