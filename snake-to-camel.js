function snakeToCamel(string) {
    let result = ''
    for (let i = 0; i < string.length; i++) {

        if (string[i] !== '_') {
            if (string[i - 1] == '_') {
                result += string[i].toUpperCase()
            }
            else {
                result += string[i]
            }
        }
    }
    return result
}

