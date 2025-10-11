import { motion } from 'framer-motion'
import { useI18n } from '../i18n'

const Section = ({ title, children }) => (
    <section className="section">
        <h2>{title}</h2>
        {children}
    </section>
)

export default function CV(){
    const { t, data } = useI18n()
    const { profile, summary, experience, education, skills, competencies } = data

    return (
        <div className="app">
            <div className="bg"><div className="blob blob1"/><div className="blob blob2"/><div className="blob vignette"/></div>
            <motion.main className="card" initial={{ opacity: 0.001, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <header className="header">
                    <h1 className="title">{profile.name}</h1>
                    <p className="muted">{profile.contactMeForMore}</p>
                    <div className="contact">
                        {/*<a href={`tel:${profile.phone.replace(/\s/g,'')}`}>{profile.phone}</a>*/}
                        <a href={profile.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
                        <span>•</span>
                        <a href={`mailto:${profile.email}`}>{profile.email}</a>
                        <span>•</span>
                        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
                        <span>•</span>
                        <a href={profile.website} target="_blank" rel="noreferrer">Sitio</a>
                    </div>
                </header>

                <Section title={t('section_profile')}>
                    <ul className="list">
                        {summary.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                </Section>

                <Section title={t('section_experience')}>
                    {experience.map((exp, idx) => (
                        <motion.div key={idx} className="exp" initial={{ opacity: 0.001, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: 0.4 }}>
                            <div className="exp-head">
                                <h3>{exp.org}</h3>
                                <div className="role-period">
                                    <span className="role">{exp.role}</span>
                                    <span className="period">{exp.period}</span>
                                </div>
                            </div>
                            <ul className="list bullets">
                                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                            </ul>
                        </motion.div>
                    ))}
                </Section>

                <div className="grid two">
                    <Section title={t('section_education')}>
                        <ul className="list">
                            {education.map((e, i) => (
                                <li key={i} className="edu">
                                    <strong>{e.title}</strong>
                                    <span className="muted">{e.place}</span>
                                    <span className="period">{e.period}</span>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <Section title={t('section_skills')}>
                        <ul className="list">
                            {skills.map((s, i) => (
                                <li key={i}><strong>{s.label}:</strong> {s.value}</li>
                            ))}
                        </ul>
                    </Section>
                </div>

                <Section title={t('section_competencies')}>
                    <div className="chips">
                        {competencies.map((c, i) => <span className="chip" key={i}>{c}</span>)}
                    </div>
                </Section>
            </motion.main>
        </div>
    )
}