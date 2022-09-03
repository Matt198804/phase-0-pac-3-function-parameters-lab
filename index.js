

function introduction(name){
  let sentence = `Hi, my name is ${name}.`;
  console.log(sentence);
}

introduction("Josh");
introduction("Nancy");

function introductionWithLanguage(name, language){
  let sentence = `Hi, my name is ${name} and I am learning to program in ${language}.`;
  console.log(sentence)
}

introductionWithLanguage("Josh", "Ember.js")
introductionWithLanguage("Nancy", "React")


function introductionWithLanguageOptional(name, language){
  let sentence = `Hi, my name is ${name} and I am learning to program in ${language}.`;
  console.log(sentence)
}

introductionWithLanguageOptional("Gracie", "Javascript");


function introductionWithLanguageOptional(name, language){
  let sentence = `Hi, my name is ${name} and I am learning to program in ${language}.`;
  console.log(sentence)
}

introductionWithLanguageOptional("Gracie", "Python");
