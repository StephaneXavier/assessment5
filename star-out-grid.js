// function starOutGrid(grid) {
//     let star = []

//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] == '*')
//                 star.push(j)
//         }

//     }


//     for (let x = 0; x < grid.length; x++) {

//         if (grid[x].includes('*')) {
//             for (let y = 0; y < grid[x].length; y++) {
//                 grid[x][y] = '*'
//             }
//         }
//         for (let y = 0; y < grid[x].length; y++) {
//             if (star.includes(y)) {
//                 grid[x][y] = '*'
//             }
//         }
//     }
//     return grid

// }


function starOutGrid(grid) {
    const star = []
    for (let i = 0; i < grid.length; i++) {
        if (grid[i].indexOf('*') != -1) {
            star.push(grid[i].indexOf('*'))
        }
    }
   
    for (let x = 0; x < grid.length; x++) {

        if (grid[x].includes('*')) {
            for (let y = 0; y < grid[x].length; y++) {
                grid[x][y] = '*'
            }
        }
        for (let y = 0; y < grid[x].length; y++) {
            if (star.includes(y)) {
                grid[x][y] = '*'
            }
        }
    }
    return grid

}