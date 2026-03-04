import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService, Album } from '../services/album';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {

  albums: Album[] = [];
  loading = true;

  constructor(
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
      this.cdr.detectChanges();
    });
  }
}