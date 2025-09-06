import { jsTPS_Transaction } from '../../jstps/index.js'
import PlaylisterModel from '../PlaylisterModel.js';

/**
 * EditSong_Transaction
 * 
 * This class represents a transaction that edits a song
 * in the playlist. It will be managed by the transaction stack.
 * 
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    /**
     * Initializes this object such that it can both do and undo the transaction
     * 
     * @param {PlaylisterModel} initModel The M in MVC for this app
     * @param {Number} initIndex The song index to be edited.
     */
    constructor(initModel, initIndex, initOldData, initNewData) {
        super();
        this.model = initModel;
        this.songIndex = initIndex;
        this.oldData = initOldData;
        this.newData = initNewData;
    }

    /**
     * Executed when this transaction is first done or redone.
     */
    doTransaction() {
        this.model.editSong(this.songIndex, this.newData);
    }

    /**
     * Executed when this transaction is undone.
     */
    undoTransaction() {
        this.model.editSong(this.songIndex, this.oldData);
    }
}