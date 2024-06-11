import { TOGGLE_SIDEBAR, TOGGLE_UPLOAD_MODAL } from "../action/types";

const initialState = {
    sidebarOpen: true,
    openUploadModal: false,
};

const appState = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpen: Boolean(action.payload),
            };
        case TOGGLE_UPLOAD_MODAL:
            return {
                ...state,
                openUploadModal: Boolean(action.payload),
            };
        default:
            return state;
    }
};
export default appState;
