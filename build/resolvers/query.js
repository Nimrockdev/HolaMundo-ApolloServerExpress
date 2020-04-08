"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query = {
    Query: {
        hola() {
            return 'Hola Mundo';
        },
        holaConNombre(__, { nombre }) {
            return `Hola Mundo ${nombre}!!`;
        },
        holaGraphQL() {
            return 'holaGraphQL';
        }
    }
};
exports.default = query;
