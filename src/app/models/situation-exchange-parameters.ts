export default class SituationEchangeParameters {

    version: string;
    requestTimestamp: string;  // XMLGregorianCalendar
    messageIdentifier: string;
    previewInterval: string;  // Duration
    startTime: string;  // XMLGregorianCalendar
    vehicleMode: string;
    severity: string;
    predictability: string;
    keywords: string;
    operatorRef: string;
    networkRef: string;
    lineRef: string[];
    stopPointRef: string[];
    language: string;
    includeTranslations: boolean;
    maximumNumberOfSituationElements: number;

}