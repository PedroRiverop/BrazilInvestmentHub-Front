# Brazil Investment Hub

Landing page informativa para un hub de inversiones inmobiliarias en Brasil, desarrollada utilizando React, Vite y EmailJS.

## 🚀 Descripción del Proyecto

El proyecto consiste en una landing page destinada a promocionar proyectos inmobiliarios en Brasil, permitiendo la visualización de proyectos, características, ubicación y contacto directo a través de un formulario que envía correos utilizando EmailJS y está protegido mediante reCAPTCHA invisible v2.

---

## 🛠️ Características

* Landing page con diseño moderno y responsivo
* Formulario de contacto funcional con envío de correos mediante EmailJS
* Implementación de reCAPTCHA invisible v2 para protección anti-spam
* Integración de Vercel para el deploy
* Configuración de dominio personalizado `brazilinvestmenthub.com`
* Organización modular del código utilizando componentes reutilizables en React

---

## 🧰 Tecnologías Utilizadas

* React.js
* Vite.js
* EmailJS
* Google reCAPTCHA v2 Invisible
* Vercel
* Bootstrap 5
* CSS modular

---

## 🚀 Instalación y Configuración

1. Clonar el repositorio:

```
git clone https://github.com/tu_usuario/brazil-investment-hub.git
```

2. Instalar dependencias:

```
cd brazil-investment-hub
npm install
```

3. Crear un archivo `.env.local` con las siguientes variables:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_RECAPTCHA_SITE_KEY=
```

4. Ejecutar en desarrollo:

```
npm run dev
```

---

## 🌐 Deploy en Vercel

El proyecto está actualmente desplegado en [Vercel](https://vercel.com) y conectado al dominio personalizado:

* URL de producción: [https://brazilinvestmenthub.com](https://brazilinvestmenthub.com)

---

## 📸 Capturas de Pantalla

### Página principal
![Página principal](./assets/screenshots/bzhhome.png)

### Sección de Contacto
![Sección de Contacto](./assets/screenshots/bzhproject.png)

---

## ✅ Próximos Pasos / To-Do

* Implementar integración con Google Sheets para almacenar contactos
* Migrar lógica de EmailJS a un backend Flask
* Optimizar rendimiento y SEO
* Implementar Google Analytics o Plausible

---

## 📬 Contacto y Contribuciones

Para consultas o contribuciones, puedes contactarme a través de \josepedroriveropena@gmail.com o crear un issue en el repositorio.
