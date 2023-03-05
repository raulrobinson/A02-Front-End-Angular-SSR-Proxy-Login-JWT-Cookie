import {Component, OnInit} from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content?: (((v: Object) => boolean) | ((v: PropertyKey) => boolean) | (() => Object) | Function | (() => string))[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.userService.getPublicContent().subscribe({
      next: (data) => {
        this.content = Object.values(data)
        console.log(Object.values(data));
      },error: (e) => console.error(e)
    });
  }

}
