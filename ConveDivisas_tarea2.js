/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

// i18n dependencies. i18n is the main module, sprintf allows us to include variables with '%s'.
const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');


const languageStrings = {
  en: {
    translation: {
      WELCOME_MESSAGE: 'Welcome Thania to your currency converter, what currency do you want to convert?',
      HELP_MESSAGE: 'I can help you to convert some kind of currency, say something like "Dollar to Euro converter"',
      GOODBYE_MESSAGE: 'May the good practices be with you!!',
       FALLBACK_MESSAGE: 'Sorry, I don\'t know about that. Please try again.',
      ERROR_MESSAGE: 'Sorry, there was an error. Please try again.',
      MDolarEuro:'%s dollars equals %s euros',
      MPESOEuro:'%s pesos equals %s euros',
       MPESODolar:'%s pesos equals %s dollars',
       MDolarPeso:'%s dollar equals %s pesos',
       MEuroPeso:'%s euro equals %s pesos',
       MEuroDolar:'%s euro equals %s dollars',
       Msj5:'Enter only positive numbers'
    }
  },
  es:{
    translation: {
      WELCOME_MESSAGE: 'Bienvenida Thania a tu conversor de divisas, que moneda deseas convertir?',
      HELP_MESSAGE: 'pued ayudarte a convertir algun tipo de moneda,  di algo como "convertidor Dolar a euro"',
      GOODBYE_MESSAGE: 'Que las buenas prácticas te acompañen!!',
      FALLBACK_MESSAGE: 'Lo siento, no se nada sobre eso. Por favor inténtalo otra vez.',
      ERROR_MESSAGE: 'Lo siento, ha habido un problema. Por favor inténtalo otra vez.',
      MPESOEuro:'%s pesos equivale %s euros',
      MPESODolar:'%s pesos equivale %s dolar',
      MDolarPeso:'%s dolar equivale %s pesos',
      MEuroPeso:'%s euro equivale %s pesos',
      MEuroDolar:'%s euro equivale %s dolar',
     Msj5:'Ingresa sólo numeros positivos'
      
    }
  }
}


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
          const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('WELCOME_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


//1
const convertidorDolarEuro = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'convertidorDolarEuro';
    },
    handle(handlerInput) {
        const Dolarr = parseFloat(handlerInput.requestEnvelope.request.intent.slots.Dolarr.value);
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

        if (Dolarr>=1 ){
            const valor = 0.92;
        const resultado = (Dolarr*valor).toFixed(2);
       
   const speakOutput =  requestAttributes.t('MDolarEuro',Dolarr,resultado);

        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
    }
    else{
        const speakOutput =  requestAttributes.t('Msj5');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
    }
};

//2
const convertidorPesoEuro = {
       canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'convertidorPesoEuro';
    },
    handle(handlerInput) {
        const peso = handlerInput.requestEnvelope.request.intent.slots.peso.value;
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

        if (peso>=1){
            const valor = 0.052;
        const resultado = (peso * 1 /valor).toFixed(2);
        const speakOutput = requestAttributes.t('MPESOEuro',peso,resultado);
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
    }
    else{
         const speakOutput =  requestAttributes.t('Msj5');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
    }  
};

//3
const convertidorPesoDolar = {
       canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'convertidorPesoDolar';
    },
    handle(handlerInput) {
        const pesos = handlerInput.requestEnvelope.request.intent.slots.pesos.value;
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

        if (pesos>=1){
            const valor = 0.057;
        const resultado = (pesos/valor).toFixed(2);
        const speakOutput = requestAttributes.t('MPESODolar',pesos,resultado);
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
    }
    else{
      const speakOutput =  requestAttributes.t('Msj5');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
    }  
};

//4
const convertidorDolarPeso = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'convertidorDolarPeso';
    },
    handle(handlerInput) {
        const dolar = handlerInput.requestEnvelope.request.intent.slots.dolar.value;
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

        if (dolar>=1){
            const valor = 17.50;
        const resultado = (dolar*valor).toFixed(2);
        const speakOutput = requestAttributes.t('MDolarPeso',dolar,resultado);
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
    }
    else{
         const speakOutput =  requestAttributes.t('Msj5');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
    }
};

//5
const converidorEuroPeso = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'converidorEuroPeso';
    },
    handle(handlerInput) {
        const euros = handlerInput.requestEnvelope.request.intent.slots.euros.value;
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

        if (euros>=1){
            const valor = 18.99;
        const resultado = (euros*valor).toFixed(2);
        const speakOutput =requestAttributes.t('MEuroPeso',euros,resultado);
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
    }
    else{
          const speakOutput =  requestAttributes.t('Msj5');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
    }
};

//6
const convertidorEuroDolar = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'convertidorEuroDolar';
    },
    handle(handlerInput) {
        const euro = handlerInput.requestEnvelope.request.intent.slots.euro.value;
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

        if (euro>=1){
            const valor = 1.2;
        const resultado = (euro*valor).toFixed(2);
        const speakOutput = requestAttributes.t('MEuroDolar',euro,resultado);
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt(speakOutput)
            .getResponse();
    }
    else{
         const speakOutput =  requestAttributes.t('Msj5');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
     }
    }
};



const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('HELP_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('GOODBYE_MESSAGE');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('FALLBACK_MESSAGE');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
          const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('ERROR_MESSAGE');
        console.log(`~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// This request interceptor will log all incoming requests to this lambda
const LoggingRequestInterceptor = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope.request)}`);
    }
};

// This response interceptor will log all outgoing responses of this lambda
const LoggingResponseInterceptor = {
    process(handlerInput, response) {
      console.log(`Outgoing response: ${JSON.stringify(response)}`);
    }
};
// This request interceptor will bind a translation function 't' to the requestAttributes.
const LocalizationInterceptor = {
  process(handlerInput) {
    const localizationClient = i18n.use(sprintf).init({
      lng: handlerInput.requestEnvelope.request.locale,
      fallbackLng: 'en',
      overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
      resources: languageStrings,
      returnObjects: true
    });

    const attributes = handlerInput.attributesManager.getRequestAttributes();
    attributes.t = function (...args) {
      return localizationClient.t(...args);
    }
  }
}
/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        convertidorDolarEuro,
        convertidorPesoEuro,
        convertidorPesoDolar,
        convertidorDolarPeso,
        converidorEuroPeso,
        convertidorEuroDolar,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
  .addRequestInterceptors(
        LocalizationInterceptor,
        LoggingRequestInterceptor)
    .addResponseInterceptors(
        LoggingResponseInterceptor)
    .lambda();