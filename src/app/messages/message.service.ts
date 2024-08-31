import { Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MessagesService {
    private messages:string[] = []
    get allMessages() {
        return [...this.messages];
    }

    addMessage(message: string) {
        return [...this.messages, message];
    }
}