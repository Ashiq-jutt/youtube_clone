import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Video } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  console.log(videos, "feed..videoo");
  return (
    <Stack
      sx={{
        backgroundColor: "#000",
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={setSelectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 JuTtSiTe
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fff" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Video videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
