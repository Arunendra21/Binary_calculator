       var scr = "";

        function calculate() {
            let ans;
            let operator;

            if (scr.includes("*")) operator = "*";
            else if (scr.includes("/")) operator = "/";
            else if (scr.includes("&")) operator = "&";
            else if (scr.includes("|")) operator = "|";
            else if (scr.includes("^")) operator = "^";
            else if (scr.includes("<<")) operator = "<<";
            else if (scr.includes(">>")) operator = ">>";
            else if (scr.includes(">>>")) operator = ">>>";
            else return;

            const [operand1, operand2] = scr.split(operator);
            const x = parseInt(operand1, 2);
            const y = parseInt(operand2, 2);

            switch (operator) {
                case "*":
                    ans = (x * y).toString(2);
                    break;
                case "/":
                    ans = Math.floor(x / y).toString(2);
                    break;
                case "&":
                    ans = (x & y).toString(2);
                    break;
                case "|":
                    ans = (x | y).toString(2);
                    break;
                case "^":
                    ans = (x ^ y).toString(2);
                    break;
                case "<<":
                    ans = (x << y).toString(2);
                    break;
                case ">>":
                    ans = (x >> y).toString(2);
                    break;
                case ">>>":
                    ans = (x >>> y).toString(2);
                    break;
                default:
                    alert("Invalid operation");
                    return;
            }

            scr = ans;
            document.getElementById("output").value = scr;
        }

        function input(ch) {
            scr += ch;
            document.getElementById("output").value = scr;
        }

        function del() {
            scr = scr.slice(0, -1);
            document.getElementById("output").value = scr;
        }

        function reset() {
            scr = "";
            document.getElementById("output").value = scr;
        }

        function bitwiseNot() {
            if (!scr.includes('~')) {
                scr = (~parseInt(scr, 2)).toString(2);
                document.getElementById("output").value = scr;
            } else {
                alert("Bitwise NOT only takes a single input.");
            }
        }

        function twosComplement() {
            let x = parseInt(scr, 2);
            scr = (~x + 1).toString(2);
            document.getElementById("output").value = scr;
        }
