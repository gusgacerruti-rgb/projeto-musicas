import { Box } from "@mui/material";
import Header from "../../components/Header";
import Subgenres from "../../components/Subgenres";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <Subgenres />
      </Box>
    </Box>
  );
};

export default Pie;
