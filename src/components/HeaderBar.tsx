import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import styles from '../styles/components/HeaderBar.module.css';

export default function HeaderBar() {
  return (
    <Flex 
      as="nav"
      justify="space-between"
      p={2}
      position="fixed"
      w="100%"
      color="#012B50"
    >
        <Box>
          <Text className={styles.headerName} fontSize='xl'>Christian Oliveira</Text>
        </Box>

        <HStack className={styles.headerLinks} spacing="35px">
          <Text>Home</Text>
          <Text>Sobre</Text>
          <Text>Habilidades</Text>
          <Text>Contatos</Text>
        </HStack>
    </Flex>
  )
}