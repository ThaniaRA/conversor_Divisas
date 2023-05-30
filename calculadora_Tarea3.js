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
     WELCOME_MESSAGE:'Welcome Thania to your calculator, what operation do you want to perform?',
      HELP_MESSAGE:'can I help you do some kind of addition, subtraction, multiplication or division?',
      GOODBYE_MESSAGE:'May the good practices be with you!!',
      FALLBACK_MESSAGE:'Sorry, I dont know anything about that. Please try again.',
      ERROR_MESSAGE:'Sorry, there was a problem. Please try again.',
      CalSum:'%s plus %s is %s',
     CalRestq:'%s minus %s is %s',
      CalMulti:'%s by %s is %s',
      CalDiv:'%s by %s is %s',
       Msj5:'Enter only positive numbers'
    
    }
  },
  es:{
    translation: {
      WELCOME_MESSAGE:'Bienvenida Thania a tu calculadora , que operacion deseas realizar?',
      HELP_MESSAGE:'pued ayudarte a realizar algun tipo de suma, resta, multiplicacion o divicion?',
      GOODBYE_MESSAGE:'Que las buenas prácticas te acompañen!!',
      FALLBACK_MESSAGE:'Lo siento, no se nada sobre eso. Por favor inténtalo otra vez.',
      ERROR_MESSAGE: 'Lo siento, ha habido un problema. Por favor inténtalo otra vez.',
      CalSum:'%s mas %s es %s',
     CalRestq:'%s menos %s es %s',
     CalMulti:'%s por %s es %s',
      CalDiv:'%s entre %s es %s',
       Msj5:'Enter only positive numbers'
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
const calculaSuma = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'calculaSuma';
    },
    handle(handlerInput) {
        
        const numA = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numA.value);
        const numB = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numB.value);
          const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
if (numA,numB>=1){
        const resultado = numA + numB;
        const speakOutput = requestAttributes.t('CalSum',numA,numB,resultado);
        
}
else{
     const speakOutput =  requestAttributes.t('Msj5');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
      
     }
    }
};


const calculaResta = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'calculaResta';
    },
    handle(handlerInput) {
         const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const numC = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numC.value);
        const numD = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numD.value);

        const resultado = numC - numD;
         const speakOutput = requestAttributes.t('CalRestq',numC,numD,resultado);
       

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};


const calcularMulti = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'calcularMulti';
    },
    handle(handlerInput) {
         const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const numE = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numE.value);
        const numF = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numF.value);

        const resultado = numE * numF;
        const speakOutput = requestAttributes.t('CalMulti',numE,numF,resultado);
     

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const calculaDivicion = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'calculaDivicion';
    },
    handle(handlerInput) {
         const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const numG = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numG.value);
        const numH = parseFloat(handlerInput.requestEnvelope.request.intent.slots.numH.value);

        const resultado = numG / numH;
        const speakOutput = requestAttributes.t('CalDiv',numG,numH,resultado);
      
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
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
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

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
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
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
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

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
        calculaSuma,
        calculaResta,
        calcularMulti,
        calculaDivicion,
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