import { Chip, Grid, Stack, Typography } from "@mui/joy";

export default function About({ text, key_points }) {
    return (
        <Grid container direction={"column"} gap={1}>
            <Typography level="h4">О себе</Typography>
            <Typography level="body-md" align="justify">{text}</Typography>
            <Typography level="h4">Ключевые навыки</Typography>
            <Stack direction={"row"} spacing={1} useFlexGap flexWrap="wrap">
                {key_points.strong.map((key_point) => (
                    <Chip variant="soft" color="primary">{key_point}</Chip>
                ))}
                {key_points.additional.map((key_point) => (
                    <Chip variant="outlined">{key_point}</Chip>
                ))}
                {key_points.other.map((key_point) => (
                    <Chip variant="outlined" color="success">{key_point}</Chip>
                ))}
            </Stack>
        </Grid>
    )
}