## 🌐 [Versão em Português](README.md)

# Batuque-Web

**Batuque-Web** is the demo site for the Batuque project. It showcases a series of sections and features that highlight the application of modern technologies and web development practices. This project introduces the innovative Batuque augmented reality drum, offering an engaging and accessible experience for learning and practicing drums without the need for traditional equipment.

## 🔨 Project Features

- **Fixed Header:** A fixed header with a navigation menu and buttons for contact and bug reporting.
- **Responsiveness:** Responsive design that adapts to different screen sizes, ensuring a good experience on mobile devices.
- **Interactivity:** An interactive navigation menu that adjusts to screen size and displays options appropriately on smaller devices.
- **Animations and Transitions:** Subtle animations and smooth transitions to enhance the user experience.
- **Scroll Animations:** Use of the AOS library to add animations when elements come into view during page scrolling.
- **Icon Integration:** Use of icons to enrich the interface and improve navigation.

### Visual Example of the Project

![chrome-capture-2024-9-29 (1)](https://github.com/user-attachments/assets/68537267-d925-4154-859b-60dd55c12999)
![chrome-capture-2024-9-29](https://github.com/user-attachments/assets/9f581bbe-060a-40c7-9c27-6359345e4085)

## ✔️ Technologies and Techniques Used

- **Vue.js:** JavaScript framework for building the interface.
- **Vite:** Build tool for fast development.
- **AOS (Animate On Scroll):** Library for adding animations to elements during page scrolling.
- **Boxicons & Remix Icons:** Icons to improve UI.
- **Google Fonts:** Custom font for a modern look.
- **CSS Custom Properties:** CSS variables for easy color and style customization.
- **CSS Animations:** Use of CSS animations for visual effects.

## 📁 Project Structure

- **public/**
    - `favicon.ico`: Site icon.
    - `img/`
        - `batuqueimg.jpg`: Main project image.
        - `favicon-16x16.png`: Favicon 16x16.
        - `favicon-32x32.png`: Favicon 32x32.
        - `favicon.ico`: Default favicon.
        - `homem_tocando.png`: Additional image.
        - `logo.svg`: SVG logo.
        - `logo_png 180x180.png`: PNG logo 180x180.
        - `logo_png 192x192.png`: PNG logo 192x192.
        - `logo_png 512x512.png`: PNG logo 512x512.
        - `macro-eye-iris.jpg`: Additional image.
        - `opencv_logo.png`: OpenCV logo.
        - `realidade_aumentada.jpg`: Additional image.
        - **members/**
            - `Anthonny.jpg`
            - `Edson.jpg`
            - `Felipe.jpg`
            - `Gabriel.jpg`
            - `Helson.jpg`
            - `Rian.jpg`
        - `site.webmanifest`: Site manifest.
        - `visao_computacional.jpg`: Additional image.
- **src/**
    - `App.vue`: Main Vue application component.
    - **assets/**
        - `base.css`: Base project styles.
        - `logo.svg`: SVG logo.
        - `main.css`: Main project styles.
    - **components/**
        - `About.vue`: About component.
        - `BugReport.vue`: Component for bug reporting.
        - `Contact.vue`: Contact component.
        - `Footer.vue`: Footer component.
        - `Header.vue`: Header component.
        - `Hero.vue`: Main section component.
        - `ProjectOverview.vue`: Project overview component.
        - `Resources.vue`: Resources component.
        - `Services.vue`: Services component.
        - `Test.vue`: Test component.
    - `main.js`: Main Vue application initialization file.
- **vite.config.js**: Vite configuration for the project.

## 🛠️ How to Open and Run the Project

To start the project locally, follow the steps below:

1. **Make sure Node.js is installed**:
    - [Node.js](https://nodejs.org/) is required to run the project. You can check if it's already installed by running:
      ```bash
      node -v
      ```
    - If not installed, download and install the recommended version.

2. **Clone the Repository**:
    - Copy the repository URL and run the following command in your terminal:
      ```bash
      git clone <REPOSITORY_URL>
      ```

3. **Install Dependencies**:
    - Navigate to the project directory and run:
      ```bash
      npm install
      ```

4. **Start the Development Server**:
    - To run the project locally, execute:
      ```bash
      npm run dev
      ```
    - The project will be available at `http://localhost:3000`.

## 🌐 Deploy

The project is hosted on Netlify and can be accessed via the following link: [batuqueofc.netlify.app](https://batuqueofc.netlify.app)
