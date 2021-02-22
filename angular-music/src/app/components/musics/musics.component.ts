import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {

  musicList: Array<any> = []
  name: string = ''
  band: string = ''

  constructor(private _music: MusicService) {
    _music.show().subscribe(res => {
      this.musicList = res
      console.log(this.musicList)
    })
  }

  ngOnInit(): void {
  }

  addMusic = (): void => {
    this._music.add(this.name, this.band).subscribe(res => {
      this.musicList.push(res)
    })

    this.name = ''
    this.band = ''
  }

  updateMusic = (id: string): void => {
    this._music.update(id, this.name, this.band).subscribe(res => {
      const index = this.musicList.findIndex(x => x._id === id)
      this.musicList[index] = res
    })
  }

  deleteMusic = (id: string): void => {
    this._music.delete(id).subscribe(res => {
      this.musicList.splice(this.musicList.findIndex(x => x._id === id), 1)
    })
  }
}
