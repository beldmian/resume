import { Card, CardContent, Typography, Chip, Stack, IconButton } from "@mui/joy";
import InfoIcon from '@mui/icons-material/Info';

export default function WorkExperienceCard({ company, position, tasks, startDate, endDate }) {
    return (
        <Card variant="outlined" sx={{ backgroundColor: "grey.50" }}>
            <CardContent>
                <Stack direction={"row"} spacing={1} alignItems={"center"} sx={{mb: 1}}>
                    <Typography gutterBottom level="title-md">
                        {position}
                    </Typography>
                    <IconButton color="primary" variant="plain">
                        <InfoIcon/>
                    </IconButton>
                </Stack>
                <Stack direction={"row"} spacing={1} useFlexGap flexWrap="wrap">
                    <Chip color="primary">{company}</Chip>
                    <Chip variant="outlined">{startDate} - {endDate}</Chip>
                </Stack>
            </CardContent>
        </Card>
    )
}