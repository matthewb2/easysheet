import en from './en'
import ko from './ko'
import zh from './zh'
import es from './es'
import zh_tw from './zh_tw'
import Store from '../store';

export const locales = {en,ko,zh,es,zh_tw}

function locale(){
    return locales[Store.lang];
}

export default locale;