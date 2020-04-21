import DIR_DATA from '../../utils/data/directory-menu.data';

const INITIAL_STATE = {
    sections: DIR_DATA
}

export const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer;