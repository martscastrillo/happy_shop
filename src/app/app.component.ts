import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_from_scratch_II';
  imgParent= "https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-624x385@Las%20Provincias.jpg";
  showImg = true;
  


  toggleImg(){
    this.showImg = !this.showImg;
  }
}
