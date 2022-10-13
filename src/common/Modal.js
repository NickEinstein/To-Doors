import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { RiErrorWarningLine } from "react-icons/ri";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:'3%',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({closeModal, openModal, suspend}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={closeModal}
        onClose={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-center text-center ">
            <div className=" text-center">
              <div className=" flex justify-center ">
                <RiErrorWarningLine
                  style={{
                    backgroundColor: suspend ? " #FFB8001A" : "#FF004D1A",
                    color: suspend ? " #F7AD2B" : "#FF0A36",
                    padding: "2px",
                  }}
                  fontSize={25}
                />
              </div>
              <div className="mt-4">
                <Typography className="mb-4" variant="h6">
                  {suspend ? 'Suspend': 'Delete'} Account
                </Typography>
                <p>
                  Are you sure you want to delete this rider? This action cannot
                  be undone.
                </p>
              </div>

              <div className="flex justify-between items-center mt-8">
                <Button
                  onClick={openModal}
                  className="w-[80%] mr-3 bg-white text-[#989898]"
                >
                  Cancel
                </Button>{" "}
                <Button className="w-[80%] bg-[#FF2828]">Delete</Button>
              </div>
            </div>
          </div>

          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            To be discussed
          </Typography> */}
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
