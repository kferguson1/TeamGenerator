const Employee = require('./employee');

class Manager extends Employee {
    consturctr(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
    }

    getnumber() {
        return this.officenumber;
    }

    getrole() {
        return 'Manager'
    }
}

module.exports = Manager;