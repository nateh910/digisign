import events from '../../events/implementations/memory/naive';
import MutexInterface from '../mutex'
export default class NaiveMutex implements MutexInterface {
    events: events;
}