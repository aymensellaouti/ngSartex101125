import { Pipe, PipeTransform } from "@angular/core";
const USDBTC = 91329;
@Pipe({
  name: "btc2usd",
})
export class Btc2usdPipe implements PipeTransform {
  transform(amount: number, isBtcToUsd = true): number {
    return isBtcToUsd ? amount * USDBTC : amount / USDBTC;
  }
}
