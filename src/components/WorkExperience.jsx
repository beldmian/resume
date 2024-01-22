import { Grid, Typography } from "@mui/joy";
import WorkExperienceCard from "./WorkExperienceCard";

export default function WorkExperience({ work_experience }) {
    return (
        <Grid container gap={1} direction="column">
            <Typography level="h4">Опыт работы</Typography>
            <Grid container spacing={1}>
                {work_experience.map((work_experience) => (
                    <Grid item md={12} xs={12}>
                            <WorkExperienceCard
                                position={work_experience.position}
                                company={work_experience.company}
                                startDate={work_experience.startDate}
                                endDate={work_experience.endDate}
                                tasks={work_experience.tasks}
                            />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}