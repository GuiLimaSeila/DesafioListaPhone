class Person {
    constructor(name, fixedPhone, mobilePhone, imgLink, date, email, cep, city, instagram, git) {
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
}

class PersonList {
    constructor() {
        this.personList = [];
    }
    addPerson(person) {
        if (!getInputs()) {
            sendMsg("Preencha todos os campos", "error")
        }else if (!isURLValida()) {
            sendMsg("Imagen esta com formato errado", "error")
        }  else {
            this.personList.push(person);
            sendMsg("Adicionado com sucesso", "success");
        }
    }
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

