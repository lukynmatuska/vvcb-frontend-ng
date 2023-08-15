import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

export class SocketService {

  private socket: Socket;

  constructor() {
    this.socket = io(`${environment.backend.socketio}`);
    this.socket.on("messageResponse", (res: any) => console.log(res));
  }

  public emit(msg: string) {
    this.socket.emit("message", msg);
  }

  public on(event: string, callback: any) {
    return this.socket.on(event, callback);
  }
}
