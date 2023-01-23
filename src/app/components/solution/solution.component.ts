import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {
  isSaved:boolean=false;
  isSubmitted:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  endTest(){
    alert('You have submitted the test successfully');
    console.log('Congratulations you have completed the test');
    this.router.navigateByUrl('/home');
  }
}
