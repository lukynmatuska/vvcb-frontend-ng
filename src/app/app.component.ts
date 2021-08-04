import { Component } from '@angular/core';
import { SocketService } from './socketio/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Výsledky Velké Ceny Blanska';

  public constructor(private readonly socketService: SocketService){
  }

  public send(){
    this.socketService.emit("Hello, World!");
  }
}
