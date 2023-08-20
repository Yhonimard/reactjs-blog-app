import { Add as AddIcon, Image, Send } from "@mui/icons-material";
import {
  Avatar,
  Fab,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import { useState } from "react";
import { InnerModalWrap, StyledModal, UserBox } from "./styled";

const Add = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Tooltip sx={{ position: "fixed", bottom: 45, left: 20 }}>
        <Fab onClick={openMenu} variant="circular">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal open={isOpen} onClose={closeMenu}>
        <InnerModalWrap>
          <Typography textAlign={`center`} variant="h6">
            Create Post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500}>john doe</Typography>
          </UserBox>
          <TextField
            multiline
            rows={3}
            variant="standard"
            sx={{ width: "100%" }}
          />
          <Stack direction={`row`} gap={1} justifyContent="flex-end">
            <IconButton>
              <Image />
            </IconButton>
            <IconButton>
              <Send />
            </IconButton>
          </Stack>
        </InnerModalWrap>
      </StyledModal>
    </>
  );
};

export default Add;
