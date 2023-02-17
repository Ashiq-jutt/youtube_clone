import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams, Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { Video } from "./";
function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  if (!videoDetail?.snippet) return "Loading........";
  const {
    snippet: { title, channelId, channelTitle },
  } = videoDetail;

  // const {
  //   stattistics: { viewCount, likeCount },
  // } = videoDetail;
  // console.log(viewCount, likeCount, "viewANDlike");
  // if (!videoDetail?.snippet) return "Loading......";
  return (
    <Box minHeight="100vh" bgcolor="black">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              // position: "sticky",
              // top: "86px",
              bgcolor: "grey",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="reacr-player"
              controls
            />
          </Box>
        </Box>
      </Stack>
      <Typography variant="h5" fontWeight="bold" p={2} sx={{ color: "#fff" }}>
        {title}
      </Typography>
      <Stack
        // direction="row"
        justifyContent="space-between"
        sx={{ color: "#fff" }}
        py={1}
        px={2}
      >
        <Link to={`/channel/${channelId}`}>
          <Typography
            variant={{ sm: "subtitle1", md: "h6" }}
            sx={{ color: "#fff" }}
          >
            {channelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
        <Stack direction="row" gap="20px" alignItems="center">
          {/* <Typography variant="body1" sx={{ opacity: 0.7 }}>
            {parseInt(viewCount).toLocaleString()} views
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.7 }}>
            {parseInt(likeCount).toLocaleString()} likes
          </Typography> */}
        </Stack>
        <Box
          px={2}
          py={{ md: 1, sm: 4 }}
          justifyContent="center"
          alignItems="center"
        >
          <Video videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
