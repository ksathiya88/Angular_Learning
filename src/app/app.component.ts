import { Component } from '@angular/core';
import {map} from 'rxjs/Operators';
import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import { Observable, Subscription, Observer } from 'rxjs';
import { HttpServiceService } from './http-service.service';

declare const VERSION: string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'Version: ' + VERSION;
  
  title = 'my-app';
  color = "Black";
  numbersObsSubscription: Subscription;
  customObsSubscription1: Subscription;
  customObsSubscription: Subscription;
  constructor(private httpService: HttpServiceService){
    this.title ="My App";
  }

  click($event){
    console.log("Employee clicked key",$event);
  }

  ngOnInit(){
    //this.httpService.getEmployees();
 
    // //Promise
    // const promise = new Promise(function(resolve, reject) {
    //   // Do some async stuff
    
    //   console.log("resolve",resolve);
    //   setTimeout(() => {
    //     resolve('Promise done');
    //   }, 2000);
    //   setTimeout(() => {
    //     reject('Promise rejected');
    //   }, 1000);
    // });

    // for (var i=0;i<1000;i++){
    //   console.log(i);
    // }
    
    // promise.then(function(val: string) {
    //     console.log('Promise done Value:::' + val);
    //   }, function(val: string){
    //     console.log('Promise Rejected Value:::' + val);
    //   }
    // );

    // // Observable 
    // const myObservable = Observable.create(function(observer: Observer<string>) {
    //   console.log("11111111111");
    //    setTimeout(() => {
    //      console.log('ddddddddddddd');
    //      observer.next('first package');
    //    }, 2000);
    //    setTimeout(() => {
    //      observer.next('second package');
    //    }, 4000);

    //    setTimeout(() => {
    //      observer.next('third package');
    //    }, 5000);

    //    setTimeout(() => {
    //      observer.next('fourth package');
    //    }, 6000);

    //    setTimeout(() => {
    //    //observer.error('this does not work');
    //      observer.complete();
    //   }, 7000);
    //    //setTimeout(() => {
    //    //   observer.next('third package');
    //    // }, 6000);
    //     });
    //    this.customObsSubscription = myObservable.subscribe(
    //    (data: string) => {
    //      console.log(data);
    //    },
    //   (error: string) => {
    //      console.log(error);
    //    },
    //    () => {
    //      console.log('completed');
    //    }
    //  );
    // // //
    //  this.customObsSubscription1 = myObservable.subscribe(
    //    (data: string) => {
    //      console.log(data);
    //    },
    //    (error: string) => {
    //      console.log(error);
    //    },
    //   () => {
    //      console.log('completed');
    //    }
    //  );


    }

  display(){
    console.log("hello");
  }
  
}
