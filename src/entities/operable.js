import { Actor } from "./actor.js";
import Factory from "../utils/factory.js";

export default class Operables extends Factory {}

Operables.register(
    class Switch extends Actor {

    }
);

Operables.register(
    class Door extends Actor {
        
    }
);