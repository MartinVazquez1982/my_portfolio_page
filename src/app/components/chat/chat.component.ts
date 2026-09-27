import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatService, ChatMessage } from '../../../services/chat.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css', '../../../styles.css']
})
export class ChatApp implements AfterViewChecked {

    messages: ChatMessage[] = [];
    inputMessage: string = '';
    isLoading: boolean = false;
    errorMessage: string = '';

    @ViewChild('messagesContainer') messagesContainer!: ElementRef;

    constructor(private chatService: ChatService) {}

    ngAfterViewChecked(): void {
        this.scrollToBottom();
    }

    sendMessage(): void {
        const text = this.inputMessage.trim();
        if (!text || this.isLoading) return;

        this.messages.push({ role: 'user', content: text });
        this.inputMessage = '';
        this.isLoading = true;
        this.errorMessage = '';

        this.chatService.sendMessage(text, this.messages).subscribe({
            next: (res) => {
                this.messages.push({ role: 'assistant', content: res.response });
                this.isLoading = false;
            },
            error: () => {
                this.errorMessage = 'Something went wrong. Please try again.';
                this.isLoading = false;
            }
        });
    }

    onKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            this.sendMessage();
        }
    }

    private scrollToBottom(): void {
        try {
            this.messagesContainer.nativeElement.scrollTop =
                this.messagesContainer.nativeElement.scrollHeight;
        } catch {}
    }
}
