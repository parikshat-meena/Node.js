// Third Party Modules

//Chalk Animation 
import chalkAnimation from 'chalk-animation';
import { Module } from 'module';
chalkAnimation.rainbow('Lorem ipsum dolor sit amet',2);

// Validator
import validator from 'validator';
console.log(validator.contains("Hello world","World"))
console.log(validator.isEmail("amit.com"))
console.log(validator.isEmail("Amit@bs.com"))
console.log(validator.isUppercase("Amit@bs.com"))