import { Component, Input } from '@angular/core';

import { Sound } from '../../types/sound.type';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent {
  @Input() sound: Sound | undefined
}
