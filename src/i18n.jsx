import React, { createContext, useContext, useMemo, useState } from 'react'
import * as es from './locales/es'
import * as en from './locales/en'

const I18nCtx = createContext()

export function I18nProvider({ children }){
    const [lang, setLang] = useState('es')
    const dict = lang === 'es' ? es : en
    const value = useMemo(()=>({ lang, setLang, t: (k)=> dict.strings[k] ?? k, data: dict.data }),[lang])
    return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>
}
export function useI18n(){ return useContext(I18nCtx) }