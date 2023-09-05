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
        this.zodiac = getZodiacSign(this.date);
        this.fixedPhoneFormated = this.formatedFixedphone();
        this.mobilePhoneFormated = this.formatedCellphone();
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
            console.log(this.personList);
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
