import { Injectable }    from '@angular/core';

@Injectable()
export class ActionloggerService {
    private logs:Array<any> = [];
    constructor() {}

    addAction(action:any){
      if (this.logs.length >= 20) {
          this.logs.shift();
      }
      this.logs.push(action);
    }

    getLogs(){
      for (let i = 0; i < this.logs.length; i++) {
          if (Object.prototype.toString.call( this.logs[i].data ) === '[object Array]') {
              if (this.logs[i].data.length >= 5) {
                  this.logs[i].data = this.logs[i].data.slice(0,5);
              }
          }
      }
      return this.logs;
    }

}
