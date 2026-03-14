let n = 5;

// upper part
for (let i = 1; i <= n; i++) {
    let line = "";

    for (let j = 1; j <= n + i; j++) {

        if (j === n - i + 1 || j === n + i - 1) {
            line += "*";
        } else {
            line += " ";
        }

    }

    console.log(line);
}

// lower part
for (let i = n - 1; i >= 1; i--) {
    let line = "";

    for (let j = 1; j <= n + i; j++) {

        if (j === n - i + 1 || j === n + i - 1) {
            line += "*";
        } else {
            line += " ";
        }

    }

    console.log(line);
}