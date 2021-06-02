import NotImplementedError from "../errors/errors"

export default interface RequestInterface extends OrganizationRequests {

    create_organization()
    remove_organization()

}