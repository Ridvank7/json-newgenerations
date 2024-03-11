//********************************************************
//* JSON => Javascript Object Notation
//********************************************************

//* JSON (JavaScript Object Notation), verileri organize etmek ve taşımak için kullanılan bir veri biçimidir.
//* JavaScript dilinde nesne (object) yapısını temel alır.
//* JSON, insanlar tarafından okunabilir ve yazılabilir bir formatta olduğu için popülerdir.
//* Genellikle web servislerinde ve veri depolama/aktarımında kullanılır.

const obj = {
  name: "john",
  surname: "adam",
  age: 22,
  gender: "M",
  isAvailable: true,
}; //* Object

const team = [
  {
    name: "Sumeyra",
    surname: "Yilmaz",
    job: "developer",
    age: 25,
  },

  {
    name: "Yasemin",
    surname: "Ozturk",
    job: "developer",
    age: 23,
  },

  {
    name: "Ridvan",
    surname: "Can",
    job: "developer",
    age: 26,
  },
]; //* JSON

console.log(team);
console.log(team[2]);

//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
team.forEach((person) => console.log(person.job));

//* Ornek2: age'leri bir arttirarak YENI BIR DIZIYE saklayiniz.
const ages = team.map((personAge) => personAge.age + 1);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe cevirip ekrana yazdiriniz.
team.forEach((p) => {
  console.log(`${p.name.toUpperCase()} ${p.surname.toUpperCase()}`);
});

//* Ornek4: Yasi(age) 25 'den kucuk esit olan kisilerin adlarini (name) listeyiniz.
console.clear();
const ages2 = team.filter((s) => s.age <= 25);
ages2.forEach((s) => console.log(s.name, s.age));

//? Kisa yontem
team.filter((s) => s.age <= 25).forEach((s) => console.log(s.name, s.age));

//* Ornek5: 25 yasindan kucuk ve esit olanlarin isimlerini bir diziye saklayiniz.
const under25 = team.filter((s) => s.age <= 25).map((dongu) => dongu.name);
console.log(under25);

//* Ornek6: ortalama yasi hesaplayiniz
const avgAges =
  team.reduce((toplam, kisi) => (toplam += kisi.age), 0) / team.length;
console.log(avgAges);

console.log("Math Floor : ", Math.floor(avgAges));
console.log("Math Ceil : ", Math.ceil(avgAges));
console.log("Math Round : ", Math.round(avgAges));
console.log(avgAges.toFixed(2));

console.clear();

//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================

//* Destructuring: Dizilerden ve nesnelerden belirli değerleri çıkarmak için kullanılan bir JavaScript özelliğidir.

const car = {
  name: "Mercedes",
  model: 2014,
  engine: 1.6,
  colors: ["blue", "yellow"],
};

//* 1.YONTEM (Classical)
const nameOfCar = car.name;
console.log(nameOfCar);

const modelOfCar = car["model"];
console.log(modelOfCar);

//* 2.YONTEM: DESTRUCTURING
const { name, model, engine, colors } = car;
console.log(colors);

//* EXAMPLE: NESTED
const cars = {
  car1: {
    names: "BMW",
    model: 2022,
  },
  car2: {
    names: "Volvo",
    model: 1995,
  },
};

const { car1, car2 } = cars;
const { names } = car1;

const newTeam = [
  {
    name: "Sumeyra",
    surname: "Yilmaz",
    job: "tester",
    age: 25,
  },

  {
    name: "Yasemin",
    surname: "Ozturk",
    job: "developer",
    age: 23,
  },

  {
    name: "Ridvan",
    surname: "Can",
    job: "team lead",
    age: 26,
  },
];

//* Classical
newTeam.forEach((person) => {
  console.log("***********");
  console.log("Name :", person.name);
  console.log("Surname :", person.surname);
  console.log("Job : ", person.job);
  console.log("Age :", person.age);
});

console.clear();
//* Destructuring
newTeam.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("***********");
  console.log("Name : ", name);
  console.log("Surname :", surname);
  console.log("Job : ", job);
  console.log("Age :", age);
});

console.clear();

//*======================================================
//*  REST (...)
//* ======================================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: (Arrays)
const autos = ["anadol", "tofas", "ferrari", "bugatti", "reno"];

const [anadol, tofas, ...restAutos] = autos;
console.log(anadol);
console.log(restAutos);

//* REST (Objects)
const personel = {
  pName: "john",
  surname: "smith",
  job: "developer",
  age: 30,
};

const { pName, ...xxx } = personel;
console.log(pName);
console.log(xxx);

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

const sum = (x, y, z) => x + y + z;

console.log(sum(5, 10, 15, 20));

const sumAll = (...numbers) => {
  const sonuc = numbers.reduce(
    (toplamSonuc, eleman) => (toplamSonuc += eleman),
    0
  );
  return sonuc;
};

console.log("SUM OF NUMBERS : ", sumAll(1, 2, 3, 4, 5, 45, 23, 60, 7));

console.clear();

//*======================================================
//*  SPREAD (...)
//* ======================================================

//* Array Concatination
const flyingVehicles = ["Aircraft", "Helicopter", "Drone"];
const auto = ["Truck", "Car", "Bus", "SUV"];
const fruits = ["apple", "banana"];
// const allVehicles = [flyingVehicles, auto];
const allVehicles = [...flyingVehicles, ...auto, ...fruits];
console.log(allVehicles);

//* String spread
const str = "Hello World";
console.log([...str]);

//* Max()
console.log(Math.max(1, 2, 3, 95, 4, 56, 78));
const nums = [5, 54, 90, 23, 45];
console.log(...nums);
console.log(Math.max(...nums));

//* Object copy
const myObj = { a: 1, b: 2, c: 3 };
const herObj = { a: 2, x: 7, c: 2 };

const copiedObj = { ...myObj };
console.log(copiedObj);

const combinedObj = { ...herObj, ...myObj };
console.log(combinedObj);

