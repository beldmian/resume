import { Box, Fade, Modal, Typography } from "@mui/material";

export default function CenteredModal({ children, open, onClose }) {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Fade in={open}>
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "background.paper",
                    borderRadius: "10px",
                    p: 4,
                    maxHeight: "90vh",
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    width: "minmax(70vw, 300px)",
                }}>
                    {children}
                </Box>
            </Fade>
        </Modal>
    )
}