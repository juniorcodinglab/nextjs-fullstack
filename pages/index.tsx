import Box from "../src/theme/components/Box";
import theme from "../src/theme/theme";

export default function HomeScreen() {
  return (
    <Box 
    tag="main"
    styleSheet={{
      fontFamily: theme.typography.fontFamily
    }}>Hello, World!</Box>

  )
}
