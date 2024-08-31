import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {MessagesService} from "../message.service";

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit{
  private messagesService = inject(MessagesService);
  private cdRef = inject(ChangeDetectorRef);

 messages:string[]=[];

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }

  ngOnInit() {
    this.messagesService.messages$.subscribe((messages) => {
      this.messages=messages;
      this.cdRef.markForCheck();
    });
  }
}
