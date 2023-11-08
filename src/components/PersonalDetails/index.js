import "./index.css";

const PersonalDetails = (props) => {
  const { nextStepNo } = props;

  const nextStep = () => {
    nextStepNo();
  };
  return (
    <div className="form-container">
      <h1>Personal Info</h1>
      <p>Please provide your name,email address and phone number</p>
      <div className="each-el-container">
        <div className="each-el-container">
          <label htmlFor="Name">Name</label>
          <input id="Name" placeholder="e.g.Stephen King" type="text" />
        </div>
        <div className="each-el-container">
          <label htmlFor="Email">Email</label>
          <input
            id="Email"
            placeholder="e.g.stephenking@gmail.com"
            type="email"
          />
        </div>
        <div className="each-el-container">
          <label htmlFor="phone">Name</label>
          <input id="phone" placeholder="e.g.+123456789" />
        </div>
      </div>
      <div className="button-container">
        <button type="button" className="button" onClick={nextStep}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;
