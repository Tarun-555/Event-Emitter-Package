class CustomEventEmiiter{
    constructor(){
        this.eventObjects={};
    }

    subscribe(eventType, callback){
       this.eventObjects[eventType] = callback;
    }

    emit(eventType, ...args){
        if(this.eventObjects[eventType]){
            this.eventObjects[eventType](...args);
        }else{
            console.error("Event Type is not subscribed!!");
            throw new Error("Event Type is not subscribed!!");
        }
    }

    release(eventType){
        if(this.eventObjects[eventType]){
            delete this.eventObjects[eventType];
        }else{
            console.error("Event doesn't exist to release!!");
            throw new Error("Event doesn't exist to release!!");
        }
    }
};

module.exports = CustomEventEmiiter;