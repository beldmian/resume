import { Grid, Typography, Divider, Tabs, TabList, Tab, TabPanel } from "@mui/joy";
import AchievementCard from "./AchievementCard";
import { Masonry } from "@mui/lab";

export default function Achievements({ achievements }) {
    return (
        <Grid container gap={1} direction="column" sx={{transition: "all 0.5s ease"}}>
            <Typography level="h4">Академические достижения</Typography>
            <Tabs size="md" defaultValue={0}>
                <TabList color="primary">
                    <Tab>2021</Tab>
                    <Tab>2022</Tab>
                    <Tab>2023</Tab>
                </TabList>
                <TabPanel value={0}>
                    <Masonry spacing={1} columns={{ md: 2, xs: 1 }}>
                        {achievements.academic["2021"].map((achievement) => (
                            <AchievementCard
                                title={achievement.title}
                                additional_data={achievement.additional_data}
                                achievement={achievement.achievement}
                                img={achievement.img}
                            />
                        ))}
                    </Masonry>
                </TabPanel>
                <TabPanel value={1}>
                    <Masonry spacing={1} columns={{ md: 2, xs: 1 }}>
                        {achievements.academic["2022"].map((achievement) => (
                            <AchievementCard
                                title={achievement.title}
                                additional_data={achievement.additional_data}
                                achievement={achievement.achievement}
                                img={achievement.img}
                            />
                        ))}
                    </Masonry>
                </TabPanel>
                <TabPanel value={2}>
                    <Masonry spacing={1} columns={{ md: 2, xs: 1 }}>
                        {achievements.academic["2023"].map((achievement) => (
                            <AchievementCard
                                title={achievement.title}
                                additional_data={achievement.additional_data}
                                achievement={achievement.achievement}
                                img={achievement.img}
                            />
                        ))}
                    </Masonry>
                </TabPanel>
            </Tabs>
            <Typography level="h4">Практические достижения</Typography>
            <Tabs size="md" defaultValue={0}>
                <TabList color="primary">
                    <Tab>2021</Tab>
                    <Tab>2022</Tab>
                    <Tab>2023</Tab>
                </TabList>
                <TabPanel value={0}>
                    <Masonry spacing={1} columns={{ md: 2, xs: 1 }}>
                        {achievements.practical["2021"].map((achievement) => (
                            <AchievementCard
                                title={achievement.title}
                                additional_data={achievement.additional_data}
                                achievement={achievement.achievement}
                                img={achievement.img}
                            />
                        ))}
                    </Masonry>
                </TabPanel>
                <TabPanel value={1}>
                    <Masonry spacing={1} columns={{ md: 2, xs: 1 }}>
                        {achievements.practical["2022"].map((achievement) => (
                            <AchievementCard
                                title={achievement.title}
                                additional_data={achievement.additional_data}
                                achievement={achievement.achievement}
                                img={achievement.img}
                            />
                        ))}
                    </Masonry>
                </TabPanel>
                <TabPanel value={2}>
                    <Masonry spacing={1} columns={{ md: 2, xs: 1 }}>
                        {achievements.practical["2023"].map((achievement) => (
                            <AchievementCard
                                title={achievement.title}
                                additional_data={achievement.additional_data}
                                achievement={achievement.achievement}
                                img={achievement.img}
                            />
                        ))}
                    </Masonry>
                </TabPanel>
            </Tabs>
        </Grid>
    )
}