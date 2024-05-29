import { Component, OnInit } from '@angular/core';
import { BtnCommonComponent } from '../../shared/components/btn-common/btn-common.component';
import { CommonBtnClass, CommonBtnType, positions } from '../../models/auth/login';
import { CommonService } from '../../services/common.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [BtnCommonComponent,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
 BtnData!: CommonBtnType;
  BtnDataForGoogle!: CommonBtnType;
  BtnDataForFb!: CommonBtnType;
  registerForm: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted:boolean=false

  constructor(private commonService:CommonService,private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  this.onLoad()
  }

  /**
   * @use_case used for onLoading functions first when component is initialized calls onLoad
   * @author @shahil-leo
   */
  onLoad(){
    this.onReset()
  this.InitializeApplicationNeeds().then(() => {
  console.log('Button configuration initialized.');
}).catch((error) => {
  console.error('Error initializing button configuration:', error);
});
  }

  /**
   * @author @shahil-leo
   * @use_case configuring styles for every button using "DRY" principles
   * @returns promise if everything is okay then promise will resolve any errors then catch will print
   */
  InitializeApplicationNeeds(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    try {
      this.BtnData = this.commonService.createButtonConfig({
        BgColor: 'black',
        icon: 'arrow_forward',
        textColor: 'white',
        position: positions.right,
      });

      this.BtnDataForGoogle = this.commonService.createButtonConfig({
        BgColor: 'white',
        pathImage: '../../../assets/images/auth/Google icon.svg',
        textColor: 'black',
        position: positions.left,
        border: '1px solid #CCCCCC',
      });

      this.BtnDataForFb = this.commonService.createButtonConfig({
        BgColor: 'rgba(24, 119, 242, 1)',
        textColor: 'white',
        pathImage: '../../../assets/images/auth/Facebook logos.svg',
        position: positions.left,
      });

this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ]});



      resolve();
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * @author @shahil-leo
 * @use_case when submitting the form logic
 */
onSubmit(){
 this.submitted=true
}


public get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }


//resetting the form
onReset(){
  this.registerForm.reset()
}



}
