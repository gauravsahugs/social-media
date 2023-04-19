import {
  Box,
  Stack,
  TextField,
  Typography,
  styled,
  Card,
  Avatar,
} from "@mui/material";
//@mui
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendIcon from "@mui/icons-material/Send";
import MoodIcon from "@mui/icons-material/Mood";
import SmsIcon from "@mui/icons-material/Sms";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { data } from "./mockData";

const RootStyle = styled("div")(({ theme }) => ({
  maxWidth: "1536px",
  width: "100%",
  margin: "0 auto",
  "& fieldset": {
    border: "none !important",
    outline: "none !important",
  },
}));

const FeedCard = () => {
  const [likeCount, setLikeCount] = useState(2);
  const [isLike, setLiked] = useState(false);

  const handleLiked = () => {
    setLiked(true);
    setLikeCount(likeCount + 1);
  };

  return (
    <>
      <RootStyle>
        {/*-------------------------------- image info card 1------------------------------ */}

        {data.map((item, index) => (
          <Box py={2} key={index}>
            <Card
              sx={{
                width: { xs: "370px", sm: "822px" },
                boxShadow: "0px 12px 24px -4px #919eab1f",
                borderRadius: "16px",
              }}
            >
              <Stack
                direction="row"
                justifyContent={"space-between"}
                pt={3}
                sx={{ width: { sm: "764px", xs: "330px" }, margin: "0 auto " }}
              >
                <Stack direction={"row"} gap={2}>
                  <Avatar src={item.avatar} />
                  <Stack>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 700, color: "#212B36" }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 400, color: "#637381" }}
                    >
                      {item.date}
                    </Typography>
                  </Stack>
                </Stack>
                <MoreVertIcon sx={{ color: "#637381", cursor: "pointer" }} />
              </Stack>
              <Stack
                py={2}
                variant="body1"
                sx={{ width: { sm: "764px", xs: "330px" }, margin: "0 auto " }}
              >
                <Typography>{item.description}</Typography>
              </Stack>
              <Stack>
                <img src={item.image} alt="" />
              </Stack>
              <Stack
                direction={"row"}
                py={4}
                sx={{
                  width: { sm: "764px", xs: "330px" },
                  height: "40px",
                  alignItems: "center",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Stack direction={"row"} gap={1} alignItems="center">
                  {isLike ? (
                    <FavoriteIcon sx={{ color: "red", cursor: "pointer" }} />
                  ) : (
                    <FavoriteBorderIcon
                      onClick={handleLiked}
                      sx={{ cursor: "pointer" }}
                    />
                  )}
                  {item.likeCount}
                  <Avatar
                    src={item.userAvatar}
                    sx={{ width: "32px", height: "32px" }}
                  />
                </Stack>
                <Stack direction="row" gap={1}>
                  <SmsIcon sx={{ color: "#637381", cursor: "pointer" }} />

                  <ShareIcon sx={{ color: "#637381", cursor: "pointer" }} />
                </Stack>
              </Stack>

              <Stack
                direction={"row"}
                pb={3}
                gap={2.4}
                sx={{ width: { sm: "764px", xs: "330px" }, margin: "0 auto " }}
                alignItems={"center"}
              >
                <Avatar
                  src={item.avatar}
                  sx={{ width: "40px", height: "40px" }}
                />
                <Box
                  gap={1}
                  px={1}
                  sx={{
                    width: { sm: "764px", xs: "240px" },
                    height: "40px",
                    borderRadius: "8px",
                    border: "1px solid rgba(145, 158, 171, 0.32)",
                    display: "flex",

                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    "& input": {
                      width: "595px",
                      height: "40px",
                      padding: "0px",
                    },
                  }}
                >
                  <TextField
                    placeholder="Write a Comment..."
                    sx={{
                      height: "40px",
                    }}
                  />
                  <AddPhotoAlternateIcon
                    sx={{ color: "#637381", cursor: "pointer" }}
                  />{" "}
                  <MoodIcon sx={{ color: "#637381", cursor: "pointer" }} />
                </Box>

                <SendIcon sx={{ color: "#637381", cursor: "pointer" }} />
              </Stack>
            </Card>
          </Box>
        ))}
      </RootStyle>
    </>
  );
};

export default FeedCard;
