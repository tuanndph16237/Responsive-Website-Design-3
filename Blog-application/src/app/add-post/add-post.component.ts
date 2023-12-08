import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../Service/service.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
constructor(private service : ServiceService) {

}

addBlog = new FormGroup({
  id: new FormControl(uuid()),
  title: new FormControl('', Validators.required),
  author: new FormControl('', Validators.required),
  content: new FormControl('', Validators.required),
});
 OnSubmit(){
  console.log(this.addBlog.value);
  this.service.sendData(this.addBlog.value).subscribe(
    (data)=>{
    console.log("Data sent successful");
  },
  (error)=>{
    console.log("Error sending data");
  }
  );
 }
  ngOnInit(): void {}
}
