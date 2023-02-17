import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import {
  ChannelDetail,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box
        sx={{
          bgcolor: "red",
          height: 45,
          width: "100%",
          backgroundColor: "red",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
