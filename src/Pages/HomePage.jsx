import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import Assessments from "../components/Assesments";
import MobileNavbar from "../components/MobileNavbar";

const HomePage = () => {
  return (
    <Flex justifyContent={"space-between"} pr="20px" h="200vh">
      <SideBar />

      <Box
        w={{ base: "100%", md: "83%", lg: "88%" }}
        position="absolute"
        left={{ base: "0", md: "16%", lg: "11%" }}
      >
        <MobileNavbar/>
        <Navbar />
        <Overview />
        <Assessments/>
      </Box>
    </Flex>
  );
};

export default HomePage;