import { useState } from "react";

import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slider from "@mui/material/Slider";

export const VideoSliderSettingDialog = ({ open, handleClose }) => {
  const [motion, setMotion] = useState(80);
  const [fps, setFps] = useState(6);
  const [numInferenceSteps, setNumInferenceSteps] = useState(9);

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth={true}>
      <DialogTitle>Setting</DialogTitle>
      <DialogContent>
        <Container className="mx-3 py-2" maxwidth="lg">
          <Box sx={{ bgcolor: "#fffcf2", height: "flex", borderRadius: 1 }}>
            <div className="flex flex-col">
              <label className="px-2 py-3 text-sm  text-black">
                Motion (Required)
              </label>
              <Slider
                defaultValue={80}
                valueLabelDisplay="on"
                color="success"
                step={10}
                marks
                min={10}
                max={100}
                onChange={(e) => setMotion(e.target.value)}
                name="motion"
              />
            </div>

            <div className="flex flex-col">
              <label className="px-2 py-3 text-sm  text-black">
                FPS (Required)
              </label>
              <Slider
                defaultValue={6}
                valueLabelDisplay="on"
                color="success"
                step={1}
                marks
                min={6}
                max={25}
                onChange={(e) => setFps(e.target.value)}
                name="fps"
              />
            </div>

            <div className="flex flex-col">
              <label className="px-2 py-3 text-sm  text-black">
                Num Inference Steps (Required)
              </label>
              <Slider
                defaultValue={9}
                valueLabelDisplay="on"
                color="success"
                step={1}
                marks
                min={5}
                max={15}
                onChange={(e) => setNumInferenceSteps(e.target.value)}
                name="numInferenceSteps"
              />
            </div>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
};
