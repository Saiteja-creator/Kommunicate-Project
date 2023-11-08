import "./index.css";

const PickAdd = (props) => {
  const { nextStepNo, backStepNo } = props;

  const nextStep = () => {
    nextStepNo();
  };

  const backButton = () => {
    backStepNo();
  };

  return (
    <div>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div>
        <div className="each-element">
          <input type="checkbox" />
          <div>
            <p>Online service</p>
            <p>Access to multiple games</p>
          </div>
          <p>+$1/mo</p>
        </div>
        <div className="each-element">
          <input type="checkbox" />
          <div>
            <p>Large storage</p>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p>+$2/mo</p>
        </div>
        <div className="each-element">
          <input type="checkbox" />
          <div>
            <p>Customizable profile</p>
            <p>Access to multiple games</p>
          </div>
          <p>+$2/mo</p>
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

export default PickAdd;
