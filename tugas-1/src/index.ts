let city: string = "Jakarta";
let country: string = "Indonesia";
let population: number = 10000000;
let isCapital: boolean = true;
let isDeveloped: boolean = true;
let isIsland: boolean = false;
let area: number = 662;
let gdp: number = 483.2;
let timezone: string = "WIB";
let currency: string = "IDR";
let currencySymbol: string = "Rp";
let language: string = "Indonesian";
let humidity: number = 80;
let temperature: number = 30;
let airPollutionIndex: number = 100;
let callingCode: string = "+62";
let internetTLD: string = ".id";
let majorAirport: string = "Soekarno-Hatta";
let mainRiver: string = "Ciliwung";
let seaBorder: string = "Java Sea";
let foundingYear: number = 1527;
let isTouristHotspot: boolean = true;
let publicTransport: string = "TransJakarta";
let mainStadium: string = "Gelora Bung Karno";
let famousMonument: string = "Monas";

interface Params {
    (a: number, b: number): number;
}

const addition:Params = (a, b) => a + b;
console.log(`Penjumlahan: ${addition(10, 5)}`)
console.log(`${addition(10, 5)}`)
console.log(mainStadium +  " is located in " + city + " where you can get there by the public transport called " + publicTransport)

const subtraction:Params = (a, b) => a - b;
console.log(`Pengurangan: ${subtraction(20, 100)}`)

const multiplication:Params = (a, b) => a * b;
console.log(`Perkalian: ${multiplication(20,100)}`)

const division:Params = (a,b) => a/b;
console.log(`Pembagian: ${division(20100, 100)}`)