import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";
import { AnalyserService } from "./analyser.service";


@WebSocketGateway({
    cors: { origin: "*" }
})

export class AnalyserGateway {

    @WebSocketServer()
    server: Server;

    constructor(private readonly analyserService: AnalyserService) { }

    @SubscribeMessage('analyseText')
    async analyseSarcasm(@MessageBody() body: { text: string }) {
        console.log("Received text for analysis:", body.text);
        const result = await this.analyserService.analyseSarcasm(body.text);

        return {
            event: 'analyseResult',
            data: result
        }
    }
}