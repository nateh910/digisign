import CacheInterface from "../cache/cache";
import MutexInterface from "../mutex/mutex";

export default abstract class RequestInterface {
  cache: CacheInterface; // local storage of read items
  mutex: MutexInterface; // JS object proxy

  get_organization() {
    throw new Error("Method not implemented.");
  }
  create_organization() {
    throw new Error("Method not implemented.");
  }
  update_organization() {
    throw new Error("Method not implemented.");
  }
  remove_organization() {
    throw new Error("Method not implemented.");
  }

  get_group() {
    throw new Error("Method not implemented.");
  }
  create_group() {
    throw new Error("Method not implemented.");
  }
  update_group() {
    throw new Error("Method not implemented.");
  }
  remove_group() {
    throw new Error("Method not implemented.");
  }

  get_slide() {
    throw new Error("Method not implemented.");
  }
  create_slide() {
    throw new Error("Method not implemented.");
  }
  update_slide() {
    throw new Error("Method not implemented.");
  }
  remove_slide() {
    throw new Error("Method not implemented.");
  }

  get_tag() {
    throw new Error("Method not implemented.");
  }
  create_tag() {
    throw new Error("Method not implemented.");
  }
  update_tag() {
    throw new Error("Method not implemented.");
  }
  remove_tag() {
    throw new Error("Method not implemented.");
  }

  get_user() {
    throw new Error("Method not implemented.");
  }
  create_user() {
    throw new Error("Method not implemented.");
  }
  update_user() {
    throw new Error("Method not implemented.");
  }
  remove_user() {
    throw new Error("Method not implemented.");
  }
}
