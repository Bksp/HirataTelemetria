const f=`<section id="login-section" class="content-section position-relative overflow-hidden" style="padding: 0;">
                        <!-- Floating Credentials Widget (Zorin OS Desktop widget style) -->
                        <div class="zorin-credentials-widget p-3 glass-card">
                            <h6 class="fw-bold mb-2 text-white"><i class="bi bi-info-circle text-primary me-2"></i>Demo Credentials</h6>
                            <p class="small text-white text-opacity-70 mb-2">Use these credentials to test the login experience:</p>
                            <div class="mb-1"><span class="small text-white text-opacity-50">Username:</span> <code class="text-primary">admin</code></div>
                            <div><span class="small text-white text-opacity-50">Password:</span> <code class="text-primary">admin123</code></div>
                        </div>

                        <!-- Zorin OS Login Shell -->
                        <div class="zorin-login-container">
                            <!-- Top Bar (Centered Clock) -->
                            <div class="zorin-top-bar d-flex justify-content-center w-100 pt-3">
                                <div id="zorinClock" class="fw-medium text-white text-opacity-80">24 Dec 07:07</div>
                            </div>

                            <!-- Center Login Form -->
                            <div class="zorin-center-login">
                                <!-- Avatar -->
                                <div class="zorin-avatar shadow-lg">
                                    <!-- Generic theme-aware icon -->
                                    <i id="zorinAvatarIcon" class="bi bi-person text-white text-opacity-40"></i>
                                    <!-- Custom profile image -->
                                    <img id="zorinAvatarImg" src="./src/user-avatar.png" alt="User Avatar" class="no-zoom d-none">
                                </div>

                                <!-- Greeting Text (Persistent and animated) -->
                                <div id="zorinGreeting" class="zorin-username text-white text-center m-0">Hi?</div>

                                <!-- Username Selection / Input Step -->
                                <div id="loginStepUsername" class="w-100 text-center">
                                    <form onsubmit="event.preventDefault(); goToPasswordStep();" class="zorin-input-wrapper mt-1 px-4">
                                        <!-- Left spacer to balance centering -->
                                        <div class="zorin-spacer"></div>
                                        
                                        <!-- Username Input -->
                                        <div class="zorin-input-container">
                                            <input type="text" id="zorinUsername" class="zorin-input text-center" placeholder="Username" autocomplete="username" required>
                                        </div>
                                        
                                        <!-- Forward button -->
                                        <button type="submit" class="zorin-forward-btn" aria-label="Next Step">
                                            <i class="bi bi-arrow-right-short fs-4"></i>
                                        </button>
                                    </form>
                                </div>

                                <!-- Password Entry Step (Zorin Style) -->
                                <div id="loginStepPassword" class="w-100 text-center d-none">
                                    <form onsubmit="event.preventDefault(); submitZorinLogin();" class="zorin-input-wrapper mt-1 px-4">
                                        <!-- Back arrow button -->
                                        <button type="button" class="zorin-back-btn" onclick="goToUsernameStep()" aria-label="Go Back">
                                            <i class="bi bi-arrow-left-short fs-4"></i>
                                        </button>
                                        
                                        <!-- Password input with reveal icon inside -->
                                        <div class="zorin-input-container">
                                            <input type="password" id="zorinPassword" class="zorin-input" placeholder="Password" autocomplete="current-password" required>
                                            <span class="zorin-toggle-password" onclick="toggleZorinPasswordVisibility()">
                                                <i id="passwordEyeIcon" class="bi bi-eye"></i>
                                            </span>
                                        </div>
                                        
                                        <!-- Forward / Submit button -->
                                        <button type="submit" class="zorin-forward-btn" aria-label="Login">
                                            <i class="bi bi-arrow-right-short fs-4"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <!-- Bottom Bar (ZORIN logo and settings) -->
                            <div class="zorin-bottom-bar w-100 d-flex justify-content-center align-items-center position-relative pb-4">
                                <div class="zorin-logo">GLASSKIT</div>
                                <i class="bi bi-gear zorin-settings-btn" onclick="showGlassAlert('Ajustes de accesibilidad y del sistema de Zorin OS.', 'info', [{ text: 'Aceptar', class: 'btn-glass-info', onClick: (t) => t.remove() }, { text: 'Cancelar', class: 'btn-glass-secondary', onClick: (t) => t.remove() }])"></i>
                            </div>
                        </div>
                    </section>`;function b(u){u.innerHTML=f;const a=document.getElementById("zorinUsername"),n=document.getElementById("zorinAvatarIcon"),s=document.getElementById("zorinAvatarImg");let d="";function c(){if(a&&n&&s){const t=a.value.trim().toLowerCase()==="admin",e=t?"admin":"generic";d!==e&&(d=e,t?(n.classList.add("d-none"),s.classList.remove("d-none"),s.classList.remove("avatar-entrance-effect"),s.offsetWidth,s.classList.add("avatar-entrance-effect")):(s.classList.add("d-none"),n.classList.remove("d-none"),n.classList.remove("avatar-entrance-effect"),n.offsetWidth,n.classList.add("avatar-entrance-effect")))}}a&&(a.addEventListener("input",c),c(),a.addEventListener("keydown",t=>{t.key==="Enter"&&(t.preventDefault(),window.goToPasswordStep())}));const l=document.getElementById("zorinPassword");l&&l.addEventListener("keydown",t=>{t.key==="Enter"&&(t.preventDefault(),window.submitZorinLogin())});function m(){const t=document.getElementById("zorinClock");if(!t)return;const e=new Date,i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=i[e.getDay()],g=e.getDate(),w=o[e.getMonth()],v=String(e.getHours()).padStart(2,"0"),y=String(e.getMinutes()).padStart(2,"0");t.textContent=`${p} ${g} ${w} ${v}:${y}`}setInterval(m,1e3),m();function r(t){const e=document.getElementById("zorinGreeting");e&&(e.classList.add("greeting-hidden"),setTimeout(()=>{e.textContent=t,e.classList.remove("greeting-hidden")},200))}window.goToPasswordStep=function(){const e=document.getElementById("zorinUsername").value.trim();if(!e){window.showGlassAlert("Please enter a username.","warning");return}r(`Hi ${e}!`);const i=document.getElementById("loginStepUsername"),o=document.getElementById("loginStepPassword");i.classList.add("d-none"),o.classList.remove("d-none"),setTimeout(()=>{document.getElementById("zorinPassword").focus()},100)},window.goToUsernameStep=function(){r("Hi?");const t=document.getElementById("loginStepUsername");document.getElementById("loginStepPassword").classList.add("d-none"),t.classList.remove("d-none"),setTimeout(()=>{document.getElementById("zorinUsername").focus()},100)},window.toggleZorinPasswordVisibility=function(){const t=document.getElementById("zorinPassword"),e=document.getElementById("passwordEyeIcon");t.type==="password"?(t.type="text",e.classList.remove("bi-eye"),e.classList.add("bi-eye-slash")):(t.type="password",e.classList.remove("bi-eye-slash"),e.classList.add("bi-eye"))},window.submitZorinLogin=function(){const t=document.getElementById("zorinUsername").value.trim(),e=document.getElementById("zorinPassword").value.trim(),i=document.querySelector(".zorin-center-login");if(t==="admin"&&e==="admin123"){const o=document.getElementById("loginStepPassword");o&&o.classList.add("d-none"),r("Welcome"),window.showGlassAlert("Welcome to GlassKit OS! Access granted.","success"),setTimeout(()=>{document.getElementById("zorinUsername").value="",document.getElementById("zorinUsername").dispatchEvent(new Event("input")),document.getElementById("zorinPassword").value="",window.goToUsernameStep()},1500)}else i.classList.add("shake-animation"),window.showGlassAlert("Authentication failed. Please verify credentials.","danger"),setTimeout(()=>{i.classList.remove("shake-animation")},500)}}export{b as init};
