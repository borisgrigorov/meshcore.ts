class EventEmitter {
    private eventListenersMap: Map<number | string, Function[]>;

    constructor() {
        this.eventListenersMap = new Map();
    }

    on(event: number | string, callback: Function) {

        // create list of listeners for event if it doesn't exist
        if(!this.eventListenersMap.has(event)){
            this.eventListenersMap.set(event, [callback]);
            return;
        }

        // add listener for event
        this.eventListenersMap.get(event)!.push(callback);

    }

    off(event: number | string, callback: Function) {

        // remove callback from listeners for this event
        if(this.eventListenersMap.has(event)){
            const callbacks = this.eventListenersMap.get(event)!.filter(cb => cb !== callback);
            this.eventListenersMap.set(event, callbacks);
        }

    }

    once(event: number | string, callback: Function) {

        // internal callback to handle the event
        const internalCallback = (...data: any[]) => {

            // we received an event, so lets remove the event listener
            this.off(event, internalCallback);

            // fire the original callback provided by the user
            setTimeout(() => callback(...data), 0);

        };

        // listen to this event
        this.on(event, internalCallback);

    }

    emit(event: number | string, ...data: any[]) {

        // invoke each listener for this event
        if(this.eventListenersMap.has(event)){
            for(const eventListener of this.eventListenersMap.get(event) || []){
                setTimeout(() => eventListener(...data), 0);
            }
        }

    }

}

export default EventEmitter;
