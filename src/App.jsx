import "./App.css";
import { LiaBoltSolid } from "react-icons/lia";
import { BiBrain } from "react-icons/bi";
import { BiSolidMessageRoundedMinus } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
function App() {
  return (
    <>
      <div className="main-container">
        <div className="result-container">
          <span className="title">Your result</span>
          <div className="score">
            <h1>76</h1>
            <span>of 100</span>
          </div>
          <span className="great">Great</span>
          <p>
            You scored higher than 65% of the people who have taken these tests
          </p>
        </div>
        <div className="summary-container">
          <span className="summary">Summary</span>
          <div className="reaction">
            <span className="left-item">
              <LiaBoltSolid />
              reaction
            </span>
            <span className="right-item">
              80/ <span>100</span>{" "}
            </span>
          </div>
          <div className="memory">
            <span className="left-item">
              <BiBrain />
              memory
            </span>
            <span className="right-item">
              80/<span>100</span>
            </span>
          </div>
          <div className="verbal">
            <span className="left-item">
              <BiSolidMessageRoundedMinus />
              verbal
            </span>
            <span className="right-item">
              80/<span>100</span>
            </span>
          </div>
          <div className="visual">
            <span className="left-item">
              <AiOutlineEye />
              visual
            </span>
            <span className="right-item">
              80/<span>100</span>
            </span>
          </div>
          <div className="button">continue</div>
        </div>
      </div>
    </>
  );
}

export default App;
