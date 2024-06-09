import React from 'react';
import Typing from 'react-typing-animation';
import { Drawing } from 'react-svg-drawing';
import { Box } from '@chakra-ui/react';

const AnimatedText = ({ text, animationType, fontColor }) => {
  return (
    <Box color={fontColor} fontSize="2xl" textAlign="center" mt={8}>
      {animationType === 'typing' ? (
        <Typing>
          <span>{text}</span>
        </Typing>
      ) : (
        <Drawing path={text} />
      )}
    </Box>
  );
};

export default AnimatedText;