import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  standalone: true,
  template: `
    <footer class="flex justify-content-center text-color bg-footer">
      <section class="w-8 my-6">
        <div class="flex justify-content-around">
          <div class="align-content-center">
            <div class="flex justify-content-center align-content-center">
              <img src="assets/logo.png" alt="Logo" width="60px" />
              <p class="ml-3 text-xl font-bold">Sport Training</p>
            </div>
            <div>
              <a href="https://www.whatsapp.com" target="_blank">
                <img
                  class="img-size"
                  src="assets/whatsapp.png"
                  alt="Whatsapp"
                />
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <img
                  class="img-size"
                  src="assets/facebook.png"
                  alt="Facebook"
                />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <img class="img-size" src="assets/youtube.png" alt="Youtube" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img
                  class="img-size"
                  src="assets/instagram.png"
                  alt="Instagram"
                />
              </a>
              <a href="https://www.tiktok.com" target="_blank">
                <img class="img-size" src="assets/tiktok.png" alt="Tiktok" />
              </a>
            </div>
          </div>
          <div class="flex justify-content-around w-5">
            <div>
              <p class="font-bold text-2xl">SportTraining.com</p>
              <p>Envía tus comentarios</p>
              <p>Publicidad</p>
              <p>Contacto</p>
              <p>Términos & Condiciones</p>
              <p>Políticas de Privacidad</p>
              <p>Políticas de Cookies</p>
            </div>
            <div>
              <p class="font-bold text-2xl">Lugares</p>
              <p>Murcia</p>
              <p>Almería</p>
              <p>Albacete</p>
              <p>Málaga</p>
              <p>Alicante</p>
            </div>
          </div>
        </div>
        <p class="text-center mt-6">
          © 2024 Sport Training - Todos los derechos reservados.
        </p>
      </section>
    </footer>
  `,
  styles: `
    .img-size {
      width: 50px;
      height: 50px;
      margin: 30px 5px 0 5px;
    }

    .bg-footer {
      background-color: #222;
    }
  `,
})
export class FooterComponent {}
