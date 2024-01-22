import { Grid, Chip, Typography, Card } from "@mui/joy";
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ({ name, location, socials, photo, onGetPDF }) {
    return (
        <Grid container justifyItems="center" justifyContent="space-between" alignItems="center" gap={{md: 7, xs: 0}}>
            <Grid item>
                <Grid container direction="column" gap={1}>
                    <Grid item>
                        <Typography level="h1">{name}</Typography>
                        <Typography level="title-lg" textColor="neutral.600">{location}</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container gap={1}>
                            <Chip href={socials.email.link} component="a" clickable variant="outlined" size="lg">{socials.email.label}</Chip>
                            <Chip href={socials.phone.link} component="a" clickable variant="outlined" size="lg">{socials.phone.label}</Chip>
                            <Chip
                                href={socials.github.link}
                                component="a" color="primary"
                                clickable
                                variant="solid"
                                size="lg"
                                target="_blank"
                                startDecorator={<GitHubIcon />}
                            >{socials.github.label}</Chip>
                            <Chip
                                href={socials.telegram.link}
                                component="a"
                                color="primary"
                                clickable
                                variant="solid"
                                size="lg"
                                target="_blank"
                                startDecorator={<TelegramIcon />}
                            >{socials.telegram.label}</Chip>
                            <Chip
                                href={socials.linkedin.link}
                                component="a"
                                color="primary"
                                clickable
                                variant="solid"
                                size="lg"
                                target="_blank"
                                startDecorator={<LinkedInIcon />}
                            >{socials.linkedin.label}</Chip>
                            <Chip onClick={onGetPDF} clickable variant="outlined" size="lg" target="_blank">PDF-версия</Chip>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{display: { xs: "none", md: "block" }}}>
                <img src={photo} alt="-" loading="lazy" style={{ height: "12rem", borderRadius: "0.75rem" }} />
            </Grid>
        </Grid>
    )
}