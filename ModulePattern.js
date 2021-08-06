function getCustomer() {
    var _name, _id
    var cust = {}

    cust.setName = function (name) {
        _name = name;
    }

    cust.setId = function (id) {
        _id = id;
    }

    cust.getDetails = function () {
        return "Customer Name: " + _name + " Customer Id: " + _id
    }

    return cust
}

var cust1 = new getCustomer()
cust1.setId(102);
cust1.setName("Sid")
console.log(cust1.getDetails())
console.log(cust1)