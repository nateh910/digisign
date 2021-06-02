import Utils from "./utils";

export default class Schema {
  organization(name: string) {
    return {
      _type: "organization",
      id: Utils.create_id("organization", name),
      name,
      profile: {},
      group_ids: {},
      slide_ids: {},
      admin_ids: {},
      member_ids: {},
    };
  }

  group(organization_id: string, name: string) {
    return {
      _type: "group",
      id: Utils.create_id("group", name, organization_id),
      name,
      slide_ids: {},
      settings: {},
    };
  }

  slide(organization_id: string, name: string) {
    return {
      _type: "slide",
      id: Utils.create_id("slide", name, organization_id),
      name,
      content_ids: {},
    };
  }

  user(name: string, email: string) {
    return {
      _type: "user",
      id: Utils.create_id("user", name),
      name: Utils.clean_name(name),
      organization_ids: {},
      profile: {
        first_name: "",
        last_name: "",
        birthday: "",
      },
    };
  }

  tag(name: string, description: string) {
    return {
      _type: "tag",
      id: Utils.clean_name(name),
      name,
      description,
    };
  }

  display() {
    return {
      _type: "display",
    };
  }

  device() {
    return {
      _type: "device",
    };
  }

  slide_content() {
    return {
      _type: "content",
    };
  }

  contact_point(
    type: string,
    address: string,
    primary: Boolean = false,
    active: Boolean = false
  ) {
    return {
      _type: type.toLowerCase(),
      address,
      primary,
      active: true,
    };
  }
}
