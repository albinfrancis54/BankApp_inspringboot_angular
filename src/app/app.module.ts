import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminManagecustomersComponent } from './admin-managecustomers/admin-managecustomers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAddcustomersComponent } from './admin-addcustomers/admin-addcustomers.component';
import { AdminUpdatecustomersComponent } from './admin-updatecustomers/admin-updatecustomers.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminPostnewsComponent } from './admin-postnews/admin-postnews.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerMyprofileComponent } from './customer-myprofile/customer-myprofile.component';
import { CustomerRequestComponent } from './customer-request/customer-request.component';
import { CutomerTransactionComponent } from './cutomer-transaction/cutomer-transaction.component';
import { CustomerTransferfundsComponent } from './customer-transferfunds/customer-transferfunds.component';
import { CustomerPaymentComponent } from './customer-payment/customer-payment.component';
import { CustomerBenificiaryaddComponent } from './customer-benificiaryadd/customer-benificiaryadd.component';
import { CustomerAtmsimulatorComponent } from './customer-atmsimulator/customer-atmsimulator.component';
import { CustomerContactusComponent } from './customer-contactus/customer-contactus.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';  
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFontAwesomeModule } from 'angular-font-awesome/dist';
import { FilterPipe } from './filter.pipe';
import { RegisterComponent } from './register/register.component';
import { AdminNotificationsComponent } from './admin-notifications/admin-notifications.component';
import { SimpleserviceService } from './simpleservice.service';
import { CustomerTrackserviceComponent } from './customer-trackservice/customer-trackservice.component';
import { CustomerChangepasswordComponent } from './customer-changepassword/customer-changepassword.component';
import { SortPipe } from './sort.pipe';
import { BeneficiaryPipe } from './beneficiary.pipe';
import { AdminAlltransactionsComponent } from './admin-alltransactions/admin-alltransactions.component';
import { AdminTransationPipe } from './admin-transation.pipe';
import { NewsComponent } from './news/news.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminManagecustomersComponent,
    AdminAddcustomersComponent,
    AdminUpdatecustomersComponent,
    AdminHomeComponent,
    AdminPostnewsComponent,
    CustomerHomeComponent,
    CustomerMyprofileComponent,
    CustomerRequestComponent,
    CutomerTransactionComponent,
    CustomerTransferfundsComponent,
    CustomerPaymentComponent,
    CustomerBenificiaryaddComponent,
    CustomerAtmsimulatorComponent,
    CustomerContactusComponent,
    LoginformComponent,
    HomeComponent,
    AboutComponent,
    FilterPipe,
    RegisterComponent,
    AdminNotificationsComponent,
    CustomerTrackserviceComponent,
    CustomerChangepasswordComponent,
    SortPipe,
    BeneficiaryPipe,
    AdminAlltransactionsComponent,
    AdminTransationPipe,
    NewsComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AngularFontAwesomeModule,
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
