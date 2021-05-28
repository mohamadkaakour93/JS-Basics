
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
    return ["Html","CSS","Java","PHP"];
}
const createNumbersArray = () => {
    const arr= [];
    for(let i=0 ; i<6 ; i++){
        arr.push(i);
    }
    return arr;
}

const replaceElement = (languages) => {
    languages[2] = 'Javascript';
    return languages;

}

const addElement = (languages) => {
    languages.push('Ruby');
    languages.push('Python');
    return languages;

}

const addNumberElement = (numbers) => {
    numbers.unshift(-1);
    numbers.unshift(-2);
    return numbers;

}

const removeFirst = (languages) => {
    languages.shift();
    return languages;

}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    const social_array = social_arr.split(",");
    return social_array;

}

const convertArrToStr = (languages) => {
    const arrToS = languages.join(",");
    return arrToS;

}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}