import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {

  book:any[]=[];
  constructor(private apiservice:Apiservice,private cdr:ChangeDetectorRef){}
  ngOnInit(){
    this.apiservice.getBook().subscribe((data:any)=>{
      this.book=data.results;
      this.cdr.detectChanges();
    });
  }
}
