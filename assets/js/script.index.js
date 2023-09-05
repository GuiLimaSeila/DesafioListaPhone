
class Person {
    constructor(name, fixedPhone, mobilePhone, imgLink, date, email, cep, city, instagram, git,) {
        this.name = name;
        this.fixedPhone = fixedPhone;
        this.mobilePhone = mobilePhone;
        this.imgLink = imgLink;
        this.date = date;
        this.email = email;
        this.cep = cep;
        this.city = city;
        this.instagram = instagram;
        this.git = git;
        this.age = this.calculateAge();
        this.dateFormated = this.dateinPTBR();
        this.zodiac = getZodiacSign(this.date);
        this.fixedPhoneFormated = this.formatedFixedphone();
        this.mobilePhoneFormated = this.formatedCellphone();
        this.id = this.generateId();

    }
    calculateAge() {
        let petBirthdate = this.date
        let date = new Date(petBirthdate);
        var monthDiff = Date.now() - date.getTime();
        var ageDiff = new Date(monthDiff);

        var year = ageDiff.getUTCFullYear();

        var cal = Math.abs(year - 1970);
        return cal;
    }
    dateinPTBR() {
        let dateArray = this.date.split("-");
        let dateReversed = dateArray.reverse();
        let dateFormated = dateReversed.join("/");

        return dateFormated;
    }
    formatedCellphone() {
        let cellphoneArray = this.mobilePhone.split("");
        let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
            + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
            + cellphoneArray[5] + cellphoneArray[6] + "-"
            + cellphoneArray[7] + cellphoneArray[8]
            + cellphoneArray[9] + cellphoneArray[10];
        return cellphoneFormated;
    }
    formatedFixedphone() {
        let cellphoneArray = this.fixedPhone.split("");
        let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
            + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
            + cellphoneArray[5] + cellphoneArray[6] + "-"
            + cellphoneArray[7] + cellphoneArray[8]
            + cellphoneArray[9] + cellphoneArray[10];
        return cellphoneFormated;
    }
    generateId() {
        return Math.floor(Math.random() * 3000);
    }
}

class PersonList {
    constructor() {
        this.personList = [];
    }
    addPerson(person) {
        if (!getInputs()) {
            sendMsg("Preencha todos os campos", "error")
        } else if (!isURLValida()) {
            sendMsg("Imagen esta com formato errado", "error")
        } else {
            this.personList.push(person);
            sendMsg("Adicionado com sucesso", "success");
            displayBasicInformation()
            console.log(this.personList);
            clearInputs()
        }
    }
}

function clearInputs() {
    document.getElementById("full-name").value = "";
    document.getElementById("fixed-phone").value = "";
    document.getElementById("mobile-phone").value = "";
    document.getElementById("imgURL").value = "";
    document.getElementById("date").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("city").value = "";
    document.getElementById("instagram").value = "";
    document.getElementById("git").value = "";
}

function getInputs() {
    let name = document.getElementById("full-name").value;
    let fixedPhone = document.getElementById("fixed-phone").value;
    let mobilePhone = document.getElementById("mobile-phone").value;
    let imgLink = document.getElementById("imgURL").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let city = document.getElementById("city").value;
    let instagram = document.getElementById("instagram").value;
    let git = document.getElementById("git").value;

    if (name == "" || fixedPhone == "" || mobilePhone == "" || imgLink == "" || date == "" || email == "" || cep == "" || city == "" || instagram == "" || git == "") {
        return false;
    } else {
        return true;
    }
}

const personList = new PersonList();

function addPerson() {
    let name = document.getElementById("full-name").value;
    let fixedPhone = document.getElementById("fixed-phone").value;
    let mobilePhone = document.getElementById("mobile-phone").value;
    let imgLink = document.getElementById("imgURL").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let city = document.getElementById("city").value;
    let instagram = document.getElementById("instagram").value;
    let git = document.getElementById("git").value;

    const person = new Person(name, fixedPhone, mobilePhone, imgLink, date, email, cep, city, instagram, git);
    personList.addPerson(person);
}

