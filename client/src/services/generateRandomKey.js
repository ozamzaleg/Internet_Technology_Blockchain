import { key } from '../constants/constants';

const generateRandomKey = () => {
    let randomKey = '';

    for (var i = 0; i < key.KEY_PARTS; i++) {
        randomKey += Math.floor(Math.random() * key.KEY_PART_LEN);
    }

    return randomKey;
}

export default generateRandomKey;