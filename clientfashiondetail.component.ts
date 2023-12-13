import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion1 } from '../Fashion1';
import { ClientFashionService } from '../client-fashion.service';
@Component({
  selector: 'app-clientfashiondetail',
  templateUrl: './clientfashiondetail.component.html',
  styleUrl: './clientfashiondetail.component.css'
})
export class ClientfashiondetailComponent {
  fashion = new Fashion1() // fashion data to show
  id: string = '' // fashion id
  errMessage: string = ''

  constructor(private _service: ClientFashionService, private _router: Router, private _activeroute: ActivatedRoute) {
    this._activeroute.params.subscribe(params => {
      this.id = params['id'] //
      if (this.id != null){
        this.searchFashion(this.id) // get fashionselected
      } else {
        window.alert('Invalid fashion id to show')
        this._router.navigate(['/fashions'])
      }
    })
  }

  searchFashion(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => { this.fashion = data },
      error: (err) => { this.errMessage = err },
    })
  }
}
