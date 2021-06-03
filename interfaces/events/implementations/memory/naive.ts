import EventInterface from "../../events";

export default class MemoryEventsNaive implements EventInterface {
  events_log: String[] = [];
  service_logs: Object = {};
  latest_event: String = null;

  add_event(event: String) {
    this.events_log.push(this.latest_event);
    this.latest_event = event;
  }

  add_events(events: String[]) {
    for (let event in events) {
      this.add_event(event);
    }
  }

  list_events(count: Number) {
    if (count != null) {
      return this.events_log.slice(-count);
    }
    return this.events_log;
  }

  events_since(event: string, service: String) {
    return this.events_log.slice(-this.events_log.indexOf(event));
  }
}
