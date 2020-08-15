import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  routes = [];
  userDetail = {
    name: 'John Doe',
    email: 'emailaddress@eamil.com',
    profileImage: 'https://fuguchat.s3.ap-south-1.amazonaws.com/production/34954/image/e4DBtyuvWB_1596093394729.png'
  };

  constructor() {
    
  }

  ngOnInit() {
    this.routes = [{
      label: 'Dashboard',
      path: 'dashboard',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path fill="#a0b3ff" fill-rule="evenodd" d="M4 3c-1.1 0-2 .9-2 2v12l3-3h9c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4zm14 5v4c0 2.206-1.794 4-4 4H8v1c0 1.1.9 2 2 2h9l3 3V10c0-1.1-.9-2-2-2h-2z"></path>
  </svg>`
    }, {
      label: 'Site Details',
      path: 'details',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <g fill="none" fill-rule="evenodd">
          <path fill="#a0b3ff" d="M22 3l-5.3.8 1.542 1.544-3.064 3.064-1.61-1.508-4.076 4.178-1.484-1.484-4.705 4.61 1.4 1.427 3.29-3.225 1.515 1.516 4.123-4.223 1.592 1.492 4.433-4.433L21.2 8.3 22 3zm-3 8v11h2V11h-2zm-4 2v9h2v-9h-2zm-4 2v7h2v-7h-2zm-4 2v5h2v-5H7zm-4 2v3h2v-3H3z"></path>
      </g>
  </svg>`
    }, {
      label: 'Migrations',
      path: 'migration',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill="none" fill-rule="evenodd">
          <path fill="#a0b3ff" d="M3.83 3a1.819 1.819 0 0 0-1.823 1.81L2 15.665c0 1 .82 1.811 1.832 1.811h1.83v3.62l3.665-3.62h1.833c0-.629.097-1.236.27-1.81H3.833L3.83 4.81H18.49v6.405a6.404 6.404 0 0 1 1.832.546V4.81c0-.996-.824-1.81-1.832-1.81H3.83zm12.886 9.952a.231.231 0 0 0-.231.204l-.108.915a3.645 3.645 0 0 0-1.191.68l-.86-.367a.232.232 0 0 0-.29.097l-.86 1.467a.228.228 0 0 0 .063.298l.739.541c-.043.224-.07.454-.07.69 0 .234.026.463.07.687l-.737.542a.227.227 0 0 0-.063.299l.857 1.466a.233.233 0 0 0 .294.096l.857-.366c.347.297.748.528 1.191.68l.108.916a.23.23 0 0 0 .23.203h1.715a.231.231 0 0 0 .23-.203l.108-.916a3.645 3.645 0 0 0 1.192-.68l.859.368a.233.233 0 0 0 .291-.098l.86-1.466a.228.228 0 0 0-.064-.299l-.739-.542a3.55 3.55 0 0 0 .07-.688 3.55 3.55 0 0 0-.07-.687l.738-.543a.227.227 0 0 0 .062-.298l-.857-1.467a.233.233 0 0 0-.293-.095l-.857.365a3.652 3.652 0 0 0-1.192-.68l-.107-.915a.23.23 0 0 0-.231-.204h-1.714zm.857 2.94c.885 0 1.603.71 1.603 1.584 0 .874-.718 1.584-1.603 1.584s-1.604-.71-1.604-1.584c0-.875.719-1.583 1.604-1.583z"></path>
      </g>
  </svg>`
    }, {
      label: 'Backup',
      path: 'backup',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#a0b3ff" fill-rule="evenodd" d="M11.424 2a.501.501 0 0 0-.494.418l-.284 1.705a7.911 7.911 0 0 0-1.41.38L8.135 3.169a.5.5 0 0 0-.637-.115l-.996.576a.499.499 0 0 0-.219.607l.606 1.618c-.376.312-.723.66-1.035 1.035l-1.618-.606a.499.499 0 0 0-.607.219l-.576.996a.5.5 0 0 0 .115.637l1.336 1.101a7.911 7.911 0 0 0-.381 1.41l-1.705.284a.501.501 0 0 0-.418.494v1.152c0 .244.177.454.418.494l1.705.284c.084.486.213.957.38 1.41l-1.335 1.101a.5.5 0 0 0-.115.637l.576.996c.122.212.38.305.607.219l1.618-.606c.312.376.66.723 1.035 1.035l-.606 1.618a.5.5 0 0 0 .219.607l.996.576a.502.502 0 0 0 .637-.115l1.1-1.336c.453.168.924.297 1.411.381l.284 1.705c.04.241.249.418.494.418h1.152a.501.501 0 0 0 .494-.418l.284-1.705a7.911 7.911 0 0 0 1.41-.38l1.101 1.335a.5.5 0 0 0 .637.115l.996-.576a.499.499 0 0 0 .219-.607l-.606-1.618c.376-.312.723-.66 1.035-1.035l1.618.606a.5.5 0 0 0 .607-.219l.576-.996a.502.502 0 0 0-.115-.637l-1.336-1.1c.168-.453.297-.924.381-1.411l1.705-.284a.501.501 0 0 0 .418-.494v-1.152a.501.501 0 0 0-.418-.494l-1.705-.284a7.911 7.911 0 0 0-.38-1.41l1.335-1.101a.5.5 0 0 0 .115-.637l-.576-.996a.499.499 0 0 0-.607-.219l-1.618.606a8.092 8.092 0 0 0-1.035-1.035l.606-1.618a.5.5 0 0 0-.219-.607l-.996-.576a.502.502 0 0 0-.637.115l-1.1 1.336a7.912 7.912 0 0 0-1.411-.381l-.284-1.705A.501.501 0 0 0 12.576 2h-1.152zM11 6.09v3.098C9.843 9.604 9 10.707 9 12c0 .187.021.369.055.547l-2.676 1.545A6.01 6.01 0 0 1 6 12a5.978 5.978 0 0 1 5-5.91zm2 0a5.978 5.978 0 0 1 4.62 8.002l-2.675-1.545c.034-.178.055-.36.055-.547 0-1.293-.843-2.395-2-2.813V6.09zM12 11c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zm-1.932 3.27c.525.448 1.195.73 1.932.73.737 0 1.407-.282 1.932-.73l2.697 1.556A5.979 5.979 0 0 1 12 18a5.979 5.979 0 0 1-4.629-2.174l2.697-1.556z"></path>
  </svg>`
    }, {
      label: 'Collabrators',
      path: 'collabrators',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#a0b3ff" fill-rule="evenodd" d="M14 4a7.003 7.003 0 0 1 6.71 5h.79a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H21v4a3 3 0 0 1-3 3h-3v-1a1 1 0 0 0-.883-.993L14 18h-4a1 1 0 0 0-.993.883L9 19v1H6a3 3 0 0 1-3-3v-4h-.5A1.5 1.5 0 0 1 1 11.5v-1A1.5 1.5 0 0 1 2.5 9h.79C4.15 6.108 6.829 4 10 4h4zm2 4H8a3 3 0 0 0-.176 5.995L8 14h8a3 3 0 0 0 0-6zM8.5 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path>
  </svg>`
    }, {
      label: 'Support Tickets',
      path: 'support',
      icon: `<svg width="20px" height="20px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Artboard</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="speech-bubble" transform="translate(0.000000, 3.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M24,9.34782609 C23.482544,9.34782609 23.0625,9.76665254 23.0625,10.2826087 C23.0625,10.7985649 23.482544,11.2173913 24,11.2173913 C24.517456,11.2173913 24.9375,10.7985649 24.9375,10.2826087 C24.9375,9.76665254 24.517456,9.34782609 24,9.34782609 Z" id="Shape"></path>
              <path d="M8.4375,26.173913 C8.95495603,26.173913 9.375,25.7550866 9.375,25.2391304 C9.375,24.7231743 8.95495603,24.3043478 8.4375,24.3043478 C7.92004397,24.3043478 7.5,24.7231743 7.5,25.2391304 C7.5,25.7550866 7.92004397,26.173913 8.4375,26.173913 Z" id="Shape"></path>
              <path d="M31.5,0 C23.0599365,0 16.1326904,5.80222482 15.5969239,13.1106912 C7.55895994,13.5127208 0,19.2919412 0,27.1086957 C0,30.3753226 1.29638672,33.5404382 3.65625,36.0482846 C4.12316897,37.9675101 3.55627444,40.0017578 2.14965825,41.4042969 C1.88159175,41.6715862 1.80139163,42.0736159 1.94641116,42.4230639 C2.09143069,42.7721467 2.43310547,43 2.8125,43 C5.48620603,43 8.06286619,41.9545771 9.97741697,40.1123981 C11.8425293,40.7462976 14.276001,41.1304348 16.5,41.1304348 C24.9389648,41.1304348 31.8654786,35.3296705 32.4027099,28.0226648 C34.3656006,27.9357591 36.4072266,27.5742612 38.022583,27.0254416 C39.9371338,28.8676206 42.513794,29.9130435 45.1875,29.9130435 C45.5668945,29.9130435 45.9085693,29.6851902 46.0535888,29.3361073 C46.1986084,28.9866593 46.1184083,28.5846297 45.8503418,28.3173404 C44.4437256,26.9148013 43.876831,24.8805536 44.34375,22.9613281 C46.7036133,20.4534817 48,17.2883661 48,14.0217391 C48,5.89971975 39.8587646,0 31.5,0 Z M16.5,39.2608696 C14.2873536,39.2608696 11.7659912,38.8278024 10.0770263,38.1577531 C9.71520994,38.0138841 9.30175781,38.1084579 9.03845213,38.3951002 C7.90649419,39.6289402 6.43469241,40.4892323 4.83105469,40.8846892 C5.71472166,39.1966033 5.94030759,37.2065388 5.40270994,35.3209069 C5.36022947,35.1722911 5.28149419,35.0364555 5.17346194,34.9258152 C3.04650881,32.7414911 1.875,29.9652599 1.875,27.1086957 C1.875,20.5213995 8.57226563,14.9565217 16.5,14.9565217 C23.9860839,14.9565217 30.5625,20.1471213 30.5625,27.1086957 C30.5625,33.8095534 24.2541504,39.2608696 16.5,39.2608696 Z M42.8265381,21.8388587 C42.7185058,21.9498641 42.6397705,22.0856997 42.5972901,22.2339504 C42.0596924,24.1195822 42.2852783,26.1096467 43.1689453,27.7977327 C41.5653076,27.4026409 40.0935058,26.5419837 38.9615479,25.3081437 C38.6982422,25.0218665 38.2847901,24.9269276 37.9229737,25.0707966 C36.4592286,25.6513841 34.3710938,26.0534138 32.3997803,26.1505435 C32.1258545,22.6155316 30.3574219,19.2930367 27.3339844,16.826087 L39.5625,16.826087 C40.0803223,16.826087 40.5,16.4076257 40.5,15.8913043 C40.5,15.374983 40.0803223,14.9565217 39.5625,14.9565217 L24.4537354,14.9565217 C22.3256836,13.8764096 19.9361573,13.2465268 17.4766846,13.1143428 C18.0153808,6.83596295 24.0992432,1.86956522 31.5,1.86956522 C39.4277344,1.86956522 46.125,7.43444293 46.125,14.0217391 C46.125,16.8783034 44.9534912,19.6545346 42.8265381,21.8388587 Z" id="Shape"></path>
              <path d="M24,24.3043478 L12.1875,24.3043478 C11.6696777,24.3043478 11.25,24.7228091 11.25,25.2391304 C11.25,25.7554518 11.6696777,26.173913 12.1875,26.173913 L24,26.173913 C24.5178223,26.173913 24.9375,25.7554518 24.9375,25.2391304 C24.9375,24.7228091 24.5178223,24.3043478 24,24.3043478 Z" id="Shape"></path>
              <path d="M24,29.9130435 L8.4375,29.9130435 C7.91967769,29.9130435 7.5,30.3315047 7.5,30.8478261 C7.5,31.3641475 7.91967769,31.7826087 8.4375,31.7826087 L24,31.7826087 C24.5178223,31.7826087 24.9375,31.3641475 24.9375,30.8478261 C24.9375,30.3315047 24.5178223,29.9130435 24,29.9130435 Z" id="Shape"></path>
              <path d="M39.5625,9.34782609 L27.75,9.34782609 C27.2321777,9.34782609 26.8125,9.76628732 26.8125,10.2826087 C26.8125,10.7989301 27.2321777,11.2173913 27.75,11.2173913 L39.5625,11.2173913 C40.0803223,11.2173913 40.5,10.7989301 40.5,10.2826087 C40.5,9.76628732 40.0803223,9.34782609 39.5625,9.34782609 Z" id="Shape"></path>
          </g>
      </g>
  </svg>`
    }, {
      label: 'Open New Ticket',
      path: 'ticket',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve" width="20px" height="20px" class=""><g><g>
      <path d="M10,25.465h13c0.553,0,1-0.448,1-1s-0.447-1-1-1H10c-0.553,0-1,0.448-1,1S9.447,25.465,10,25.465z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#B5D2E1"></path>
      <path d="M36,29.465H10c-0.553,0-1,0.448-1,1s0.447,1,1,1h26c0.553,0,1-0.448,1-1S36.553,29.465,36,29.465z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#B5D2E1"></path>
      <path d="M36,35.465H10c-0.553,0-1,0.448-1,1s0.447,1,1,1h26c0.553,0,1-0.448,1-1S36.553,35.465,36,35.465z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#B5D2E1"></path>
      <path d="M54.072,2.535L19.93,2.465c-3.27,0-5.93,2.66-5.93,5.93v5.124l-8.07,0.017c-3.27,0-5.93,2.66-5.93,5.93v21.141   c0,3.27,2.66,5.929,5.93,5.929H12v10c0,0.413,0.254,0.784,0.64,0.933c0.117,0.045,0.239,0.067,0.36,0.067   c0.276,0,0.547-0.115,0.74-0.327l9.704-10.675l16.626-0.068c3.27,0,5.93-2.66,5.93-5.929v-0.113l5.26,5.786   c0.193,0.212,0.464,0.327,0.74,0.327c0.121,0,0.243-0.022,0.36-0.067c0.386-0.149,0.64-0.52,0.64-0.933v-10h1.07   c3.27,0,5.93-2.66,5.93-5.929V8.465C60,5.196,57.341,2.536,54.072,2.535z M44,40.536c0,2.167-1.763,3.929-3.934,3.929l-17.07,0.07   c-0.28,0.001-0.548,0.12-0.736,0.327L14,53.949v-8.414c0-0.552-0.447-1-1-1H5.93c-2.167,0-3.93-1.763-3.93-3.929V19.465   c0-2.167,1.763-3.93,3.932-3.93l9.068-0.019c0,0,0,0,0,0c0.001,0,0.001,0,0.002,0l25.068-0.052c2.167,0,3.93,1.763,3.93,3.93   v18.441V40.536z M58,29.606c0,2.167-1.763,3.929-3.93,3.929H52c-0.553,0-1,0.448-1,1v8.414l-5-5.5V19.395   c0-3.27-2.66-5.93-5.932-5.93L16,13.514v-5.12c0-2.167,1.763-3.93,3.928-3.93l34.141,0.07c0.001,0,0.001,0,0.002,0   c2.167,0,3.93,1.763,3.93,3.93V29.606z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#B5D2E1"></path>
  </g></g> </svg>`
    }];
  }

}
