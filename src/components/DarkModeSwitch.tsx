import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useColorMode, IconButton, Flex, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useState } from 'react'

export const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const [display, changeDisplay] = useState('none')
	return (
		<Flex>
			<Flex position="fixed" top="1rem" right="1rem" align="center">
				{/* Desktop */}
				<Flex display={['none', 'none', 'flex', 'flex']}>
					<NextLink href="/" passHref>
						<Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
							Home
						</Button>
					</NextLink>

					<NextLink href="/about" passHref>
						<Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
							About
						</Button>
					</NextLink>

					<NextLink href="/contact" passHref>
						<Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
							Contact
						</Button>
					</NextLink>
				</Flex>

				{/* Mobile */}
				<IconButton
					icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
					size="md"
					paddingBlock={2}
					ml={2}
					variant="ghost"
					aria-label="btn"
					onClick={toggleColorMode}
				/>
				<IconButton
					aria-label="Open Menu"
					size="lg"
					ml={3}
					icon={<HamburgerIcon />}
					onClick={() => changeDisplay('flex')}
					display={['flex', 'flex', 'none', 'none']}
				/>
			</Flex>

			{/* Mobile Content */}
			<Flex
				w="100vw"
				display={display}
				zIndex={20}
				h="100vh"
				pos="fixed"
				top="0"
				left="0"
				bg='purple'
				overflowY="auto"
				flexDir="column">
				<Flex justify="flex-end">
					<IconButton
						mt={4}
						mr={4}
						bg='purple'
						aria-label="Open Menu"
						size="lg"
						icon={<CloseIcon />}
						onClick={() => changeDisplay('none')}
					/>
				</Flex>

				<Flex flexDir="column" align="center">
					<NextLink href="/" passHref>
						<Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
							Home
						</Button>
					</NextLink>

					<NextLink href="/about" passHref>
						<Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
							About
						</Button>
					</NextLink>

					<NextLink href="/contact" passHref>
						<Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
							Contact
						</Button>
					</NextLink>
					
				</Flex>
			</Flex>
		</Flex>
	)
}
