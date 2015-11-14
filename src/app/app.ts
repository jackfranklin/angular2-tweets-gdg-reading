declare var Pusher: any;

import {
  Component,
  bootstrap,
  NgFor
} from 'angular2/angular2';

import TweetComponent from './tweet';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  directives: [NgFor, TweetComponent],
})

class AppComponent {
  pusher: any;
  tweets: Array<Object> = [];

  constructor() {
    this.pusher = new Pusher('cb90c828c6c74b59af33');
    var channel = this.pusher.subscribe('tweets');
    channel.bind('new-tweet', (data) => {
      this.tweets.push(data);
    });
  }

}

bootstrap(AppComponent);
