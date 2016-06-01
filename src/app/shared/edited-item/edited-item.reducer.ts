// import {Injectable} from "@angular/core";
// import {provideStore, Store, Action} from '@ngrx/store';

export const START_EDITING = 'START_EDITING';
export const STOP_EDITING = 'STOP_EDITING';

export const editedItem = (state = null, {type = '', payload = null}) => {
    switch(type){
        case START_EDITING:
            return payload.item;
        case STOP_EDITING:
            return null;
        default:
            return state;
    }
};

// @Injectable()
// export class EditedItemActions {
//     constructor(private store: Store<any>) {
//         // store.select('editedItem');
//         // console.log('this.editedItem', store.getState().editedItem);
//     }
    
//     startEditing(item) {
//         this.store.dispatch(<Action>{
//             type: START_EDITING, payload: {
//                 item: item
//             }
//         });
//     }

//     stopEditing() {
//         this.store.dispatch(<Action>{
//             type: STOP_EDITING
//         });
//     }
// }