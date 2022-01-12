import { Implementation } from "../main_implementations/implementations"

export default class Settings {
    impl:Implementation
    load_args(cli_args){

    }
    get_impl() {
        return this.impl
    }

}