import { Card, CardContent, Typography, Chip, Stack, IconButton } from "@mui/joy";
import InfoIcon from '@mui/icons-material/Info';
import EducationModal from "./EducationModal";
import { useState } from "react";

export default function EducationCard({ type, name, profile, startDate, endDate }) {
    let [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <EducationModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                name={name}
                type={type}
                profile={profile}
                startDate={startDate}
                endDate={endDate}
                description=""
            />
            <Card variant="outlined" sx={{ backgroundColor: "grey.50" }}>
                <CardContent>
                    <Stack direction={"row"} spacing={1} alignItems={"center"} sx={{mb: 1}}>
                        <Typography gutterBottom level="title-md">
                            {name}
                        </Typography>
                        <IconButton color="primary" variant="plain" onClick={() => setModalOpen(true)}>
                            <InfoIcon/>
                        </IconButton>
                    </Stack>
                    <Stack direction={"row"} spacing={1} useFlexGap flexWrap="wrap">
                        <Chip variant="outlined">{type}</Chip>
                        <Chip variant="outlined">{startDate} - {endDate}</Chip>
                        <Chip color="primary">{profile}</Chip>
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
}