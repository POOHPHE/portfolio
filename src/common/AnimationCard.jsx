import styled from "styled-components";
import imgs from "../assets/animmoo.jpg"
function AnimationCard(){

  function OnClick(){
    window.location.href = "https://poohphe.itch.io/alpha-ace-nsc-2021";
  }

  return (
    <AwardContent onClick={OnClick} href="https://www.wealthmagik.com/animationaward/season3">
      <div className="bg">
        <img src={imgs} className="pic"/>
        <div className="title">
          Animation เรื่องหมูหมู 
        </div>
        <div className="tag">
          <div className="tag--sub second">
            Popular Vote Award
          </div>
        </div>
      </div>
    </AwardContent>
  );
}

const AwardContent = styled.a`
  width: fit-content;
  height: 100%;
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
      background-color: #9FE2BF;
    }
  }
`

export default AnimationCard;