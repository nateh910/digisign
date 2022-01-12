// list all available implementations of main and return a default of in-memory

import CacheInterface from "../interfaces/cache/cache";
import NoCache from "../interfaces/cache/implementations/nocache"
class Implementation
{
    cache: CacheInterface
    
}
class MemoryImplementation implements Implementation{
    cache: NoCache
}

export {
    Implementation,
    MemoryImplementation
}