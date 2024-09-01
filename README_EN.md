# Batuque-Web

**Batuque-Web** is the demonstration website for the Batuque project. It showcases a series of sections and features that highlight the use of modern technologies and web development practices. This project presents the innovative augmented reality drum Batuque, offering an engaging and accessible experience for learning and practicing drumming without the need for traditional equipment.

## 🔨 Project Features

- **Fixed Header:** A fixed header with a navigation menu and contact and bug report buttons.
- **Responsiveness:** Responsive design that adapts to different screen sizes, ensuring a good experience on mobile devices.
- **Interactivity:** Interactive navigation menu that adjusts to screen size and displays options appropriately on smaller devices.
- **Animations and Transitions:** Subtle animations and smooth transitions to enhance user experience.
- **Animated Scrolling Effects:** Uses the AOS library to add animations when elements come into view during page scrolling.
- **Icon Integration:** Utilizes icons to enrich the interface and facilitate navigation.

### Visual Example of the Project
![Visual Example](https://github.com/user-attachments/assets/1479893c-f58b-433b-96f6-7fdcc1fd14be)

## ✔️ Techniques and Technologies Used

- **Vue.js:** JavaScript framework for building the user interface.
- **Vite:** Build tool for fast development.
- **AOS (Animate On Scroll):** Library for adding animations to elements during page scrolling.
- **Boxicons & Remix Icons:** Icons to enhance the UI.
- **Google Fonts:** Custom fonts for a modern look.
- **CSS Custom Properties:** CSS variables for easy customization of colors and styles.
- **CSS Animations:** Use of CSS animations for visual effects.

## 📁 Project Structure

- **public/**
    - `favicon.ico`: Site icon.
    - `img/`
        - `batuqueimg.jpg`: Main project image.
        - `favicon-16x16.png`: 16x16 favicon.
        - `favicon-32x32.png`: 32x32 favicon.
        - `favicon.ico`: Default favicon.
        - `homem_tocando.png`: Additional image.
        - `logo.svg`: Logo in SVG format.
        - `logo_png 180x180.png`: PNG logo 180x180.
        - `logo_png 192x192.png`: PNG logo 192x192.
        - `logo_png 512x512.png`: PNG logo 512x512.
        - `macro-eye-iris.jpg`: Additional image.
        - `opencv_logo.png`: OpenCV logo.
        - `realidade_aumentada.jpg`: Additional image.
        - `site.webmanifest`: Site manifest.
        - `visao_computacional.jpg`: Additional image.
- **src/**
    - `App.vue`: Main Vue application component.
    - **assets/**
        - `base.css`: Base styles for the project.
        - `logo.svg`: Logo in SVG format.
        - `main.css`: Main styles for the project.
    - **components/**
        - `About.vue`: About component.
        - `BugReport.vue`: Component for reporting bugs.
        - `Contact.vue`: Contact component.
        - `Footer.vue`: Footer component.
        - `Header.vue`: Header component.
        - `Hero.vue`: Main section component.
        - **icons/**: Icons for the project.
        - `Resources.vue`: Resources component.
        - `Services.vue`: Services component.
        - `Test.vue`: Test component.
    - `main.js`: Main file for initializing the Vue application.
- **take_folder_code_and_names.py**: Python script for generating directory and file listings.
- **vite.config.js**: Vite configuration for the project.

## 🛠️ Running the Project

To start the project locally, follow these steps:

1. **Ensure Node.js is installed**:
    - [Node.js](https://nodejs.org/) is required to run the project. You can check if it is already installed with:
      ```bash
      node -v
      ```
    - If it is not installed, download and install the recommended version.

2. **Clone the Repository**:
    - Copy the repository URL and run the following command in the terminal:
      ```bash
      git clone <REPOSITORY_URL>
      ```

3. **Install Dependencies**:
    - Navigate to the project directory and run:
      ```bash
      npm install
      ```

4. **Start the Development Server**:
    - To start the project locally, run:
      ```bash
      npm run dev
      ```
    - The project will be available at `http://localhost:3000`.

## 🌐 Deploy

The project is hosted on Vercel. You can access it at: [batuque.vercel.app](https://batuque.vercel.app)
