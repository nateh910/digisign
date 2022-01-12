import { Implementation } from "../main_implementations/implementations"

export default class Settings {
    impl:Implementation
    implementation_name:string = "memory"
    port:number = 8000

    // #learning about dependency injection

    private constructor(cli_args:object) {
        Object.assign(this, cli_args);
    }

    get_impl() {
        return this.impl
    }

}