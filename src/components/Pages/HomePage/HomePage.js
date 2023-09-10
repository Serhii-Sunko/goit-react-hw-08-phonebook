import { motion } from 'framer-motion';
import { Wrapper, Title, TextTyped } from './HomePage.styled';
import { GiSunglasses } from 'react-icons/gi';

const HomePage = () => {
  return (
    <Wrapper>
      <Title
        as={motion.h1}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.3, opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        Phoneb
        <GiSunglasses color="white" size="75px" />k
      </Title>

      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <TextTyped>
          Welcome to your best assistant. Save the numbers of family and
          friends. And don't worry about losing touch with them.
        </TextTyped>
      </motion.div>
    </Wrapper>
  );
};

export default HomePage;
