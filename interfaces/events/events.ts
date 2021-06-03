export default abstract class EventInterface {
    add_event(event:String) {
        throw new Error("Method not implemented.");
    }
    add_events(events: Array<String>) {
        throw new Error("Method not implemented.");
    }
    list_events(count:Number = null) {
        throw new Error("Method not implemented.");
    }
    events_since(event:string, service:String = null) {
        throw new Error("Method not implemented.");
    }
}