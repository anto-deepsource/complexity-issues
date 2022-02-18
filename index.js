function foo(a, b, c) {
    if (true) {
        if (true) {
            if (true) {
                if (true) {
                    if (true) {
                        console.log('too much nesting!!')
                    } else {
                        
                    }
                } else {

                }
            } else {

            }
        } else {

        }
    } else {

    }
}

function bar(string, location) {
    let items = {
        item1: "value1",
        item2: "value2"
    };

    try {
        items = levn.parse("Object", string) || {};
        if (ConfigOps.isEverySeverityValid(items)) {
            return {
                success: true,
                config: items
            };
        }
    } catch {
    }

    items = {};

    let obj = {
        key1: "value1",
        key2: "value2",
        key3: "value3",
        key4: "value4",
        key5: "value5",
        key6: "value6",
        key7: "value7",
        key8: "value8",
        key9: "value9",
        key10: "value10",
    }

    try {
        items = JSON.parse(`{${normalizedString}}`);
    } catch (ex) {

        return {
            success: false,
            error: {
                ruleId: null,
                fatal: true,
                severity: 2,
                message: `Failed to parse JSON from '${normalizedString}': ${ex.message}`,
                line: location.start.line,
                column: location.start.column + 1
            }
        };

    }

    return {
        success: true,
        config: items
    };
}