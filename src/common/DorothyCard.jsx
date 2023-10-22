import styled from "styled-components";
import imgs from "../assets/dorothy.png"

function DorothyCard(){

  function OnClick(){
    window.location.href = "https://poohphe.itch.io/dorothy-nsc-2019";
  }

  return (
    <AwardContent onClick={OnClick} href="https://poohphe.itch.io/dorothy-nsc-2019">
      <div className="bg">

        <img src={imgs}  className="pic"/>
        <div className="title">
          Dorothy
        </div>
        <div className="tag">
          <div className="tag--sub second">
            2nd place of NSC 2019
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

    .second {
      background-color: #e7e7e7;
    }
  }
`

export default DorothyCard;