import styled from "styled-components";
import imgs from "../assets/dorothy.png"

function DorothyCard(){

  function OnClick(){
    window.location.href = "https://poohphe.itch.io/dorothy-nsc-2019";
  }

  return (
    <AwardContent onClick={OnClick}>
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

const AwardContent = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.25em;

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
      background-color: #C0C0C0;
    }
  }
`

export default DorothyCard;