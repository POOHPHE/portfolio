import { styled } from "styled-components";
import CatniCard from "../common/CatniCard";
import ImmuniceCard from "../common/ImmuniceCard";
import AlphaAceCard from "../common/AlphaAceCard";
import DorothyCard from "../common/DorothyCard";
import cert from "../assets/unityuser.jfif";
import me from "../assets/me.jpg";
import linkedin from "../assets/linkedin-icon.png";

function RootPage(){

  function gotoLinkedin(){
    window.location.href = "https://www.linkedin.com/in/pherawatwong/";
  }

  function gotoCertiport(){
    window.location.href = "https://verify.certiport.com/";
  }

  return (
    <PageLayout>
      <div className="profile">
        <img src={me} className="profile--pic"/>
        <div className="profile--name">Pherawat Wongsawad</div>
      </div>
      <div className="award-title">Awards</div>
      <div className="award">
        <CatniCard/>
        <ImmuniceCard/>
        <AlphaAceCard/>
        <DorothyCard/>
      </div>
      <div className="cert">
        <div className="cert--title">Unity Certified User: Programmer</div>
        <img src={cert} className="cert--pic"/>
        <div className="cert--id" onClick={gotoCertiport}>Credential ID: 4xqU-XMS8</div>
      </div>
      <div className="contact">
        <div className="contact--title">Contact</div>
        <div className="contact--url">
          <div className="contact--email">Email: pooh_phe_wong@outlook.com</div>
          <img src={linkedin} className="contact--icon" onClick={gotoLinkedin}/>
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
    background-color: #1620a6;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2em 0;
    gap: 1em;

    &--name {
      font-size: 6em;
      font-weight: 700;
      color: white;
    }

    &--pic {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .award-title {
    font-size: 3em;
    font-weight: 600;
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
    background-color: #1620a6;
    width: 100%;
    padding: 1em 0;
    align-items: center;
    gap: 1em;

    &--title {
      text-align: center;
      font-size: 3em;
      font-weight: 600;
      color: white;
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
      color: white;
      font-size: 1.25em;
    }
  }
  .cert {
    width: 100%;
    background-color: #ff7b7c;
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
      cursor: pointer;
    }
  }
`;

export default RootPage;