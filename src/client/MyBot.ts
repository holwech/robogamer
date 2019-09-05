import Bot from "../models/Bot";

export default class MyBot {
    public constructor(public _bot: Bot){
        
    }

    public goTo(x: number, y:number):void {
        this._bot = this._bot.goTo(x,y);
    }

    public turnToPoint(x: number, y: number): void {
        this._bot = this._bot.turnToPoint(x,y);
    }

    public setPower(left: number, right: number): void {
        this._bot = this._bot.setPower({left: left,right: right});
    }

    public stop(): void {
        this._bot = this._bot.stop();
    }
}