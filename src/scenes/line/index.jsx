import { Box } from "@mui/material";
import Header from "../../components/Header";
import TopArtists from "../../components/TopArtists";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Top Artists" subtitle="2025" />
      <Box height="75vh">
        <TopArtists />
      </Box>
    </Box>
  );
};

export default Line;
