<div align="center">
  <img src="../SwApp_front/src/assets/images/Logo.png" width="200";">
</div>

Swapp is a web application that allows users to post clothing ♻️ items they no longer wear 👕 and find others to exchange with members of the community. The goal is to promote sustainable consumption🌱, reuse clothing, and facilitate exchanges between users 👥.



## 🌍 What can you do with SWAP?

- Sign up.
- Log in.
- Post clothing items you want to exchange.
- Browse available items.
- Filter items by category and date.
- View details of each item.
- Reserve, update and delete an item.
---

## 📐 [UserFlow](https://drive.google.com/file/d/1_K5Yru43z85icRXUZEprccl07NlS_frG/view?usp=sharing)

## 🛠️ Technologies used

### Frontend

| Categories | Applications Used |
|------------|---------------------|
| Technology | React 19, Vite, Visual Studio Code |
| Management Tools | Jira, with Scrum methodology and Confluence |
| Design Tools | Figma and CSS Modules |
| Version Control Tools | Git/GitHub - Gitflow - conventional commits |

### Backend

| Categories | Applications Used |
|------------|---------------------|
| Technology | Java 21, Sprint Boot 3, Visual Studio Code |
| Database | PostgreSQL, Postman |


## 🏛 Architecture

```bash
📦src
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┗ 📂Mocks
 ┃ ┃ ┗ 📜MockArticles.jsx
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📂actionButton
 ┃ ┃ ┣ 📂avatarUser
 ┃ ┃ ┣ 📂ButtonFilter
 ┃ ┃ ┣ 📂closeButton
 ┃ ┃ ┣ 📂DataProtection
 ┃ ┃ ┣ 📂favoriteButton
 ┃ ┃ ┣ 📂FlyingSwapp
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📂FullBackground
 ┃ ┃ ┣ 📂Logo
 ┃ ┃ ┣ 📂Mascot
 ┃ ┃ ┣ 📂NavbarButton
 ┃ ┃ ┣ 📂plusButton
 ┃ ┃ ┣ 📂SelectButton
 ┃ ┃ ┣ 📂SquareBackground
 ┃ ┃ ┣ 📂title
 ┃ ┃ ┣ 📂titleBox
 ┃ ┃ ┣ 📜FormField.jsx
 ┃ ┃ ┣ 📜PageTitle.jsx
 ┃ ┃ ┗ 📜SearchBar.jsx
 ┃ ┣ 📂molecules
 ┃ ┃ ┣ 📂ArticleCard
 ┃ ┃ ┣ 📂articleDetails
 ┃ ┃ ┣ 📂authModal
 ┃ ┃ ┣ 📂CategoryList
 ┃ ┃ ┣ 📂FilterNavBar
 ┃ ┃ ┣ 📂Navbar
 ┃ ┃ ┣ 📂PresentationText
 ┃ ┃ ┣ 📂SearchBar
 ┃ ┃ ┗ 📂SidebarButton
 ┃ ┣ 📂organisms
 ┃ ┃ ┣ 📂ArticleForm
 ┃ ┃ ┣ 📂articleList
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┣ 📂HeaderShop
 ┃ ┃ ┣ 📂LogInForm
 ┃ ┃ ┣ 📂SecondSectionLanding
 ┃ ┃ ┣ 📂SidebarFilters
 ┃ ┃ ┣ 📂SidebarMenu
 ┃ ┃ ┗ 📂SignUpForm
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂CreateArticle
 ┃ ┃ ┣ 📂LandingPage
 ┃ ┃ ┣ 📂LogIn
 ┃ ┃ ┣ 📂MySwaps
 ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┣ 📂Shop
 ┃ ┃ ┣ 📂SignUp
 ┃ ┃ ┗ 📂SwapHistory
 ┃ ┗ 📂templates
 ┃ ┃ ┣ 📂Dashboard
 ┃ ┃ ┣ 📂PageTemplate
 ┃ ┃ ┗ 📂RepeatingSection
 ┣ 📂context
 ┃ ┣ 📂User
 ┃ ┃ ┣ 📜UserContext.jsx
 ┃ ┃ ┗ 📜UserProvider.jsx
 ┃ ┣ 📜ArticlesContext.jsx
 ┃ ┗ 📜AuthContext.jsx
 ┣ 📂layout
 ┃ ┣ 📜Layout.jsx
 ┃ ┗ 📜Layout.module.css
 ┣ 📂router
 ┃ ┗ 📜index.jsx
 ┣ 📂services
 ┃ ┣ 📜api.js
 ┃ ┣ 📜ArticlesPath.jsx
 ┃ ┗ 📜UserPath.jsx
 ┣ 📜App.css
 ┗ 📜App.jsx
```


## 🚀 Installation and execution

Follow these steps to run the project locally:

```bash

Clone the repository:
    git clone https://github.com/SwapFemCoders/SwApp_front.git

Access the project:
    cd SwApp_front

Install dependencies:
    npm install

Run the project:
    npm run dev

The application will open at:
    http://localhost:5173

```

## 📦 Project Dependencies

**Main Dependencies**
| Dependency | Usage |
|------------|-------|
| react | Main UI Library |
| react-dom | DOM Rendering |
| react-router | Routing System |
| axios | HTTP Client for API |
| react-icons | Icons |


## 👥 **Team**

**Cristina Viejó**<br>
GitHub: [https://github.com/krissvinti-ux](https://github.com/krissvinti-ux)<br>

**Ingrid López**<br>
GitHub: [https://github.com/Nuclea88](https://github.com/Nuclea88)<br>

**Manon Godfroy**<br>
GitHub: [https://github.com/ManonChab](https://github.com/ManonChab)<br>

**Geraldine Saco**<br>
GitHub: [https://github.com/GeraldineSaco](https://github.com/GeraldineSaco)<br>

**Sukaina Hadani**<br>
GitHub: [https://github.com/sukisu91-alt](hhttps://github.com/sukisu91-alt)<br>


## 📄 License

This FullStack project is developed for educational purposes.

---



