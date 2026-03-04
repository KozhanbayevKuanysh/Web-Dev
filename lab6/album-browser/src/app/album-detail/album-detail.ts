import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService, Album } from '../services/album';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetail implements OnInit {
  album?: Album;
  loading = true;
  error?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  this.route.paramMap.pipe(
    switchMap(params => {
      const id = Number(params.get('id'));
      this.loading = true;
      return this.albumService.getAlbum(id);
    })
  ).subscribe({
    next: (album) => {
      this.album = album;
      this.loading = false;
      this.cdr.detectChanges();
    },
    error: () => {
      this.loading = false;
    }
  });
}

save() {
    if (this.album) {
      const albumToUpdate = { ...this.album };
      this.albumService.updateAlbum(albumToUpdate).subscribe(updated => {
        this.album = { ...updated };
        alert('Album updated successfully!');
      });
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }

  viewPhotos() {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }
}