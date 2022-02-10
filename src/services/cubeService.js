const Cube = require('../models/Cube');

const cubeDb = [
    {
        name: 'Mirror block',
        description: 'Cube is a cube.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Mirror_Cube_scrambled.png/440px-Mirror_Cube_scrambled.png',
        difficulty: '5'
    }
];

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);
    cubeDb.push(cube);
};

const cubeService = {
    create,
    getAll
};

module.exports = cubeService;