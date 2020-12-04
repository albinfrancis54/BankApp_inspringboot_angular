import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminAddcustomersComponent } from './admin-addcustomers/admin-addcustomers.component';
import { AdminAlltransactionsComponent } from './admin-alltransactions/admin-alltransactions.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminManagecustomersComponent } from './admin-managecustomers/admin-managecustomers.component';
import { AdminNotificationsComponent } from './admin-notifications/admin-notifications.component';
import { AdminPostnewsComponent } from './admin-postnews/admin-postnews.component';
import { AdminUpdatecustomersComponent } from './admin-updatecustomers/admin-updatecustomers.component';
import { CustomerAtmsimulatorComponent } from './customer-atmsimulator/customer-atmsimulator.component';
import { CustomerBenificiaryaddComponent } from './customer-benificiaryadd/customer-benificiaryadd.component';
import { CustomerChangepasswordComponent } from './customer-changepassword/customer-changepassword.component';
import { CustomerContactusComponent } from './customer-contactus/customer-contactus.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerMyprofileComponent } from './customer-myprofile/customer-myprofile.component';
import { CustomerPaymentComponent } from './customer-payment/customer-payment.component';
import { CustomerRequestComponent } from './customer-request/customer-request.component';
import { CustomerTrackserviceComponent } from './customer-trackservice/customer-trackservice.component';
import { CustomerTransferfundsComponent } from './customer-transferfunds/customer-transferfunds.component';
import { CutomerTransactionComponent } from './cutomer-transaction/cutomer-transaction.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { NewsComponent } from './news/news.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [

  {path:'adminhome',component:AdminHomeComponent},
  {path:'addcus',component:AdminAddcustomersComponent},
  {path:'managecus',component:AdminManagecustomersComponent},
  {path:'updatecus/:customerid',component:AdminUpdatecustomersComponent},
  {path:'adminnews',component:AdminPostnewsComponent},
  {path:'notification',component:AdminNotificationsComponent},
  {path:'alltransactions',component:AdminAlltransactionsComponent},


  {path:'cushome',component:CustomerHomeComponent},
  {path:'cumyprofile',component:CustomerMyprofileComponent},
  {path:'curequest',component:CustomerRequestComponent},
  {path:'cutrans',component:CutomerTransactionComponent},
  {path:'cutrfunds',component:CustomerTransferfundsComponent},
  {path:'cupayment',component:CustomerPaymentComponent},
  {path:'cubenificiary',component:CustomerBenificiaryaddComponent},
  {path:'cuatm',component:CustomerAtmsimulatorComponent},
  {path:'cucontactus',component:CustomerContactusComponent},
  {path:'login',component:LoginformComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'news',component:NewsComponent},
  {path:'register',component:RegisterComponent},
  {path:'track',component:CustomerTrackserviceComponent},
  {path:'changepassword',component:CustomerChangepasswordComponent}


  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
