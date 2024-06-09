import React from 'react';
import Typing from 'react-typing-animation';
import { Drawing } from 'react-svg-drawing';
import { Text } from '@chakra-ui/react';

const AnimatedText = ({ text, animationType, fontColor }) => {
  const renderTypingAnimation = () => (
    <Typing>
      <Text color={fontColor} fontSize="2xl">{text}</Text>
    </Typing>
  );

  const renderPathDrawingAnimation = () => (
    <Drawing path={text} duration={2000} strokeColor={fontColor} />
  );

  return (
    <div>
      {animationType === 'typing' ? renderTypingAnimation() : renderPathDrawingAnimation()}
    </div>
  );
};

export default AnimatedText;