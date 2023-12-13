import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion1 } from '../Fashion1';
import { ClientFashionService } from '../client-fashion.service';
@Component({
  selector: 'app-clientfashion',
  templateUrl: './clientfashion.component.html',
  styleUrl: './clientfashion.component.css'
})
export class ClientfashionComponent {
  style: string = ''
  styles: string[] = [] // distinct styles
  fashions: any// all fashions
  selectedStyleFashions: Fashion1[] = [] // fashions by style
  fashion: any // fashion selected
  errMessage: string = ''

  constructor(private _service: ClientFashionService, private _router: Router, private _activeRoute: ActivatedRoute) {
    this.getFashions() // auto get all fashions
    this._activeRoute.params.subscribe(params => {
      this.style = params['style'] // get style from url
      if (this.style != null) {
        this.getFashionsByStyle(this.style) // get fashions by style
      }
    })
  }

  // get all fashions
  getFashions() {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data, this.getStyles() },
      error: (err) => { this.errMessage = err }
    })
  }

  // get distinct styles from fashions and store in styles
  getStyles() {
    this.styles = []
    for (let fashion of this.fashions) {
      if (!this.styles.includes(fashion.style)) {
        this.styles.push(fashion.style)
      }
    }
  }

  // get fashions by style
  getFashionsByStyle(style: string) {
    this._service.getFashionsByStyle(style).subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }

  tempFashionsByStyle(style: string) {
    var tempFashions: Fashion1[] = []
    for (let fashion of this.fashions) {
      if (fashion.style == style) {
        tempFashions.push(fashion)
      }
    }
    return tempFashions
  }

  // get fashions by id
  getFashionsById(id: string) {
    this._service.getFashion(id).subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }

  // route to fashion detail page
  detailFashion1(fashionId: string) {
    this._router.navigate(['/fashions/detail1', fashionId])
  }

  // route to fashions by style page
  fashionsByStyle(style: string) {
    this._router.navigate(['/fashions/style', style])
  }
}
