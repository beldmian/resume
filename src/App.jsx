import data from './data';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import { Container, Grid, Box } from '@mui/material';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy';
import ActionsButton from './components/ActionsButton';
import { generatePDF } from './scripts/gen_pdf';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: 'white',
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: 'black',
        },
      },
    },
  },
});

gsap.registerPlugin(ScrollTrigger);

function App() {
  const main = useRef();
  const hero = useRef();
  const item = useRef();
  useEffect(() => {
    console.log(data)
    if (item.current.offsetWidth > 700) {
      gsap.to(hero.current, {
        scrollTrigger: {
          trigger: main.current,
          start: "top top",
          end: "+=10%",
          toggleActions: "play none none reverse",
          // markers: true
        },
        duration: 0.5,
        stagger: 0.1,
        height: "auto",
        borderRadius: "10px",
        display: "flex",
        width: item.current.offsetWidth,
        marginTop: "10%",
      });
    } else {
      hero.current.style.height = "auto"
    }
  }, []);

  return (
    <CssVarsProvider
      defaultMode="dark"
      theme={theme}
      disableNestedContext
      modeStorageKey="demo_identify-system-mode"
    >
      <div ref={main}>
        <Box ref={hero} sx={{ margin: "auto", width: "100%", bgcolor: "background.default", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: 3 }}>
          <Container sx={{ p: 3 }}>
            <Hero 
              name={data.header.name}
              location={data.header.location}
              socials={data.header.socials}
              photo={data.header.photo}
              onGetPDF={() => generatePDF(data)}
            />
          </Container>
        </Box>
        <Container className="App" sx={{ my: 3 }}>
          <Grid container direction="column" gap={2}>
            <Grid ref={item} item sx={{ bgcolor: "background.default", p: 3, borderRadius: "10px", boxShadow: 3 }}>
              <About
                text={data.about.text}
                key_points={data.about.key_points}
              />
            </Grid>
            <Grid item sx={{ bgcolor: "background.default", p: 3, borderRadius: "10px", boxShadow: 3 }}>
              <Education
                education={data.education}
              />
            </Grid>
            <Grid item sx={{ bgcolor: "background.default", p: 3, borderRadius: "10px", boxShadow: 3 }}>
              <WorkExperience
                work_experience={data.work_experience}
              />
            </Grid>
            <Grid item sx={{ bgcolor: "background.default", p: 3, borderRadius: "10px", boxShadow: 3 }}>
              <Projects
                projects={data.projects}
              />
            </Grid>
            <Grid item sx={{ bgcolor: "background.default", p: 3, borderRadius: "10px", boxShadow: 3 }}>
              <Achievements
                achievements={data.achievements}
              />
            </Grid>
          </Grid>
        </Container>
        <ActionsButton/>
      </div>
    </CssVarsProvider>
  );
}

export default App;
