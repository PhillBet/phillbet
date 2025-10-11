import { useI18n } from '../i18n'
export default function Projects(){
    const { t } = useI18n()
    return (
        <div className="app">
            <div className="bg"><div className="blob blob1"/><div className="blob blob2"/><div className="blob vignette"/></div>
            <main className="card">
                <h1>{t('projects_title')}</h1>
                <div className="grid two">
                    <section className="section" id="programming">
                        <h2>{t('cat_programming')}</h2>
                        <p className="muted">Próximamente.</p>
                    </section>
                    <section className="section" id="literature">
                        <h2>{t('cat_literature')}</h2>
                        <p className="muted">Próximamente.</p>
                    </section>
                    <section className="section" id="music">
                        <h2>{t('cat_music')}</h2>
                        <p className="muted">Próximamente.</p>
                    </section>
                </div>
            </main>
        </div>
    )
}