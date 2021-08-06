import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { SocketService } from './socketio/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Výsledky Velké Ceny Blanska';

  public constructor(private readonly socketService: SocketService, private readonly authService: AuthService){
    this.authService.init();
  }

  public login(){
    this.authService.login();
  }

}
