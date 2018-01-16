export const SituationExchangeType = {

    sourceType: [
        "directReport",
        "email",
        "phone",
        "fax",
        "post",
        "feed",
        "radio",
        "tv",
        "web",
        "pager",
        "text",
        "other"
    ],

    progress: [
        "draft",
        "open",
        "published",
        "closing",
        "closed"
    ],

    qualityIndex: [
        "certain",
        "veryReliable",
        "reliable",
        "probablyReliable",
        "unconfirmed"
    ],

    reality: [
        "real",
        "securityExercise",
        "technicalExercise",
        "test"
    ],

    severity: [
        "pti26_0",
        "unknown",
        "pti26_1",
        "verySlight",
        "pti26_2",
        "slight",
        "pti26_3",
        "normal",
        "pti26_4",
        "severe",
        "pti26_5",
        "verySevere",
        "pti26_6",
        "noImpact",
        "pti26_255",
        "undefined"
    ],

    sensitivity: [
        "veryHigh",
        "high",
        "medium",
        "low",
        "veryLow"
    ],

    audience: [
        "public",
        "emergencyServices",
        "staff",
        "stationStaff",
        "management",
        "infoServices"
    ],

    scopeType: [
        "general",
        "operator",
        "network",
        "route",
        "line",
        "stopPoint",
        "vehicleJourney",
        "connectionLink",
        "allPT",
        "road"
    ],

    personnelReason: [
        "pti20_0",
        "unknown",
        "pti20_1",
        "staffSickness",
        "pti20_1_Alias_1",
        "staffInjury",
        "pti20_1_Alias_2",
        "contractorStaffInjury",
        "pti20_2",
        "staffAbsence",
        "pti20_3",
        "staffInWrongPlace",
        "pti20_4",
        "staffShortage",
        "pti20_5",
        "industrialAction",
        "pti20_5_Alias_1",
        "unofficialIndustrialAction",
        "pti20_6",
        "workToRule",
        "pti20_255",
        "undefinedPersonnelProblem"
    ],

    miscellaneousReason: [
        "pti19_0",
        "unknown",
        "pti19_0_1",
        "previousDisturbances",
        "pti19_1",
        "incident",
        "pti19_1_Alias_1",
        "nearMiss",
        "pti19_1_Alias_2",
        "safetyViolation",
        "pti19_1_Alias_3",
        "signalPassedAtDanger",
        "pti19_1_Alias_4",
        "stationOverrun",
        "pti19_1_Alias_5",
        "trainDoor",
        "pti19_1_Alias_6",
        "emergencyServicesCall",
        "pti19_2",
        "bombExplosion",
        "pti19_3",
        "securityAlert",
        "pti19_3_Alias_1",
        "policeRequest",
        "pti19_3_Alias_2",
        "fireBrigadeSafetyChecks",
        "pti19_3_Alias_3",
        "unattendedBag",
        "pti19_3_Alias_4",
        "telephonedThreat",
        "pti19_3_Alias_5",
        "suspectVehicle",
        "pti19_3_Alias_6",
        "civilEmergency",
        "pti19_3_Alias_7",
        "airRaid",
        "pti19_3_Alias_8",
        "sabotage",
        "pti19_3_Alias_9",
        "bombAlert",
        "pti19_3_Alias_10",
        "attack",
        "pti19_3_Alias_11",
        "evacuation",
        "pti19_3_Alias_12",
        "terroristIncident",
        "pti19_3_Alias_13",
        "gunfireOnRoadway",
        "pti19_3_Alias_14",
        "explosion",
        "pti19_3_Alias_15",
        "explosionHazard",
        "pti19_3_Alias_16",
        "securityIncident",
        "pti19_3_Alias_17",
        "fireBrigadeOrder",
        "pti19_3_Alias_18",
        "policeActivity",
        "pti19_4",
        "fire",
        "pti19_4_Alias_1",
        "linesideFire",
        "pti19_5",
        "vandalism",
        "pti19_5_Alias_1",
        "passengerAction",
        "pti19_5_Alias_2",
        "staffAssault",
        "pti19_5_Alias_3",
        "railwayCrime",
        "pti19_5_Alias_4",
        "assault",
        "pti19_5_Alias_5",
        "theft",
        "pti19_1_Alias_6",
        "altercation ",
        "pti19_1_Alias_7",
        "illVehicleOccupants ",
        "pti19_6",
        "accident",
        "pti19_6_Alias_1",
        "fatality",
        "pti19_6_Alias_2",
        "personUnderTrain",
        "pti19_6_Alias_3",
        "personHitByTrain",
        "pti19_6_Alias_4",
        "personIllOnVehicle",
        "pti19_6_Alias_5",
        "emergencyServices",
        "pti19_6_Alias_6",
        "collision",
        "pti19_7",
        "overcrowded",
        "pti19_8",
        "insufficientDemand",
        "pti19_9",
        "lightingFailure",
        "pti19_10",
        "leaderBoardFailure",
        "pti19_11",
        "serviceIndicatorFailure",
        "pti19_12",
        "serviceFailure",
        "pti19_13",
        "operatorCeasedTrading",
        "pti19_14",
        "operatorSuspended",
        "pti19_15",
        "congestion",
        "pti19_16",
        "routeBlockage",
        "pti19_17",
        "personOnTheLine",
        "pti19_18",
        "vehicleOnTheLine",
        "pti19_18_Alias_1",
        "levelCrossingIncident",
        "pti19_19",
        "objectOnTheLine",
        "pti19_19_Alias_1",
        "fallenTreeOnTheLine",
        "pti19_19_Alias_2",
        "vegetation",
        "pti19_19_Alias_3",
        "trainStruckAnimal",
        "pti19_19_Alias_4",
        "trainStruckObject",
        "pti19_20",
        "animalOnTheLine",
        "pti19_21",
        "routeDiversion",
        "pti19_22",
        "roadClosed",
        "pti19_23",
        "roadworks",
        "pti19_23_Alias_1",
        "sewerageMaintenance",
        "pti19_23_Alias_2",
        "roadMaintenance",
        "pti19_23_Alias_3",
        "asphalting",
        "pti19_23_Alias_4",
        "paving",
        "pti19_24",
        "specialEvent",
        "pti19_24_Alias_1",
        "march",
        "pti19_24_Alias_2",
        "procession",
        "pti19_24_Alias_3",
        "demonstration",
        "pti19_24_Alias_4",
        "publicDisturbance",
        "pti19_24_Alias_5",
        "filterBlockade",
        "pti19_24_Alias_6",
        "sightseersObstructingAccess",
        "pti19_24_Alias_7",
        "holiday",
        "pti19_25",
        "bridgeStrike",
        "pti19_25_Alias_1",
        "viaductFailure",
        "pti19_26",
        "overheadObstruction",
        "pti19_27",
        "undefinedProblem",
        "pti19_15_Alias_1",
        "problemsAtBorderPost",
        "pti19_15_Alias_2",
        "problemsAtCustomsPost",
        "pti19_15_Alias_3",
        "speedRestrictions",
        "pti19_255_Alias_1",
        "logisticProblems",
        "pti19_255_Alias_2",
        "problemsOnLocalRoad"
    ],

    equipmentReason: [
        "pti21_0",
        "unknown",
        "pti21_1",
        "pointsProblem",
        "pti21_2",
        "pointsFailure",
        "pti21_3",
        "signalProblem",
        "pti21_3_Alias_1",
        "trainWarningSystemProblem",
        "pti21_3_Alias_2",
        "trackCircuitProblem",
        "pti21_4",
        "signalFailure",
        "pti21_4_Alias_1",
        "signalAndSwitchFailure",
        "pti21_5",
        "derailment",
        "pti21_6",
        "engineFailure",
        "pti21_6_Alias_1",
        "tractionFailure",
        "pti21_7",
        "breakDown",
        "pti21_8",
        "technicalProblem",
        "pti21_8_Alias_1",
        "brokenRail",
        "pti21_8_Alias_2",
        "poorRailConditions",
        "pti21_8_Alias_3",
        "wheelImpactLoad",
        "pti21_8_Alias_4",
        "lackOfOperationalStock",
        "pti21_8_Alias_5",
        "defectiveFireAlarmEquipment",
        "pti21_8_Alias_6",
        "defectivePlatformEdgeDoors",
        "pti21_8_Alias_7",
        "defectiveCctv",
        "pti21_8_Alias_8",
        "defectivePublicAnnouncementSystem",
        "pti21_8_Alias_9",
        "ticketingSystemNotAvailable",
        "pti21_8_Alias_10",
        "leveCrossingFailure",
        "pti21_9",
        "repairWork",
        "pti21_10",
        "constructionWork",
        "pti21_11",
        "maintenanceWork",
        "pti21_11_Alias_1",
        "emergencyEngineeringWork",
        "pti21_11_Alias_2",
        "lateFinishToEngineeringWork",
        "pti21_12",
        "powerProblem",
        "pti21_12_Alias_1",
        "oveheadWireFailure",
        "pti21_13",
        "fuelProblem",
        "pti21_14",
        "swingBridgeFailure",
        "pti21_15",
        "escalatorFailure",
        "pti21_16",
        "liftFailure",
        "pti21_17",
        "gangwayProblem",
        "pti21_18",
        "closedForMaintenance",
        "pti21_19",
        "fuelShortage",
        "pti21_20",
        "deicingWork",
        "pti21_21",
        "wheelProblem",
        "pti21_21_Alias_1",
        "slipperyTrack",
        "pti21_22",
        "luggageCarouselProblem",
        "pti21_255",
        "undefinedEquipmentProblem"
    ],

    environmentReason: [
        "pti22_0",
        "unknown",
        "pti22_1",
        "fog",
        "pti22_2",
        "roughSea",
        "pti22_3",
        "heavySnowFall",
        "pti22_3_Alias_1",
        "driftingSnow",
        "pti22_3_Alias_2",
        "blizzardConditions",
        "pti22_4",
        "heavyRain",
        "pti22_5",
        "strongWinds",
        "pti22_5_Alias_1",
        "stormConditions",
        "pti22_5_Alias_2",
        "stormDamage",
        "pti22_6",
        "tidalRestrictions",
        "pti22_7",
        "highTide",
        "pti22_8",
        "lowTide",
        "pti22_9",
        "ice",
        "pti22_9_Alias_1",
        "slipperiness",
        "pti22_9_Alias_2",
        "iceDrift",
        "pti22_9_Alias_3",
        "glazedFrost",
        "pti22_10",
        "frozen",
        "pti22_11",
        "hail",
        "pti22_11_Alias_1",
        "sleet",
        "pti22_12",
        "highTemperatures",
        "pti22_13",
        "flooding",
        "pti22_14",
        "waterlogged",
        "pti22_15",
        "lowWaterLevel",
        "pti22_16",
        "highWaterLevel",
        "pti22_17",
        "fallenLeaves",
        "pti22_18",
        "fallenTree",
        "pti22_19",
        "landslide",
        "pti22_255",
        "undefinedEnvironmentalProblem",
        "pti22_255_Alias_1",
        "lightningStrike",
        "pti22_255_Alias_2",
        "sewerOverflow",
        "pti22_255_Alias_3",
        "grassFire"
    ],

    publicEventReason: [
        "agriculturalShow",
        "airShow",
        "athleticsMeeting",
        "commercialEvent",
        "culturalEvent",
        "ballGame",
        "baseballGame",
        "basketballGame",
        "bicycleRace",
        "boatRace",
        "boatShow",
        "boxingTournament",
        "bullFight",
        "ceremonialEvent",
        "concert",
        "cricketMatch",
        "exhibition",
        "fair",
        "festival",
        "filmTVMaking",
        "footballMatch",
        "funfair",
        "gardeningOrFlowerShow",
        "golfTournament",
        "hockeyGame",
        "horseRaceMeeting",
        "internationalSportsMeeting",
        "majorEvent",
        "marathon",
        "market",
        "match",
        "motorShow",
        "motorSportRaceMeeting",
        "parade",
        "procession",
        "raceMeeting",
        "rugbyMatch",
        "severalMajorEvents",
        "show",
        "showJumping",
        "sportsMeeting",
        "stateOccasion",
        "tennisTournament",
        "tournament",
        "tradeFair",
        "waterSportsMeeting",
        "winterSportsMeeting",
        "other"
    ],
}