import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { StyleColorMode } from './StyleColorMode'

export const CTA = () => (
  <StyleColorMode
    flexDirection="row"
    position="relative"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={3}
  >
    <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" colorScheme="purple">
        chakra-ui
      </Button>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="#"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" variant="solid" colorScheme="purple">
        View Repo
      </Button>
    </ChakraLink>
  </StyleColorMode>
)
