/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            SKILL_NAME: 'Physics Facts',
            GET_FACT_MESSAGE: 'Here\'s your fact: ',
            HELP_MESSAGE: 'You can say tell me a physics fact, or, you can say start a physics trivia... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            FALLBACK_MESSAGE: 'The Physics Facts skill can\'t help you with that.  It can help you discover facts about physics if you say tell me a physics fact. What can I help you with?',
            FALLBACK_REPROMPT: 'What can I help you with?',
            ERROR_MESSAGE: 'Sorry, an error occurred.',
            STOP_MESSAGE: 'Goodbye!',
            FACTS:
            [
                'Gelatin doesn’t break if you tap it because of surface tension.',
                'Water slows down light.',
                'Sound creates heat.',
                'You can yell at your soup to warm it.',
                'Time goes faster at the top of the building than at the bottom.',
            ],
        }
    }
}