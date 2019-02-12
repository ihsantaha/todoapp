import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomMessageService, HelloWorldBean } from '../services/data/custom-message.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  greeting: string;
  name: string;
  customMessage: string;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private customMessageService: CustomMessageService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.greeting = `Welcome ${this.name}`;
  }

  getCustomMessage() {
    this.customMessageService.getCustomMessage().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getVariableMessage(message: string) {
    this.customMessageService.getVariableMessage(message).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    this.customMessage = response.message;
  }

  handleErrorResponse(error: any) {
    this.errorMessage = error.error.message;
  }

}
