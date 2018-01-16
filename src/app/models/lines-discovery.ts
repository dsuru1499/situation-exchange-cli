export class LinesDiscovery {
    public LineRef: Value;
    public LineName: Value;
    public Monitored: boolean;
    public Destinations: Destinations;
}

export class Value {
    constructor(value?: string) {
        this.value = value;
    }
    value: string;
}

export class Destinations {

}

