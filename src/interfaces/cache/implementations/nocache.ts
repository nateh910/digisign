import io from '../../io/implementations/noio';
import CacheInterface from '../cache'
export default class NoCache implements CacheInterface {
    io: io;
}