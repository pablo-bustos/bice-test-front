declare const Buffer
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import * as crypto from "crypto";

@Injectable({
  providedIn: 'root'
})

export class SecurityUtil {
  pubKey: string

  constructor(private http: HttpClient) { 
    this.loadPublicKey()
  }

  loadPublicKey() {
    this.http.get('assets/keys/bice.pub', { responseType: 'text' })
      .subscribe(
        data => {
          this.pubKey = data
        }
      )
  }

  encrypt(param: string){
    // return crypto.publicEncrypt(this.pubKey, Buffer.from(param, 'utf8')).toString("base64");
  }
}