import { Injectable } from '@angular/core';
import { Sound } from '../types/sound.type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  soundsData: Sound[] = [
    {id: '1', artist: 'artist 1', name: 'song 1', address: 'https://mp3melodii.ru/files_site_02/001/vertu_novyj_zvonok.mp3'},
    {id: '2', artist: 'artist 2', name: 'song 2', address: 'https://mp3melodii.ru/files_site_02/001/krasivaya_melodiya_na_zvonok_i_like_chopin_djk.mp3'},
    {id: '3', artist: 'artist 3', name: 'song 3', address: 'https://mp3melodii.ru/files_site_02/001/krasivyj_rington_vertu_trap.mp3'},
  ];

  getSounds() {
    return this.soundsData
  }
}
