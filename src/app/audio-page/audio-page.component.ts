import { Component } from '@angular/core';
import { Sound } from '../types/sound.type';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-audio-page',
  templateUrl: './audio-page.component.html',
  styleUrls: ['./audio-page.component.css']
})
export class AudioPageComponent {
  dataSource: Sound[]
  currentSound?: Sound

  constructor(private apiService: ApiService) {
    this.dataSource = this.apiService.getSounds()
  }
}
