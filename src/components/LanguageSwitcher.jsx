import { useI18n } from '../i18n'

export default function LanguageSwitcher(){
    const { lang, setLang } = useI18n()
    return (
        <div className="lang">
            <button className={lang==='es'?'active':''} onClick={()=>setLang('es')}>ES</button>
            <span>/</span>
            <button className={lang==='en'?'active':''} onClick={()=>setLang('en')}>EN</button>
        </div>
    )
}