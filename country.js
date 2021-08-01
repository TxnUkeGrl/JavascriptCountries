class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let usa = new Country("USA! USA!", "'Murican", "Hello World!", ["white", "red", "blue"]);
let ukraine = new Country("Ukraine", "Ukrainian", "Privite, Narod!", ["black", "gold", "blue"]);
let canada = new Country("Canada", "French Canadian", "Bonjour le monde!", ["black", "red", "white"])

let countries = [usa, ukraine, canada];

function SelectCountry(){
    let input = "USA! USA!";
    input = document.getElementById("CountryList").value;
    let country;

if (input === "USA! USA!") {
    //set country to usa 
    country = usa;
}
else if (input === "Ukraine") {
    country = ukraine;
}
else if (input === "Canada") {
    country = canada;
}
DisplayColors(country);
};

function DisplayColors(country) {
    let color1 = document.getElementById("Color1");
    let color2 = document.getElementById("Color2");
    let color3 = document.getElementById("Color3");
    
    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.lang;
    document.getElementById("HelloWorld").innerText = country.greeting;
    
    color1.style.backgroundColor = country.colors[0];
    color2.style.backgroundColor = country.colors[1];
    color3.style.backgroundColor = country.colors[2];
}
