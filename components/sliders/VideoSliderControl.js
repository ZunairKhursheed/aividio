import {
  Box,
  Checkbox,
  IconButton,
  MenuItem,
  Switch,
  Typography,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { IoMdMic, IoMdSettings } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { VideoSliderDialog } from "../Dialog/VideoSliderDialog";
import { VideoSliderSettingDialog } from "../Dialog/VideoSliderSettingDialog";

export const VideoSliderControl = ({ setStoryPrediction, index }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleDeleteScene() {
    setStoryPrediction((current) => {
      let currentPrediction = current?.output?.individual_videos.splice(
        index,
        1
      );
      return { ...current, individual_videos: currentPrediction };
    });
  }
  return (
    <>
      <div className="bg-white rounded-md shadow-md md:p-3 p-1.5 w-full">
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-0 relative">
            <>
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <IoMdMic className="text-gray-600 h-5 w-5" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: "top", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "top" }}
                sx={{
                  "& .MuiPaper-root": {
                    width: "250px", // Set the width here
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingInline: "10px",
                  }}
                >
                  <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
                    Audio
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, fontWeight: 300 }}
                    className="text-gray-400"
                  >
                    Apply to all
                  </Typography>
                </Box>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 300 }}
                    className="text-gray-600 flex-1"
                  >
                    Voice-over
                  </Typography>
                  <Switch
                    size="small"
                    checked={openModal === "voice-over"}
                    onChange={() => setOpenModal("voice-over")}
                  />
                  <Checkbox size="small" />
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 300 }}
                    className="text-gray-600 flex-1"
                  >
                    Background Music
                  </Typography>
                  <Switch defaultChecked size="small" />
                  <Checkbox size="small" />
                </MenuItem>
              </Menu>
            </>
            <IconButton onClick={handleDeleteScene}>
              <MdDelete className="text-gray-600 h-5 w-5" />
            </IconButton>
            <IconButton onClick={() => setOpenModal("setting")}>
              <IoMdSettings className="text-gray-600 h-5 w-5" />
            </IconButton>
          </div>
        </div>
      </div>
      <VideoSliderDialog
        open={openModal === "voice-over"}
        handleClose={() => setOpenModal(false)}
      />
      <VideoSliderSettingDialog
        open={openModal === "setting"}
        handleClose={() => setOpenModal(false)}
      />
    </>
  );
};
