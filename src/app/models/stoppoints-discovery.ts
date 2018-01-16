export class StoppointsDiscovery {
    public StopPointRef: Value;
    public StopName: Value;
    public Location: Location;
}

export class Value {
    constructor(value?: string) {
        this.value = value;
    }
    value: string;
}

export class Location {
    Longitude: number;
    Latitude: number;
}
