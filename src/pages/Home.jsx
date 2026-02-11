import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

export default function Home(){
    const { translation } = useI18n()
    return (
        <div className="home">
            <div className="bg">
                <div className="blob blob1" />
                <div className="blob blob2" />
                <div className="blob vignette" />
            </div>
            <motion.div className="hero" initial={{ opacity: 1, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
                <h1>{translation('hero_title')}</h1>
                <p className="sub">{translation('hero_sub')}</p>
                <div className="menu">
                    <Link to="/cv" className="btn primary">{translation('hero_cta_cv')}</Link>
                    <Link to="/projects" className="btn">{translation('hero_cta_projects')}</Link>
                </div>
            </motion.div>

            <div className="cards">
                <Card title={translation('menu_cv')} to="/cv" desc={translation('cv_desc')}/>
                <Card title={translation('cat_programming')} to="/projects#programming" desc={translation('programming_desc')}/>
                <Card title={translation('cat_literature')} to="/projects#literature" desc={translation('literature_desc')}/>
                <Card title={translation('cat_music')} to="/projects#music" desc={translation('music_desc')}/>
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