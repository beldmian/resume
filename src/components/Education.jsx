import { Typography, Grid } from "@mui/joy";
import EducationCard from "./EducationCard";

export default function Education({ education }) {
    return (
        <Grid container gap={1} direction="column">
            <Typography level="h4">Образование</Typography>
            <Grid container spacing={1}>
                <Grid item md={12} xs={12}>
                    {education.map((education) => (
                        <EducationCard
                            type={education.type}
                            name={education.name}
                            description={education.description}
                            profile={education.profile}
                            startDate={education.startDate}
                            endDate={education.endDate}
                        />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}