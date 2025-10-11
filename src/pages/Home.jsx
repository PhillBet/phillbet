import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Home(){
    const { t } = useI18n()
    return (
        <div className="home">
            <div className="bg">
                <div className="blob blob1" />
                <div className="blob blob2" />
                <div className="blob vignette" />
            </div>
            <motion.div className="hero" initial={{ opacity: 1, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
                <h1>{t('hero_title')}</h1>
                <p className="sub">{t('hero_sub')}</p>
                <div className="menu">
                    <Link to="/cv" className="btn primary">{t('hero_cta_cv')}</Link>
                    <Link to="/projects" className="btn">{t('hero_cta_projects')}</Link>
                </div>
            </motion.div>

            <div className="cards">
                <Card title={t('menu_cv')} to="/cv" desc="Currículum vitae / Resume"/>
                <Card title={t('cat_programming')} to="/projects#programming" desc="Ingeniería y videojuegos"/>
                <Card title={t('cat_literature')} to="/projects#literature" desc="Relatos y textos"/>
                <Card title={t('cat_music')} to="/projects#music" desc="Piezas y ejercicios"/>
            </div>
        </div>
    )
}

function Card({ title, desc, to }){
    return (
        <motion.div className="card homecard" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .5 }}>
            <h3>{title}</h3>
            <p className="muted">{desc}</p>
            <Link className="link" to={to}>→</Link>
        </motion.div>
    )
}