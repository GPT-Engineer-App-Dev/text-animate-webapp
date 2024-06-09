import React from 'react';
import Typing from 'react-typing-animation';
import Lottie from 'react-lottie';
import { Text } from '@chakra-ui/react';
import animationData from '../animations/pathDrawing.json';

const AnimatedText = ({ text, animationType, fontColor }) => {
  const renderTypingAnimation = () => (
    <Typing>
      <Text color={fontColor} fontSize="2xl">{text}</Text>
    </Typing>
  );

  const renderPathDrawingAnimation = () => (
    <Lottie 
      options={{
        loop: false,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }}
      height={400}
      width={400}
    />
  );

  return (
    <div>
      {animationType === 'typing' ? renderTypingAnimation() : renderPathDrawingAnimation()}
    </div>
  );
};

export default AnimatedText;