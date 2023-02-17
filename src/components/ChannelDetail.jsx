import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Video, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
function ChannelDetail() {
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  // console.log(videos, "videoooo");
  console.log(ChannelDetail, "channelllll");

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh" bgcolor="black">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(226,17,211,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={ChannelDetail} marginTop="-120px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { md: "10px" } }} />
        <Video videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
