import { Grid, Typography } from "@mui/joy";
import ProjectCard from "./ProjectCard";
import { Masonry } from "@mui/lab";
import { useEffect, useState } from "react";

export default function Projects({ projects }) {
    let [repos, setRepos] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/beldmian/repos?per_page=100")
            .then((response) => response.json())
            .then((data) => setRepos(data))
        console.log(repos)
        console.log(repos.filter((r) => r.name === "yastation"))
    }, [])
    return (
        <Grid container gap={1} direction="column">
            <Typography level="h4">Проекты</Typography>
            <Masonry container spacing={1} columns={{ md: 2, xs: 1 }}>
                {projects.map((project) => (
                    <ProjectCard
                        name={project.name}
                        description={project.description}
                        links={project.links}
                        tags={project.tags}
                        stars={repos.filter((r) => r.name === project.name).map((r) => r.stargazers_count)[0]}
                    />
                ))}
            </Masonry>
        </Grid>
    )
}