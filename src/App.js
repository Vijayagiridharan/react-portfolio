import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/technology/Technology';
import Resume from './components/resume/Resume';
import Resumes from './components/resume_copy/Resumes';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import useLocalStorage from 'use-local-storage'


function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="app" data-theme={theme}>
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='main'>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="education"><Resumes /></section>
                <section id="technologies"><Services /></section>
                <section id="experience"><Resume /></section>
                <section id="projects"><Portfolio /></section>
                <section id="contact"><Contact theme={theme} /></section>
            </main>
        </div>
    );
}

export default App;
