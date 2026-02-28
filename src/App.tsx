import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  BrassLessons,
  Contact,
  Navigation,
  Footer,
  NotFound,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <Routes>
            <Route path="/" element={
                <FadeIn transitionDuration={700}>
                    <Main/>
                    <Expertise/>
                    <Project/>
                    <Timeline/>
                    <Contact/>
                </FadeIn>
            }/>
            <Route path="/lessons" element={
                <FadeIn transitionDuration={700}>
                    <BrassLessons/>
                </FadeIn>
            }/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
    </div>
    );
}

export default App;