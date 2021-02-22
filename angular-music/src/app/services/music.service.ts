import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  base_url = 'http://localhost:3001/api/musics'

  constructor(private http: HttpClient) { }

  show() {
    return this.http.get<any>(this.base_url)
  }

  add(name: string, band: string) {
    return this.http.post<any>(this.base_url, { name, band })
  }

  update(id: string, name: string, band: string) {
    return this.http.put<any>(`${this.base_url}/${id}`, { name, band })
  }

  delete(id: string) {
    return this.http.delete<any>(`${this.base_url}/${id}`)
  }
}
