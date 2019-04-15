/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */




var floodFill = function(image, sr, sc, newColor) {

  let Len1 = image.length, Len2 = image[0].length
  let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let visited = []
  let color = image[sr][sc]
  initVisited()
  return dfs(sr, sc)
  function inArea(x, y) {
    return x >= 0 && x < Len1 && y >= 0 && y < Len2 ? true : false
  }
  function initVisited() {
    for(let i = 0; i < 60; i++) {
      visited[i] = []
      for(let j = 0; j < 60; j++) {
        visited[i][j] = false
      }
    }
  }

  function dfs(x, y) {
    if(!inArea(x, y)) {
      return
    }
    visited[x][y] = true
    image[x][y] = newColor
    for (let i = 0; i < 4; i++) {
      let nextX = x + dir[i][0]
      let nextY = y + dir[i][1]
      if (inArea(nextX, nextY) && !visited[nextX][nextY] && image[nextX][nextY] === color) {
        dfs(nextX, nextY)
      }
    }
    return image
  }
};