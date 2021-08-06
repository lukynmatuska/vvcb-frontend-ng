import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;

  constructor() { 
    this.socket = io("https://api.vvcb.cz/ws");
    this.socket.on("messageResponse", (res: any) => console.log(res));
  }

  public emit(msg: string){
    this.socket.emit("message", msg);
  }

  public on(event: string, callback: any){
    return this.socket.on(event, callback);
  }
}
