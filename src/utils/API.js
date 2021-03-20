import translate from 'translate';

const TranslateApi = (text) => {

    const userInput = text;
    
    // english, spanish, german, korean, arabic
    // const languageList = [ 'en', 'es', 'de', 'ko', 'ar'];




    async function translateString(str, translateTo ) {
        translate.engine = 'libre';
        const translated_string = await translate(str, translateTo);
        console.log(translated_string);
    }

    translateString(userInput, 'es')

} 

export default TranslateApi;