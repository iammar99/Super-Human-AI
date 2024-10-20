# Super Human AI

## Table of Content

- [What is Super Human AI?](#what-is-super-human-ai)
- [Technologies Used](#technologies-used)
- [How Does It Work?](#how-does-it-work)
- [Why Is It Needed?](#why-is-it-needed)
- [How to Contribute?](#how-to-contribute)
- [Folder structuer](#folder-structuer)
- [Team](#team)
  


## What is Super Human AI


The Super Human AI Agent is an intelligent application designed to streamline the job application process. It takes your CV, applies to multiple jobs on LinkedIn, and provides a summary of the actions taken.


## Technologies Used

### AI Agent:
- **Crew AI** – [Crew AI](https://www.crewai.com/)
  Crew AI provides a simple and intuitive framework for building AI agents. It helps us streamline the process of developing Super Human AI, allowing us to focus on core functionalities like job searching and application automation without getting bogged down in technical complexities.

- **LangGraph** – [LangGraph](https://www.langchain.com/langgraph)
  LangGraph offers more control over low-level AI functionalities, which gives us flexibility when building custom workflows and enhancing the decision-making abilities of Super Human AI. This is crucial for managing more sophisticated user interactions and making the AI smarter in job-matching processes.

### AI Tools:
- **Selenium (Python)** – [Selenium](https://www.selenium.dev/)
  Selenium is a web automation tool that we use to simulate user interactions on job platforms like LinkedIn. It enables Super Human AI to automatically navigate through job postings, fill in applications, and perform web-based tasks efficiently, replicating human behavior on websites.

### Functionalities:
- **RAG (Advanced RAG Pipeline) – Llama 3.2 3B Lightweight Text Model**
  Retrieval-Augmented Generation (RAG) allows Super Human AI to search for jobs dynamically by retrieving relevant information from external sources. The **Llama 3.2 3B** model enables this process by providing lightweight, efficient text processing capabilities for natural language understanding and job-matching.

- **Vision Intelligence – Llama 3.2 11B Multimodal Vision Instruct Model**
  This feature enables Super Human AI to process both text and images, allowing it to understand CVs in various formats (including scanned documents). Using the **Llama 3.2 11B Multimodal Vision Instruct Model**, the AI enhances its ability to process visual inputs for a more comprehensive job search experience.



## How does it work ?


1. **User Input**: The user uploads their CV to the platform.
2. **Data Extraction**: The AI extracts relevant information from the CV, such as education, work experience, and skills.
3. **Job Search**: The agent searches for job postings on LinkedIn that match the user’s qualifications.
4. **Application Submission**: It applies to the selected job postings on behalf of the user.
5. **Results Summary**: Finally, the AI generates a summary of the jobs applied for and shares it with the user.



## Why is it needed ?


In today's competitive job market, finding the right job can be a daunting and time-consuming task. The Super Human AI Agent addresses several key challenges faced by job seekers:

### 1. **Time-Consuming Process**
Applying for jobs manually can take hours, especially for those who want to apply to multiple positions. The AI agent automates this process, allowing users to focus on preparing for interviews and enhancing their skills rather than spending countless hours on job applications.

### 2. **Matching Skills with Opportunities**
Many job seekers struggle to find positions that align with their skills and experiences. The AI agent analyzes the user's CV and searches for relevant job postings on LinkedIn, ensuring that applicants are matched with roles that fit their qualifications.

### 3. **Increased Job Application Reach**
Applying to jobs is often limited to a few opportunities. With the AI agent, users can apply to multiple job listings simultaneously, increasing their chances of landing interviews and job offers.

### 4. **Summarized Actions for Better Tracking**
Keeping track of job applications can be challenging. The AI agent provides a summary report detailing which jobs have been applied for, helping users stay organized and informed about their job search progress.

### 5. **Accessibility and Inclusivity**
Not everyone has the same level of access to job search resources or knowledge about applying effectively. The Super Human AI Agent democratizes the job application process by making it easier and more accessible for everyone, regardless of their background or experience.

### Conclusion
The Super Human AI Agent not only streamlines the job application process but also empowers job seekers by providing them with tools to navigate the job market effectively. By leveraging technology, it aims to enhance the job search experience and increase opportunities for success.



## How to contribute


Follow these steps to Run the app

1. Clone the repo by running this command in your system

    ```
    git clone https://github.com/iammar99/Super-Human-AI.git
    ```
2. Open terminal and run this command to install dependencies 

    ```
    npm install
    ```
3. Run this command to run the app on local server
    ```
    npm start
    ```




## Folder structuer

Here is the folder sturcture of the app

```

├───public
└───src
    ├───Components
    │   ├───Footer
    │   ├───Header
    │   ├───OtherComponents
    │   └───Screen Loader
    ├───Pages
    │   ├───Dashboard
    │   └───Frontend
    └───SCSS
        ├───Components
        └───Frontend
```


## Team 


<table align="center">
    <tbody>
        <tr>
            <td align="center">
                <a href="https://github.com/Ahmadjajja">
                    <img src="https://avatars.githubusercontent.com/iammar99" width="100px" style="border-radius:50%;" alt="Ammar"/>
                    <br />
                    <sub><b>Ammar</b></sub>
                </a> 
            </td>
            <td align="center">
                <a href="https://github.com/Ahmadjajja">
                    <img src="https://avatars.githubusercontent.com/yeshwanthsaim" width="100px" style="border-radius:50%;" alt="yeshwanthsaim"/>
                    <br />
                    <sub><b>Yesh</b></sub>
                </a> 
            </td>
            <td align="center">
                <a href="https://github.com/wahaabb">
                    <img src="https://avatars.githubusercontent.com/wahaabb" width="100px" style="border-radius:50%;" alt="Abdul Wahab"/>
                    <br />
                    <sub><b>Abdul Wahab</b></sub>
                </a> 
            </td>
            <td align="center">
                <a href="https://github.com/fai2a">
                    <img src="https://avatars.githubusercontent.com/fai2a" width="100px" style="border-radius:50%;" alt="Faiqa Rafia"/>
                    <br />
                    <sub><b>Faiqa Rafiq</b></sub>
                </a> 
            </td>
        </tr> 
    </tbody>
</table>



