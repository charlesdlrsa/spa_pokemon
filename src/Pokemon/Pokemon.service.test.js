import { getFirstAbility, convertPoundsToKilograms } from './Pokemon.service.js';
import React from 'react';

const emptyPokemon = {
    abilities: []
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ]
};


describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
});

describe('Tests for convertPoundsToKilograms', () => {
    it('Should return 5kg for 10lbs', () => {
        expect(convertPoundsToKilograms(10)).toEqual(5);
    })
});
