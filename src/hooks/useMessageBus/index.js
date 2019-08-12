import { useState, useEffect } from "react";
import { Subject, Observable, BehaviorSubject } from "rxjs";

export const useMessageBus = (property) => {
    const subjects = window.messageBus.subjects
    return subjects[property].asObservable()
}
