export class Store {
    constructor(
        private dispatcher: any,
        private parentStore: any
    ) {
        let self: any = this;
        dispatcher.dispatcher
            .filter((action: any) => {
                return action.store === self.parentStore.storeType
            })
            .subscribe((action: any) => {
                self.parentStore.dispatch(action);
            });
    }
}
