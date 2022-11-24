import { Box } from "@mui/system";
import React from "react";
import Mininav from "../components/Mininav";
import BganimlotCard from "../components/home/BganimlotCard";
import Singlelotcard from "../components/singlelot/Singlelotcard";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Commentcard from "./../components/singlelot/Commentcard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { dislike, fetchSuccess, like } from "../Redux/videoSlice";
const SingleLot = () => {
  const [videos, setVideo] = useState({});
  const [subs, setsubs] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  console.log(path);
  let id = videos.userId;
  /*useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/videos/" + path);
      const chanel = await axios.get(`/users/" ${res.data.userId}`);
      console.log(chanel.data);
      setVideo(res.data);
    };
    getPost();
  }, [path]);*/
  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/${path}`);
        setVideo(videoRes.data);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        console.log(channelRes);

        setsubs(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path]);
  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  const handleSub = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };

  return (
    <Box>
      <Mininav />
      <Singlelotcard videos={videos} />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{
          width: "100%",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
            lg: "row",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              width: { md: "50%", xs: "100%", sm: "1005" },
              paddingLeft: "20px",
            }}
          >
            <Typography
              variant={"h5"}
              sx={{
                color: "#AA3B76",
                display: "flex",
                alignItems: "center",
              }}
            >
              Discriptions
              <KeyboardArrowDownIcon
                sx={{
                  aleighsSelf: "center",
                  fontSize: "30px",
                }}
              />
            </Typography>
            <Typography
              variant={"p"}
              sx={{
                paddingTop: "20px",
                fontSize: "20px",
                fontFamily: "Roboto, sans-serif",
                lineHeight: "32px",
              }}
            >
              {videos.desc}
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "50px",
              paddingLeft: "20px",
              width: { md: "50%", xs: "100%", sm: "100" },
              marginRight: "10px",
            }}
          >
            {" "}
            <Typography
              variant={"h5"}
              sx={{
                color: "#AA3B76",
                display: "flex",
                alignItems: "center",
              }}
            >
              Comments
            </Typography>
            <Box width={"100%"} alignItems={"center"}>
              <TextField
                sx={{
                  width: "80%",
                  marginTop: "10px",
                }}
              ></TextField>
              <Button
                sx={{
                  backgroundColor: "#F35588",
                  color: "#FFF",
                  marginTop: "10px",
                  height: "55px",
                  width: "20%",
                  fontSize: "15px",
                }}
              >
                Comment
              </Button>
            </Box>
            <Commentcard />
            <Commentcard />
            <Commentcard />
            <Commentcard />
            <Commentcard />
          </Box>
        </Box>
        <Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <FavoriteIcon
                sx={{
                  fontSize: "40px",
                  paddingRight: "20px",
                  color: "#F35588",
                }}
              />
              <Typography
                sx={{
                  fontSize: "40px",
                  paddingRight: "20px",
                  color: "#F35588",
                }}
              >
                100k
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#F35588",
                  color: "#FFF",
                  marginRight: "20px",
                }}
                onClick={handleSub}
              >
                Follow
              </Button>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-end"}
              justifyContent={"flex-end"}
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  paddingRight: "20px",
                  color: "#AA3B75",
                }}
              >
                Followers
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  paddingRight: "50px",
                  color: "#F35588",
                }}
              >
                {subs.subscribers}
              </Typography>
            </Box>
          </Box>{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default SingleLot;
