let a = Math.floor(Math.random() * 100);
(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()
let result1;

//if...else
    if (a > 10) {
        if ((2 * a) + 1 > 4) {
            result1 = 5; 
        } else {
            if (a % 2 == 0) {
                result1 = 6;
            } else {
                result1 = 7; 
            }
        }
    } else {
        let b = a * 2; 
        if (b > 5) {
            if ((2 * a) + 1 > 4) {
                result1 = 5;
            } else {
                if (a % 2 == 0) {
                    result1 = 6; 
                } else {
                    result1 = 7;
                }
            }
        } else {
            if (a < 3) {
                result1 = 1;
            } else {
                result1 = 2 * (a - 2);
            }
        }
    }
    

console.log("a: ", a, "result", result1);


//switch()
let result2;
switch (true) {
    case (a > 10):
        switch (true) {
            case ((2 * a) + 1 > 4):
                result2 = 5;
                break;
            case (a % 2 == 0):
                result2 = 6;
                break;
            default:
                result2 = 7;
        }
        break;

    default:
        let b = a * 2;
        switch (true) {
            case (b > 5):
                switch (true) {
                    case ((2 * a) + 1 > 4):
                        result2 = 5; 
                        break;
                    case (a % 2 == 0):
                        result2 = 6;
                        break;
                    default:
                        result2 = 7; 
                }
                break;

            case (a < 3):
                result2 = 1;
                break;
            default:
                result2 = 2 * (a - 2);
        }
}

console.log("a: ", a, "result", result2);
