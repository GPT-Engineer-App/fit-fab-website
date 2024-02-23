import { Box, Container, Flex, Heading, Text, Button, VStack, HStack, Spacer, Image, Link } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter, FaDumbbell } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" p={4} borderBottomWidth={1} borderColor="gray.200">
        <Box>
          <Heading size="lg">FitCompany</Heading>
        </Box>
        <Spacer />
        <HStack as="ul" spacing={4}>
          <Button as="li" variant="ghost">
            Home
          </Button>
          <Button as="li" variant="ghost">
            Services
          </Button>
          <Button as="li" variant="ghost">
            Testimonials
          </Button>
          <Button as="li" variant="ghost">
            Contact
          </Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Container maxW="container.xl" centerContent py={10}>
        <VStack spacing={5}>
          <Heading as="h1" size="2xl" textAlign="center">
            Achieve Your Fitness Goals
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Join us and transform your body and mind with our professional trainers.
          </Text>
          <Button size="lg" colorScheme="teal" leftIcon={<FaDumbbell />}>
            Start Training
          </Button>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1627483297886-49710ae1fc22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxmaXRuZXNzfGVufDB8fHx8MTcwODcxMTA1NHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mt={8} boxSize="sm" objectFit="cover" />
      </Container>

      {/* Services Section */}
      <Box as="section" bg="gray.50" py={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Our Services
        </Heading>
        <Flex justify="center" wrap="wrap" gap={8}>
          {/* Repeat this for each service */}
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" maxW="sm">
            <Heading size="md">Personal Training</Heading>
            <Text mt={4}>One-on-one sessions tailored to your goals.</Text>
          </Box>
          {/* ... other services */}
        </Flex>
      </Box>

      {/* Testimonial Section */}
      <Box as="section" py={10}>
        <Heading as="h3" size="xl" textAlign="center" mb={6}>
          Client Testimonials
        </Heading>
        <Container centerContent>
          <Box maxW="sm" textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text fontStyle="italic">"I've never felt better! The trainers at FitCompany really know their stuff."</Text>
            <Text fontWeight="bold" mt={3}>
              - Jane Doe
            </Text>
          </Box>
          {/* ... other testimonials */}
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={5}>
        <Container maxW="container.xl" centerContent>
          <VStack spacing={3}>
            <Heading size="lg">FitCompany</Heading>
            <Text>Transforming lives since 2020</Text>
            <HStack spacing={4}>
              <Link href="#" isExternal>
                <FaInstagram />
              </Link>
              <Link href="#" isExternal>
                <FaFacebook />
              </Link>
              <Link href="#" isExternal>
                <FaTwitter />
              </Link>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
