import React, { useState } from 'react';
import { Container, VStack, Heading } from '@chakra-ui/react';
import AnimationForm from '../components/AnimationForm';
import AnimatedText from '../components/AnimatedText';

const Index = () => {
  const [animationData, setAnimationData] = useState(null);

  const handleFormSubmit = (data) => {
    setAnimationData(data);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="full">
        <Heading as="h1" size="xl">Text Animation App</Heading>
        <AnimationForm onSubmit={handleFormSubmit} />
        {animationData && (
          <AnimatedText
            text={animationData.text}
            animationType={animationData.animationType}
            fontColor={animationData.fontColor}
          />
        )}
      </VStack>
    </Container>
  );
};

export default Index;