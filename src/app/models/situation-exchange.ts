export class SituationExchange {

    public CreationTime: string; // XMLGregorianCalendar
    public ParticipantRef: Value= new Value();
    public SituationNumber: Value= new Value();
    public Version: Value = new Value(); // BigInteger
    public Source: SituationSource = new SituationSource();
    public Progress: string; // Enum
    public QualityIndex: string; // Enum
    public Reality: string; // Enum
    // ValidityPeriod: string;
    // Repetitions: string;
    // PublicationWindow: string;
    public UnknownReason: string; // Enum
    public MiscellaneousReason: string; // Enum
    public PersonnelReason: string; // Enum
    public EquipmentReason: string; // Enum
    public EnvironmentReason: string; // Enum
    public UndefinedReason: string; // Enum
    public PublicEventReason: string; // Enum
    public Severity: string; // Enum
    public Sensitivity: string; // Enum
    public Audience: string; // Enum
    public ScopeType: string; // Enum
    public Keywords: string;
    public Summary: Value[];
    public Description: Value[];
    // InfoLinks: string;
    // Affects: string;
    // Consequences: string;
    // PublishingActions: string;
}

export class Value {
    constructor(value?: string) {
        this.value = value;
    }
    value: string;
}

export class SituationSource {
    SourceType: string; // Enum
}

