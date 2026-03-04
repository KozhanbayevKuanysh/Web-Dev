import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService, Photo } from '../services/album';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css'
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe(photos => {
      this.photos = photos;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  goBack() {
    const albumId = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/albums', albumId]);
  }
}