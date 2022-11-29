const cond = !!!isPresent;
const cond2 = Boolean(!!isPresent);
const cond3 = new Boolean(!!isPresent);

if (!!cond) {
    // ...
}

if (Boolean(cond2)) {
    // ...
}

while (!!cond3) {
    // ...
}

do {
    // ...
} while (Boolean(cond));

for (; !!cond; ) {
    // ...
}
