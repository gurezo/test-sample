import { Component } from '@angular/core';
import { AppService } from './app.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-sample';

  constructor(private service: AppService) {}

  async test() {
    const c = await this.sample();
    console.log('c', c);
    // const b = Promise.all(c);
    // console.log('b', b);
  }


  async sample(): Promise<number[]> {
    const c: Array<Promise<number[]>> = [];
    return new Promise(res => {
      this.service.testA().then(_ => {
        _.forEach(x => {
          console.log('x', x);
          this.service.testB().then(__ => {
            __.forEach(y => {
              console.log('y', y);
              c.push(new Promise(() => y));
            });
          });
        });
      });
      res();
    });
  }
}
