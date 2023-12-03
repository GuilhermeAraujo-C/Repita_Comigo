let tabd = parseInt(prompt("Você gostaria de ver a tabuada até qual número?"))

        for(let inc = 1; inc <= tabd; inc++){
            for(let n = 1; n <= 10; n++){
                document.write( inc + " x " + n + " = " + (inc * n) + "<br>")
            }
            document.write("<br>")
        }