const prompt = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = [];

function afficherTrajets() {
    console.clear();
    console.log("\n=== LISTE DES TRAJETS ===");
    for (let i = 0; i < trips.length; i++) {
        let t = trips[i];
        console.log(`ID: ${t.id} | ${t.departure} —> ${t.destination}`);
        console.log(`Départ : ${t.departureTime} | Arrivée : ${t.arrivalTime}`);
        console.log(`Prix : ${t.price} DH | Places : ${t.availableSeats}`);
        console.log("---------------------------------");
    }
}

function acheterTicket() {
    console.clear();
    console.log("\n=== ACHETER UN TICKET ===");
    afficherTrajets();

    let passengerName = prompt("Nom du passager : ");
    let tripId = parseInt(prompt("Identifiant du trajet : "));

    let selectedTrip = null;
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === tripId) {
            selectedTrip = trips[i];
            break;
        }
    }

    if (!selectedTrip) {
        console.log("\nTrajet introuvable.");
    } else if (selectedTrip.availableSeats <= 0) {
        console.log("\nTrain complet.");
    } else {
        let seatNumber = 50 - selectedTrip.availableSeats + 1;
        selectedTrip.availableSeats--;

        let newTicket = {
            id: tickets.length + 1,
            passengerName: passengerName,
            tripId: selectedTrip.id,
            seatNumber: seatNumber,
            price: selectedTrip.price
        };

        tickets.push(newTicket);

        console.log("\nTicket acheté avec succès.");
        console.log(`\nTicket #${newTicket.id}`);
        console.log(`Passager : ${newTicket.passengerName}`);
        console.log(`Trajet : ${selectedTrip.departure} → ${selectedTrip.destination}`);
        console.log(`Place : ${newTicket.seatNumber}`);
        console.log(`Prix : ${newTicket.price} DH`);
    }

    prompt("\nAppuyez sur Entrée pour continuer...");
}
function afficherTickets() {
    console.clear();
    console.log("\n=== TICKETS ===");

    if (tickets.length === 0) {
        console.log("Aucun ticket enregistré.");
    } else {
        for (let i = 0; i < tickets.length; i++) {
            let t = tickets[i];

            let tripName = "";
            for (let j = 0; j < trips.length; j++) {
                if (trips[j].id === t.tripId) {
                    tripName = `${trips[j].departure} → ${trips[j].destination}`;
                    break;
                }
            }

            console.log(`\nTicket #${t.id}`);
            console.log(`Passager : ${t.passengerName}`);
            console.log(`Trajet : ${tripName}`);
            console.log(`Place : ${t.seatNumber}`);
            console.log(`Prix : ${t.price} DH`);
            console.log("---------------------------------");
        }
    }

    prompt("\nAppuyez sur Entrée pour continuer...");
}

function annulerTicket() {
    console.clear();
    console.log("\n=== ANNULER UN TICKET ===");

    let ticketId = parseInt(prompt("Identifiant du ticket : "));

    let ticketIndex = -1;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === ticketId) {
            ticketIndex = i;
            break;
        }
    }


    if (ticketIndex === -1) {
        console.log("\nTicket introuvable.");
    } else {
        let canceledTicket = tickets[ticketIndex];

        for (let i = 0; i < trips.length; i++) {
            if (trips[i].id === canceledTicket.tripId) {
                trips[i].availableSeats++;
                break;
            }
        }


        tickets.splice(ticketIndex, 1);

        console.log("\nTicket annulé avec succès.");
    }

    prompt("\nAppuyez sur Entrée pour continuer...");
}

function rechercherTicket() {
    console.clear();
    console.log("\n=== RECHERCHER UN TICKET ===");

    let searchName = prompt("Nom du passager : ");
    let found = false;

    for (let i = 0; i < tickets.length; i++) {
        let t = tickets[i];
        if (t.passengerName.toLowerCase() === searchName.toLowerCase()) {
            let tripName = "";
            for (let j = 0; j < trips.length; j++) {
                if (trips[j].id === t.tripId) {
                    tripName = `${trips[j].departure} → ${trips[j].destination}`;
                    break;
                }
            }

            console.log(`\nTicket #${t.id}`);
            console.log(`Passager : ${t.passengerName}`);
            console.log(`Trajet : ${tripName}`);
            console.log(`Place : ${t.seatNumber}`);
            console.log(`Prix : ${t.price} DH`);
            console.log("---------------------------------");
            found = true;
        }
    }

    if (!found) {
        console.log("\nAucun ticket trouvé pour ce passager.");
    }

    prompt("\nAppuyez sur Entrée pour continuer...");
}

function filtrerTrajets() {
    console.clear();
    console.log("\n=== FILTRER LES TRAJETS ===");

    let city = prompt("Ville de départ : ");
    let found = false;

    for (let i = 0; i < trips.length; i++) {
        let t = trips[i];
        if (t.departure.toLowerCase() === city.toLowerCase()) {
            console.log(`${t.departure} → ${t.destination} : ${t.price} DH (Places : ${t.availableSeats})`);
            found = true;
        }
    }

    if (!found) {
        console.log("\nAucun trajet trouvé depuis cette ville.");
    }

    prompt("\nAppuyez sur Entrée pour continuer...");
}

function trierTrajets() {
    console.clear();
    console.log("\n=== TRIER LES TRAJETS (Prix croissant) ===");

    let sortedTrips = [...trips];

    for (let i = 0; i < sortedTrips.length; i++) {
        for (let j = 0; j < sortedTrips.length - 1; j++) {
            if (sortedTrips[j].price > sortedTrips[j + 1].price) {
                let temp = sortedTrips[j];
                sortedTrips[j] = sortedTrips[j + 1];
                sortedTrips[j + 1] = temp;
            }
        }
    }

    for (let i = 0; i < sortedTrips.length; i++) {
        let t = sortedTrips[i];
        console.log(`${t.departure} → ${t.destination} : ${t.price} DH`);
    }

    prompt("\nAppuyez sur Entrée pour continuer...");
}

let user;

do {
    console.clear();

    console.log("\n=================================");
    console.log("        RAILWAY MANAGER");
    console.log("=================================");
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("0. Quitter");

    user = prompt("Votre choix : ");

    switch (user) {
        case "1":
            afficherTrajets();
            prompt("\nAppuyez sur Entrée pour continuer...");
            break;

        case "2":
            acheterTicket();
            break;

        case "3":
            afficherTickets();
            break;


        case "4":
            annulerTicket();
            break;


        case "5":
            rechercherTicket();
            break;



        case "6":
            filtrerTrajets();
            break;


        case "7":
            trierTrajets();
            break;



        case "0":
            console.log("Au revoir !");
            break;

        default:
            console.log("\n !!! Choix invalide, réessayez.");
            prompt("Appuyez sur Entrée pour continuer...");
    }

} while (user !== "0");
