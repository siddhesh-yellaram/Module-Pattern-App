var service = function () {
    var obj = {}

    console.log("Service Called!!!")

    obj.doSomeThing1 = function () {
        console.log("Inside Do Some Thing 1!!!")
    }

    obj.doSomeThing2 = function () {
        console.log("Inside Do Some Thing 2!!!")
    }

    obj.doSomeThing3 = function () {
        console.log("Inside Do Some Thing 3!!!")
    }

    return obj
}();

service.doSomeThing1();
service.doSomeThing2();
service.doSomeThing3();