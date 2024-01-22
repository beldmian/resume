import { Card, CardContent, Chip, Stack, Typography, CardActions, Button, CardOverflow, ButtonGroup } from "@mui/joy";
import StarsIcon from '@mui/icons-material/Stars';

export default function ProjectCard({ name, description, links, tags, stars }) {
    return (
        <Card variant="outlined" sx={{ backgroundColor: "grey.50" }}>
            <CardContent>
                <Stack direction={"column"} spacing={1}>
                    <Typography level="title-md">
                        {name}
                    </Typography>
                    <Stack direction={"row"} spacing={1} useFlexGap flexWrap="wrap">
                        {tags.map((tag) => (
                            <Chip variant="outlined">{tag}</Chip>
                        ))}
                        {stars !== undefined &&
                            <Chip startDecorator={<StarsIcon />} color="primary">{stars}</Chip>
                        }
                    </Stack>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                </Stack>
            </CardContent>
            <CardOverflow>
                <CardActions buttonFlex={1}>
                    <ButtonGroup>
                        {links.map((link) => (
                            <Button variant="soft" component="a" href={link.href} target="_blank" color="primary">{link.name}</Button>
                        ))}
                    </ButtonGroup>
                </CardActions>
            </CardOverflow>
        </Card>
    )
}