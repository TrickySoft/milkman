import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";

@Component({
  selector: "app-paymentbook",
  templateUrl: "./paymentbook.component.html",
  styleUrls: ["./paymentbook.component.css"],
})
export class PaymentbookComponent implements OnInit {
  date: any = null;
  particular: any = null;
  debit: any = null;
  credit: any = null;
  balance: any = null;
  allpayments: any = null;

  constructor(private _rest: RestService) { }
  ngOnInit(): void { }
  editPayment() { }
  deletePayment() { }
}
