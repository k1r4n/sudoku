# sudoku
Program to check given Sudoku solution is valid or not

Solutions are harded in `data/index.js`

## clone

`
git clone git@github.com:k1r4n/sudoku.git
`

## running 

### docker

`
docker run --rm -v $(pwd):/data  -w /data node:8.11.1-alpine node index.js
`

### non docker

`
node index.js
`