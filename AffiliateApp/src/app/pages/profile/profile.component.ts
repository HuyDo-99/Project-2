import { Component, OnInit } from "@angular/core";
import { ProfileService } from "./service/profile.service";
import { Router } from "@angular/router";
import { ProfileModel } from "./models/profile.model";
import { AlertService } from "src/app/shared/services/alert.service";
import { DetailsOrder } from "../profile/models/order.model";
import { OrderService } from "../profile/service/order.service";
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from './logout/logout.component';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  [x: string]: any;
  customerCode: number;
  email: string;
  phone: number;
  address: string;
  identificationCard: string;
  birth: string;
  gender: number;
  fullName: string;
  firstName: string;
  userAvatarString: any;
  lastName: string;
  districtId: number;
  change = true;
  changeMedical = true;
  changeSurgical = true;
  isEdit = false;
  customerID : number;
  id: number;
  
  constructor(
    private profileService: ProfileService,
    public router: Router,
    private alertService: AlertService,
    private orderService: OrderService ,
    public dialog: MatDialog
  ) {}

  listDetails : any;
  
  createMedical() {
    document.getElementById("add-medical").click();
    this.change = false;
    this.changeMedical = false;
  }

  createSurgical() {
    document.getElementById("add-surgical").click();
    this.change = false;
    this.changeSurgical = false;
  }

  ngOnInit(): void {
    this.onGetProfile();
    // this.activatedRoute.paramMap.subscribe(param => this.CustomerID = +param.get('CustomerID'));
    // console.log(this.CustomerID);ư
     this.id = +JSON.parse(localStorage.getItem('access_user')).CustomerId;
     this.getDetailsOrder();
  }

  onIsEdit() {
    this.isEdit = true;
  }

  saveProfileChange() {
    let profileModel = new ProfileModel();
    profileModel.FirstName = this.fullName;
    profileModel.LastName = this.lastName;
    profileModel.GenderType = this.gender;
    profileModel.ProfileImageString = this.userAvatarString.split(",")[1];
    profileModel.CustomerCode = this.customerCode;
    profileModel.Phone = this.phone;
    profileModel.Email = this.email;
    profileModel.IdCardNumber = this.identificationCard;
    profileModel.BirthDay = this.birth;
    profileModel.DistrictId = this.districtId;
    profileModel.Address = this.address;
    console.log("model", profileModel);

    this.profileService.updateProfileCustomer(profileModel).subscribe((res) => {
      this.alertService.changeMessage({
        text: "Cập nhật hồ sơ thành công",
        color: "green",
      });
    });
    this.onGetProfile();
    this.isEdit = false;
  }

  onGetProfile() {
    this.profileService.getProfileCustomer().subscribe((data) => {
      console.log(data);
      this.customerID = data.CustomerID;
      this.lastName = data.FullName;
      this.customerCode = data.CustomerCode;
      this.fullName = data.FullNameAndID;
      this.address = data.Address;
      this.email = data.Email;
      this.gender = data.GenderType;
      if(data.BirthDay == null){
        this.birth = "";
      }else{
      this.birth = data.BirthDay.split('T')[0];
      }
      this.phone = data.Phone;
      this.identificationCard = data.IdCardNumber;
      this.userAvatarString = data.ProfileImageURL;
    });
  }

  chooseGenderType(type) {
    this.gender = type;
  }
  logout() {
   this.dialog.open(LogoutComponent);
  }

  processFileUserAvatar(files: File) {
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.userAvatarString = reader.result;
      this.isEdit = !this.isEdit;
    };
  }

  getDetailsOrder(){
    this.orderService.list().subscribe(res => {
    this.listDetails = res;
    console.log('contract detail', this.listDetails);     
    })
  }
  
}
