### What is JSX, and why is it used?

Ans: jsx full form is javasccript xml. its allow us to write html like code in javascript but its not acually html. its huge help to write html code without leaving javascript file.

### What is the difference between State and Props?

Ans: props used to take an object or variable or array and pass it perents componenets to childs components.it cant be change.

on the other hand state a kind of variable thats holds a perticuler data that can be change when its Set() called.

### What is the useState hook, and how does it work?

Ans: useState hook give two things. one is a state variable and second one is a funtion that takes a agrument that change the state's value.
it use when we need to change same thing in multiple places in website.

### How can you share state between components in React?

Ans: Lifting state up method. its the only thing i know.

### How is event handling done in React?

Ans: by onClick Attribute. here we declare a funtion or just give the referece of it so when some click or intract the funtion started to exicute.

## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-007

### 📅 Deadline For 60 marks: 27th September, 2025 (11:59 pm ⏱️)

### 📅 No Deadline For 50 marks

### 📅 Deadline For 30 marks: Any time after 27th September , 2025 (11:59pm⏱️).

---

# Private Repository: https://classroom.github.com/a/VVl8VKya

# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements

### ✅ Navbar

- Website name/logo on the **left**.
- Menu items and **New Ticket** button on the **right**.

### ✅ Banner

- Banner section designed according to Figma.
- Shows a **linear gradient** background.
- Displays ticket statistics:

  - **In Progress Count**
  - **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **

   - Created **10–15 tickets** with the following properties:

     - `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**

   - Display all ticket information in a **card layout**.
   - Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**

   - Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   - Task Status shows:

     - Ticket Title
     - **Complete Button**

   - Clicking **Complete Button**:

     - show alert

### ✅ Footer

- Designed according to Figma.

### ✅ Responsiveness

- The entire website is **responsive** for mobile devices.

### ✅ Readme:

Create a README file to answer the following question-

- What is JSX, and why is it used?
- What is the difference between State and Props?
- What is the useState hook, and how does it work?
- How can you share state between components in React?
- How is event handling done in React?

---

###

## 📌 Challenge Requirements

### 🔔 React-Toastify

- Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic

Clicking **Complete Button**:

1. It is **removed from Task Status**.
2. It is added to the **Resolved List**.
3. The **In Progress count decreases**.
4. The **Resolved count increases**.
5. It is removed from the **Customer Tickets listt**.

---
