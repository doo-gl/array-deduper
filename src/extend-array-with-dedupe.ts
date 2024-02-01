import {dedupe} from "./index";

declare global {
  interface Array<T> {
    dedupe: <T> (keyMapper?:(i:T) => string) => Array<T>
  }
}

Array.prototype.dedupe = function<T>(keyMapper?:(i:T) => string):Array<T> {
  return dedupe(this, keyMapper)
}