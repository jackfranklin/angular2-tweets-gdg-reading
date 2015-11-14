import { Component, Input, OnInit } from 'angular2/angular2';

@Component({
  selector: 'tweet',
  templateUrl: 'app/tweet.html'
})
export default class TweetComponent implements OnInit {
  userName: string;
  text: string;
  @Input() tweet: any;

  onInit() {
    this.userName = this.tweet.user.screen_name;
    this.text = this.tweet.text;
  }
}
