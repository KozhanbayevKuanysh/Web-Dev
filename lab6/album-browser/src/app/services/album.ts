import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
  return this.http.get<Photo[]>(`${this.apiUrl}/albums/${id}/photos`).pipe(
    map(photos =>
      photos.map((photo, index) => ({
          ...photo,
          thumbnailUrl: `https://picsum.photos/150/150?random=${index + 1}`,
          url: `https://picsum.photos/600/600?random=${index + 1}`
        }))
      )
    );
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/albums/${id}`);
  }
}