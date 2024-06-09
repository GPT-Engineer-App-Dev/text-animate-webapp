import React, { useState } from 'react';
import { Container, VStack, Input, Select, Button, Text, Box, HStack } from "@chakra-ui/react";
import AnimatedText from '../components/AnimatedText';

const Index = () => {
  const [text, setText] = useState('');
  const [animationType, setAnimationType] = useState('typing');
  const [fontColor, setFontColor] = useState('#000000');
  const [showAnimation, setShowAnimation] = useState(false);

  const handleAnimate = () => {
    setShowAnimation(true);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Text Animation Web App</Text>
        <Input 
          placeholder="Enter text to animate" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <Select 
          placeholder="Select animation type" 
          value={animationType} 
          onChange={(e) => setAnimationType(e.target.value)}
        >
          <option value="typing">Typing</option>
          <option value="pathDrawing">Path Drawing</option>
        </Select>
        <Input 
          type="color" 
          value={fontColor} 
          onChange={(e) => setFontColor(e.target.value)} 
        />
        <Button onClick={handleAnimate}>Animate Text</Button>
        {showAnimation && (
          <Box mt={8}>
            <AnimatedText text={text} animationType={animationType} fontColor={fontColor} />
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;