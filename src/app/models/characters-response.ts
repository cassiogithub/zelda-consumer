import { Character } from "./character";

export class CharactersResponse {
  constructor(
    public data: Array<Character>,
    public count: number,
    public success : boolean
  ) {}
}
