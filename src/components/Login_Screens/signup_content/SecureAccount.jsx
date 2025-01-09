import React, { useState } from 'react';
import SetUp_TwoFactor from './secureAccount/SetUp_TwoFactor'

const SecureAccount = () => {
  // State to track internal screens within this step
  const [currentScreen, setCurrentScreen] = useState(1);

  // Function to navigate to the next internal screen
  const goToNextScreen = () => {
    setCurrentScreen((prevScreen) => (prevScreen < 3 ? prevScreen + 1 : prevScreen));
  };

  // Function to navigate to the previous internal screen
  const goToPreviousScreen = () => {
    setCurrentScreen((prevScreen) => (prevScreen > 1 ? prevScreen - 1 : prevScreen));
  };

  // Function to render different screens 
  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <SetUp_TwoFactor/>;
      case 2:
        return <div></div>;
      case 3:
        return <div>Secure Account - Screen 3: Review security settings.</div>;
      default:
        return <div>Unknown Screen</div>;
    }
  };

  return (
    <div>
      {renderScreen()}

      {/* Internal navigation buttons */}
      <div>
        <button onClick={goToPreviousScreen} disabled={currentScreen === 1}>
          Previous
        </button>
        <button onClick={goToNextScreen} disabled={currentScreen === 3}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SecureAccount;
