import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Video } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data?.items)
    );
  }, [searchTerm]);
  console.log(videos, "videoooo");
  return (
    <Box
      p={2}
      sx={{ overflow: "auto", height: "90vh", flex: 2, background: "black" }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search Result For:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> Videos
      </Typography>
      <Video videos={videos} />
    </Box>
  );
}

export default SearchFeed;
