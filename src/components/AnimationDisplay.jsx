import React from 'react';
import Typing from 'react-typing-animation';
import Lottie from 'react-lottie';
import animationData from '../animations/pathDrawing.json'; // Example animation JSON file

const AnimationDisplay = ({ text, animationType, fontColor }) => {
  const renderAnimation = () => {
    switch (animationType) {
      case 'typing':
        return (
          <Typing>
            <span style={{ color: fontColor }}>{text}</span>
          </Typing>
        );
      case 'pathDrawing':
        const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        };
        return <Lottie options={defaultOptions} height={400} width={400} />;
      default:
        return null;
    }
  };

  return <div>{renderAnimation()}</div>;
};

export default AnimationDisplay;