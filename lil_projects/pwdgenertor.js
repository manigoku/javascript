



function generatePwd(pwdLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){

const LowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const UpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NumbersChars = "0123456789";
const SymbolsChars = "!@#$%^&*_+";
let allowedChars = "";
let password = "";

allowedChars += includeLowerCase ? LowerCaseChars : "";
allowedChars +=  includeUpperCase? UpperCaseChars : "";
allowedChars += includeNumbers ? NumbersChars : "";
allowedChars += includeSymbols ? SymbolsChars : "";

if(pwdLength <= 0 ){
    console.log(`password must be morethan 1 character`);
}
if (allowedChars.length === 0){
    console.log(`password must be morethan 1 character`)
}
for(let i = 0; i < pwdLength;i++){
    const randomIndex = Math.floor(Math.random()*allowedChars.length);
    password += allowedChars[randomIndex];
}

return password;
}
const pwdLength =   12;
const includeLowerCase= true;
const includeUpperCase= true;
const includeNumbers= true;
const includeSymbols= true;

const password = generatePwd(pwdLength,
                         includeLowerCase,
                         includeUpperCase,
                         includeNumbers,
                         includeSymbols);

 console.log(`generated password: ${password}`);                        
