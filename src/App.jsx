import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { I18nProvider, useI18n } from './i18n'
import Home from './pages/Home'
import CV from './pages/CV'
import Projects from './pages/Projects'
import LanguageSwitcher from './components/LanguageSwitcher'
import Logo from '../src/assets/phill_logo_pixel.svg'

function Nav(){
    const { t } = useI18n()
    return (
        <nav className="nav">
            <Link to="/" className="brand" title="Home">
                <img
                    src={Logo}
                    alt="PhillBet logo"
                    width="28"
                    height="28"
                    style={{ display: 'block' }}
                />
            </Link>
            <div className="spacer"/>
            <Link to="/" className="navlink">{t('menu_home')}</Link>
            <Link to="/cv" className="navlink">{t('menu_cv')}</Link>
            <Link to="/projects" className="navlink">{t('menu_projects')}</Link>
            <LanguageSwitcher />
        </nav>
    )
}

export default function App(){
    const location = useLocation()
    return (
        <I18nProvider>
            <Nav />
            <AnimatePresence mode="wait">
                <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }} transition={{ duration: 0.1 }}>
                    <Routes>
                        <Route index element={<Home/>} />
                        <Route path="/" element={<Home/>} />
                        <Route path="/cv" element={<CV/>} />
                        <Route path="/projects" element={<Projects/>} />
                        <Route path="*" element={<Navigate to="/" replace />} /> {/* ← fallback */}
                    </Routes>
                </motion.div>
            </AnimatePresence>
        </I18nProvider>
    )
}