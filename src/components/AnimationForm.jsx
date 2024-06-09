import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';

const AnimationForm = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [animationType, setAnimationType] = useState('typing');
  const [fontColor, setFontColor] = useState('#000000');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ text, animationType, fontColor });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="100%">
      <VStack spacing={4}>
        <FormControl id="text">
          <FormLabel>Text to Animate</FormLabel>
          <Input type="text" value={text} onChange={(e) => setText(e.target.value)} required />
        </FormControl>
        <FormControl id="animationType">
          <FormLabel>Animation Type</FormLabel>
          <Select value={animationType} onChange={(e) => setAnimationType(e.target.value)}>
            <option value="typing">Typing</option>
            <option value="pathDrawing">Path Drawing</option>
          </Select>
        </FormControl>
        <FormControl id="fontColor">
          <FormLabel>Font Color</FormLabel>
          <Input type="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">Animate</Button>
      </VStack>
    </Box>
  );
};

export default AnimationForm;