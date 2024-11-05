import { Box, Dialog, DialogContent, Tabs, TextField } from "@mui/material";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { Voices } from "../../data/videovoices";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const VideoSliderDialog = ({ open, handleClose }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="md"
      fullWidth={true}
    >
      <DialogContent className="md:p-3 p-1">
        <Tabs
          value={openTab}
          onChange={(event, value) => setOpenTab(value)}
          className="video_slider_tabs"
        >
          <Tab label="Background Music" {...a11yProps(0)} />
          <Tab label="Voiceover" {...a11yProps(1)} />
          <Tab label="My uploads" {...a11yProps(2)} />
          <Tab label="Recent" {...a11yProps(3)} />
        </Tabs>
        <CustomTabPanel value={openTab} index={0}>
          Bakground music
        </CustomTabPanel>
        <CustomTabPanel value={openTab} index={1}>
          <TextField
            id="standard-basic"
            label="Search Voices"
            variant="standard"
            fullWidth
          />
          <div className="flex items-center md:justify-between my-3 flex-wrap gap-3">
            <select className="active:outline-none ">
              <option value="english">English</option>
            </select>
            <select className="active:outline-none ">
              <option value="Accent">Accent</option>
            </select>
            <select className="active:outline-none ">
              <option value="Age">Age</option>
            </select>
            <select className="active:outline-none ">
              <option value="Purpose">Purpose</option>
            </select>
            <select className="active:outline-none ">
              <option value="Gender">Gender</option>
              <option value="Gender">Gender</option>
            </select>
          </div>
          <h2 className="font-bold text-base">Premium Voices</h2>
          <ul className="">
            {Voices?.map((voice, i) => (
              <li
                className="flex items-center gap-2 my-1 cursor-pointer hover:bg-slate-100 p-1"
                key={voice?.title + i}
              >
                <IoPlayCircleOutline className="h-10 w-10" />
                <div className="flex flex-col gap-0">
                  <h2 className="text-base font-semibold">{voice?.title}</h2>
                  <p className="text-sm">{voice?.sub_title}</p>
                </div>
              </li>
            ))}
          </ul>
        </CustomTabPanel>
        <CustomTabPanel value={openTab} index={2}>
          my uploads
        </CustomTabPanel>
        <CustomTabPanel value={openTab} index={3}>
          recent
        </CustomTabPanel>
      </DialogContent>
    </Dialog>
  );
};
