import styled from "styled-components";
import imgs from "../assets/catni_gts.png"

function CatniCard(){

  function OnClick(){
    window.location.href = "https://poohphe.itch.io/catni";
  }

  return (
    <AwardContent onClick={OnClick} href="https://poohphe.itch.io/catni">
      <div className="bg">
        <img src={imgs}  className="pic"/>
        <div className="title">
          Catni
        </div>
        <div className="tag">
          <div className="tag--sub best">
            Best of NSC 2023
          </div>
          <div className="tag--sub second">
            Finalists of Game Talent Showcase 2023
          </div>
        </div>
      </div>
    </AwardContent>
  );
}

const AwardContent = styled.a`
  width: fit-content;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  color: black;
  text-decoration: none;
  .bg {
    padding: 0.25em;
  }

  .bg:hover {
    background-color: #ff3939;
  }
  .title {
    font-size: 2em;
    font-weight: 700;
    text-align: center;
  }

  .pic {
    width: 375px;
    height: 375px;
    object-fit: cover;
    border-radius: 10px;
  }

  .tag {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    .tag--sub {
      padding: 0.25em 1em;
      border-radius: 4px;
      font-weight: 600;
      width: fit-content;
    }

    .best {
      background-color: #FFD700;
      
    }

    .second {
      background-color: #9FE2BF;
    }
  }
`

export default CatniCard;