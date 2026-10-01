import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-homepage',
  imports: [RouterModule, MatCardModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class HomePage {}
