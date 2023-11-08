import "./index.css";

const SelectedPlan = (props) => {
  const { nextStepNo, backStepNo } = props;

  const nextStep = () => {
    nextStepNo();
  };

  const backButton = () => {
    backStepNo();
  };
  console.log("selectedPlan");
  return (
    <div className="form-container">
      <h1>Select Your Plan</h1>
      <p>You have the option of monthly or yearly biling</p>
      <div className="select-container">
        <div className="image-select-container">
          <img
            src="https://res.cloudinary.com/dlphlzfzq/image/upload/v1699449703/icon-arcade_jikcwu.svg"
            alt="arcade"
            className="image-value"
          />
          <div>
            <p>Arcade</p>
            <p>$90/yr</p>
            <p>2 months free</p>
          </div>
        </div>
        <div className="image-select-container">
          <img
            src="https://res.cloudinary.com/dlphlzfzq/image/upload/v1699449396/icon-advanced_nl0lrt.svg"
            alt="game"
            className="image-value"
          />
          <div>
            <p>Advanced</p>
            <p>$120/yr</p>
            <p>2 months free</p>
          </div>
        </div>
        <div className="image-select-container">
          <img
            src="https://res.cloudinary.com/dlphlzfzq/image/upload/v1699449718/icon-pro_gi5xua.svg"
            alt="pro"
            className="image-value"
          />

          <div>
            <p>Arcade</p>
            <p>$90/yr</p>
            <p>2 months free</p>
          </div>
        </div>
      </div>

      <div className="button-container">
        <button type="button" className="go-back" onClick={backButton}>
          Go Back
        </button>

        <button type="button" className="button" onClick={nextStep}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SelectedPlan;
