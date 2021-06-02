export default class Utils {

    static now_ns(){
        return process.hrtime()[1]
    }

    static create_graph_id(...args){
        return [...args].join(',')
    }

    static create_id(type, name, parent_id=null){
        let id = [type, (name.replaceAll(' ', '')), this.now_ns()].join('_')

        if (parent_id != null)
            id = this.create_graph_id(parent_id, id)
            
        return id.toLowerCase();
    }

    static clean_name(name) {
        return name.replaceAll(/[_() @]/g, '')
    }

  }