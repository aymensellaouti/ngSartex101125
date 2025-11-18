import { Pipe, PipeTransform } from "@angular/core";
const USDBTC = 91329;
@Pipe({
  name: "btc2usd",
})
export class Btc2usdPipe implements PipeTransform {
  transform(amount: number): number {
    return amount * USDBTC;
  }
}
