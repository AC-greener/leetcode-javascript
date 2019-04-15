/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let Len1 = grid.length, Len2 = grid[0].length
  let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let visited = []
  let copyGrid = JSON.parse(JSON.stringify(grid))
  let result = Number.MAX_SAFE_INTEGER
  initVisited()
  for(let i = 0; i < Len1; i++) {
    for(let j = 0; j < Len2; j++) {
      if(grid[i][j] === 2) {
        let temp = bfs(i, j)
        if(temp < result) {
          result = temp
        }
        grid = reset()
      }
    }
  }
  console.log(result)
  return result
  function reset() {
    for(let i = 0; i < Len1; i++) {
      for(let j = 0; j < Len2; j++) {
        grid[i][j] = copyGrid[i][j]
      }
    }
    return grid
  }
  function inArea(x, y) {
    return x >= 0 && x < Len1 && y >= 0 && y < Len2 ? true : false
  }
  function initVisited() {
    for(let i = 0; i < 20; i++) {
      visited[i] = []
      for(let j = 0; j < 20; j++) {
        visited[i][j] = false
      }
    }
  }
  function bfs(x, y) {
    console.log('进入bfs1')
    let times = 0
    let queue = []
    queue.push([x, y, times])
    visited[x][y] = true
    p = 0
    while(queue.length !== 0) {
      let current = queue.shift()
      console.log(p++)
      for(let i =0; i < 4; i++) {
        let nextX = current[0] + dir[i][0]
        let nextY = current[1] + dir[i][1]
        if(inArea(nextX, nextY) && !visited[nextX][nextY] && grid[nextX][nextY] === 1) {
          queue.push([nextX, nextY])
          grid[nextX][nextY] = 2
          visited[nextX][nextY] = true
          times += 1
        }
      }
    }
    for(let i = 0; i < Len1; i++) {
      for(let j = 0; j < Len2; j++) {
        if(grid[i][j] === 1) {
          return -1
        }
      }
    }
    return times
  }
};
orangesRotting([[2,1,1],[1,1,0],[0,1,1]])