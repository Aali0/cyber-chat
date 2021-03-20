import translate from 'translate';


const TranslateApi = (text, language) => {

    const userInput = text;
   

    async function translateString(str, translateTo ) {
        translate.engine = 'libre';
        const translated_string = await translate(str, translateTo);
        console.log(translated_string);
    }

    translateString(userInput, language)

} 

export default TranslateApi;