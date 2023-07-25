import logo from './logo.svg';
import './App.css';
import { Box, Flex } from "@chakra-ui/react";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Box bgColor="#F6F8FA" className="App" color="#1C4980">
      <HomePage/>
    </Box>
  );
}

export default App;
