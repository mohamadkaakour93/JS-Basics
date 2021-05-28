
const stringSize = (text) => {
    return text.length;

}
const replaceCharacterE = (text) => {
    let rep = text.replace("e"," ");
    return rep ;

}
const concatString = (text1, text2) => {
    let conc = text1.concat(text2)
    return conc;

}
const showChar5 = (text) => {
    return text.charAt(4);

}
const showChar9 = (text) => {
    return text.substring(0, 9);

}
const toCapitals = (text) => {
    return text.toUpperCase();

}
const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return (typeof text == 'string'); 

}

const getExtension = (text) => {
    return text.split('.').pop();

}
const countSpaces = (text) => {
    let counter = 0;
    for(let i=0;i<text.length;i++){
        if(text[i] == ' '){
            counter++;
        }
    }
    return counter;

}
const InverseString = (text) => {
    return text.split("").reverse().join("");

}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
    return Math.abs(num);

}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);

}
const circleSurface = (radius) => {
    return Math.round(Math.PI * (Math.pow(radius, 2)));

}
const hypothenuse = (ab, ac) => {
    let sum = (ab ** 2) + (ac ** 2);
    let hypotenuse = Math.sqrt(sum);
    return hypotenuse;

}
const BMI = (weight, height) => {
    const bmi   = weight / (height * height);
    const result = bmi.toFixed(2);
    return parseFloat(result) ;

}

const createLanguagesArray = () => {
    

}

const createNumbersArray = () => {
    
}

const replaceElement = (languages) => {
    
}

const addElement = (languages) => {
    
}

const addNumberElement = (numbers) => {
    
}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {
}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {
}

const invertArr = (social_arr) => {
}