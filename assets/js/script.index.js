class Person{
    constructor(name, fixedPhone, mobilePhone, imgLink, date, email, cep, city, instagram, git){
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