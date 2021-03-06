import status from './status';
import bussStation from './bussStation';
import bussLocation from './bussLocation';
import lineNumbers from './lineNumbers';

const rehydrated = (state = false, action) => {
    switch (action.type) {
        case 'persist/REHYDRATE':
            return true;
        default:
            return state;
    }
};

export default {
    rehydrated,
    status,
    bussStation,
    bussLocation,
    lineNumbers,
};
