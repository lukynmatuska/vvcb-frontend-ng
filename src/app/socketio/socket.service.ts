import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;

  constructor() { 
    this.socket = io("http://localhost:8083/ws");
    this.socket.on("messageResponse", (res: any) => console.log(res));
  }

  public emit(msg: string){
    this.socket.emit("message", msg);
  }
}