function sendMsg(msg, type) {
    let msgDiv = document.getElementById("msgDiv");
    msgDiv.innerHTML = '';
    const msgDisplay = `
            <p class="${type}">${msg}</p>
            `
    msgDiv.innerHTML = msgDisplay;

    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 4000);

}
function isURLValida() {
    let imgLink = document.getElementById("imgURL").value
    if (imgLink.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function getZodiacSign(date) {
    let birthdate = new Date(date);
    let day = birthdate.getDate();
    let month = birthdate.getMonth() + 1;

    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return "Capricórnio ♑";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "Aquário ♒";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Peixes ♓";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "Áries ♈";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "Touro ♉";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gêmeos ♊";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "Câncer ♋";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "Leão ♌";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "Virgem ♍";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "Libra ♎";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "Escorpião ♏";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "Sagitário ♐";
    }
}

function displayBasicInformation() {
    let showBasic = "";
    personList.personList.forEach(person => {
        showBasic += `
        <div class="contacts" onclick="displayFullInformation(${person.id})">
            <img src="${person.imgLink}" alt="${person.name}" class="personImg">
            <div class="personBasic">
            <p class="personName">${person.name}</p>
            <p class="personBasicinfo">Telefone Fixo: ${person.fixedPhoneFormated}</p>
            <p class="personBasicinfo">Telefone Celular:${person.mobilePhoneFormated}</p>
            <button class="favorityBtn" onclick="favoritPerson(${person.id})"><i class="fa-solid fa-heart"></i></button>
        </div>
    </div>
    `;
    });
    document.getElementById("contacts-area").innerHTML = showBasic;
}

function displayFullInformation(id) {

    let showFull = "";
    personList.personList.filter(person => {
if(person.id == id){
        showFull += `
        <div class="aside-content">
        <p>detalhes</p>
        <img src="${person.imgLink}" alt="${person.name}" class="detailImg">
        <p>Identificação: ${person.id}</p>
        <div class="personBasic">
            <p class="personDetailinfo">${person.name}</p>
            <p class="personDetailinfo">Telefone Fixo: ${person.fixedPhoneFormated}</p>
            <p class="personDetailinfo">Telefone Celular: ${person.mobilePhoneFormated}</p>
            <p class="personDetailinfo">Data de Nascimento: ${person.dateFormated}</p>
            <p class="personDetailinfo">Idade: ${person.age}</p>
            <p class="personDetailinfo">Signo: ${person.zodiac}</p>
            <p class="personDetailinfo">Email: ${person.email} </p>
            <p class="personDetailinfo">CEP:  ${person.cep}</p>
            <p class="personDetailinfo">Cidade:  ${person.city}</p>
            <p class="personDetailinfo">Instagram:  ${person.instagram}</p>
            <p class="personDetailinfo">GitHub:  ${person.git}</p>
        </div>
        <div class="contactbuttons">
           <a href="https://web.whatsapp.com/${person.mobilePhone}" target="_blank"> <i class="fa-brands fa-whatsapp"></i></a>
           <a href="https://www.instagram.com/${person.instagram}" target="_blank"> <i class="fa-brands fa-instagram"></i></a>
           <a href="https://github.com/${person.git}" target="_blank"><i class="fa-brands fa-github"></i></a>
        </div>
        <div class="contactbuttons">
        <button class="deleteBtn" onclick="deletePerson(${person.id})"><i class="fa-solid fa-trash"></i></button>
        <button class="editeBtn" onclick="editPerson(${person.id})"><i class="fa-solid fa-edit"></i></button>
        </div
    </div>
    `
}
    });
    document.getElementById("aside").innerHTML = showFull;
}

function favoritPerson(id){
    let showFavorit = "";
    personList.personList.filter(person => {
        if(person.id == id){
            showFavorit += `
            <div class="contacts" onclick="displayFullInformation(${person.id})">
        <img src="${person.imgLink}" alt="${person.name}" class="personImg">
        <div class="personBasic">
        <p class="personName">${person.name}</p>
        <p class="personBasicinfo">Telefone Fixo: ${person.fixedPhoneFormated}</p>
        <p class="personBasicinfo">Telefone Celular:${person.mobilePhoneFormated}</p>
<h2>Favorito</h2>
    </div>
    </div>
            `

}
});
document.getElementById("favorit-area").innerHTML = showFavorit;
}

function deletePerson(id){
    personList.personList = personList.personList.filter(person => person.id != id)
    displayBasicInformation();
    displayFullInformation();
    sendMsg("Contato deletado com sucesso", "success");
}

function editPerson(id){
    personList.personList.filter(person => {
        if(person.id == id){
        document.getElementById("full-name").value = person.name;
        document.getElementById("fixed-phone").value = person.fixedPhone;
        document.getElementById("mobile-phone").value = person.mobilePhone;
        document.getElementById("imgURL").value = person.imgLink;
        document.getElementById("date").value = person.date;
        document.getElementById("email").value = person.email;
        document.getElementById("cep").value = person.cep;
        document.getElementById("city").value = person.city;
        document.getElementById("instagram").value = person.instagram;
        document.getElementById("git").value = person.git;
        }
    });
    deletePerson(id)
}

    


