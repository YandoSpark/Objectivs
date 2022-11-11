var biltema = {
    Firmanavn: "Buddha",
    antallAnsatte: 1,
    bilListe: ["SUBARU", "DELORIAN"],
    betaltSkatt: true,
    nettside: "www.BuddhaCars.no",

    informasjon: function() {
        return ("Jeg er Denniz som eier dette firmaet. Det vil si at jeg er rik")
    }
}

console.log(biltema.informasjon());

// OPPG 2

biltema.Firmanavn = "Jesus"
console.log(biltema.Firmanavn);

//OPPG 3

biltema.bilListe.push("FIAT")

console.log(biltema.bilListe);

// OPPG 4

biltema.bilListe.shift()

console.log(biltema.bilListe);

// OPPG 5

delete biltema.nettside

console.log(biltema.nettside);

//OPPG 6

biltema.status = true;
console.log(biltema.status);

//OPPG 7

var list = biltema.bilListe;
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
    
}

//OPPG 8

for (const key in biltema) {
    console.log(key);
}

//OPPG 9

for (const key in biltema) {
    console.log(biltema[key]);
}

//OPPG 10

function FindFirstElement(array) {
    return array[0]
}

console.log(FindFirstElement(list));

//oppgave 11

function FindLastElement(array) {
    return array[array.length-1]
}

console.log(FindLastElement(list));

//OPPG 12

var library = [

    {
    
    author: 'Bill Gates',
    
    title: 'The Road Ahead',
    
    readingStatus: true
    
    },
    
    {
    
    author: 'Steve Jobs',
    
    title: 'Walter Isaacson',
    
    readingStatus: false
    
    },
    
    {
    
    author: 'Suzanne Collins',
    
    title: 'Mockingjay: The Final Book of The Hunger Games',
    
    readingStatus: false
    
    }]

for (const i of library) {
    if (i.readingStatus == false)
    {
        console.log(i.title);
    }
}







// for (const i of library) {
    
//     if (i.readingStatus == false) {
//         console.log(i.title);
//     }
// }

