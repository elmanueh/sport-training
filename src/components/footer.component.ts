import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  standalone: true,
  template: `
    <div class="footer">
      <div class="footer-up">
        <div class="footer-up-left">
          <div class="logo-text">
            <img src="assets/logo.png" alt="Logo" class="logo" />
            <p><strong>Sport Training</strong></p>
          </div>

          <div class="redes">
            <button class="icon-button">
              <img src="assets/whatsapp.png" alt="Whatsapp" class="logo" />
            </button>
            <button class="icon-button">
              <img src="assets/facebook.png" alt="Facebook" class="logo" />
            </button>
            <button class="icon-button">
              <img src="assets/youtube.png" alt="Youtube" class="logo" />
            </button>
            <button class="icon-button">
              <img src="assets/instagram.png" alt="Instagram" class="logo" />
            </button>
            <button class="icon-button">
              <img src="assets/tiktok.png" alt="Tiktok" class="logo" />
            </button>
          </div>
        </div>

        <div class="footer-up-right">
          <div class="contacto">
            <h1><strong>SportTraining.com</strong></h1>
            <p>Envía tus comentarios</p>
            <p>Publicidad</p>
            <p>Contacto</p>
            <p>Términos & Condiciones</p>
            <p>Políticas de Privacidad</p>
            <p>Políticas de Cookies</p>
          </div>
          <div class="lugares">
            <h1><strong>Lugares</strong></h1>
            <p>Murcia</p>
            <p>Almería</p>
            <p>Albacete</p>
            <p>Málaga</p>
            <p>Alicante</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <!-- Zona de copyright -->
        <p class="copyrigth">©</p>
        <p>2024 Sport Training - Todos los derechos reservados.</p>
      </div>
    </div>
  `,
  styles: `
  .footer {
    display: flex;
    flex-direction: column;
    background-color: #333333;
    color: #B28735;
    border-top: 1px solid #B28735;
  }
  .footer-up {
    display: flex;
    flex-direction: row;
  }

  .footer-up-left, .footer-up-right {
    padding: 30px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .logo {
    width: 40px;
    height: 40px;
  }

  .logo-text {
    display: flex;
  }

  .icon-button {
    background: none;
    border: none;
    cursor: pointer; 
  }

  .footer-up-right {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
     margin-top: 20px; 
  }

  .lugares {
    margin-left: 100px;
  }

  .contacto h1, .lugares h1 {
    font-size: 24px;
  }

  .contacto p, .lugares p {
    font-size: 14px;
  }

  .footer-bottom {
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 16px;
  }

  .copyrigth {
    font-size: 30px;
  }
`,
})
export class FooterComponent {}
