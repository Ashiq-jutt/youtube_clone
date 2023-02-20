import React from "react";
import { Audio, Rings, Vortex } from "react-loader-spinner";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
const Video = ({ videos, direction }) => {
  if (!videos?.length)
    return (
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "50vh",
          // color: "white",
        }}
      >
        <Rings
          height="170"
          width="170"
          color="white"
          // radius="100"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </Box>
    );
  console.log(videos, ".........");
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={3}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Video;
