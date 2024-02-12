import { Component , AfterViewInit, ViewChild} from '@angular/core';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(NavComponent)
  navChild!:NavComponent

  vh100:object={};
  ngAfterViewInit(): void {
    this.vh100 = {
      marginTop: `${this.navChild.nav.nativeElement.clientHeight}px`,
      minHeight: `calc(100vh - ${this.navChild.nav.nativeElement.clientHeight}px)`
    }
  }
  
  title = 'movie-app';
}
