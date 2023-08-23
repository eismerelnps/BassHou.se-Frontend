export const types = {
    //for authentication
    login: "[auth] Login",
    logout: "[auth] Logout",

    //for administration CRUD operations
    addArtist: "[admin] Add Artist",
    editArtist: "[admin] Edit Artist",
    deleteArtist: "[admin] Delete Artist",
    resetArtist: "[admin] Reset Artist",

    // add/remove feedback text to app
    uiSetError: "[UI] ui Set Error",
    uiRemoveError: "[UI] ui Remove Error",


    // show/hide the backdrop component when app starts uploading an artist to DB
    uiStartLoading: "[UI] Start Loading",
    uiFinishLoading: "[UI] Finish Loading",

    // enable/disable feedback when there is an artist's imaga uploadig to Cloud
    uiStartUpLoadingImage: "[UI] Start UpLoading Image",
    uiFinishUpLoadingImage: "[UI] Finish UpLoading Image",

    // add/remove feedback text when there is an artist's imaga uploadig to Cloud
    uiSetCloudImageMessage: "[UI] ui Set Cloud Image Message",
    uiRemoveCloudImageMessage: "[UI] ui Remove Cloud Image Message",
};
