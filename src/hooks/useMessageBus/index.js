import { useState, useEffect } from "react";
import { Subject, Observable, BehaviorSubject } from "rxjs";

export const useMessageBus = (property, setTo) => {
bs.next(setTo);

bs.subscribe(value => {
    userSchema[property] = value;
});
//console.log(userSchema)

return bs.asObservable();
};