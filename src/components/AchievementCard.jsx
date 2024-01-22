import { Download as DownloadIcon, Info } from "@mui/icons-material";
import { AspectRatio, Card, CardContent, CardOverflow, CircularProgress, IconButton, Link, Stack, Typography } from "@mui/joy";
import { useState } from "react";

export default function AchievementCard({ title, additional_data, achievement, img, description }) {
    const [loaded, setLoaded] = useState(false);
    return (
        <Card variant="outlined" sx={{ backgroundColor: "grey.50" }}>
            {img &&
                <CardOverflow>
                    <AspectRatio ratio="2/1">
                        <img
                            src={img}
                            loading="lazy"
                            alt=""
                            style={{ objectFit: "cover", visibility: loaded ? "visible" : "hidden" }}
                            onLoad={() => {
                                console.log(1)
                                setLoaded(true)
                            }}
                        />
                        {!loaded && <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}></div>
                        }
                    </AspectRatio>
                </CardOverflow>
            }
            <CardContent>
                <Stack direction={"column"} spacing={1}>
                    <Typography level="title-md">
                        {title}
                    </Typography>
                    {additional_data && Object.keys(additional_data).map((key) => (
                        <Typography level="body-md">{key}: {additional_data[key]} </Typography>
                    ))}
                </Stack>
            </CardContent>
            <CardOverflow sx={{ bgcolor: 'background.level1', p: 2 }}>
                <Stack direction={"row"} spacing={1} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography level="body-md">
                        Достижение: {achievement.link == "" ?
                            achievement.name
                            : (
                                <Link href={achievement.link} target="_blank">{achievement.name}</Link>
                            )}
                    </Typography>
                    {description &&
                        <IconButton>
                            <Info />
                        </IconButton>
                    }
                </Stack>
            </CardOverflow>
        </Card>
    )
}