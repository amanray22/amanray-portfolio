// Portfolio Data Configuration
// Update this file with your personal information

const portfolioData = {
    // Personal Information
    personalInfo: {
        name: "Aman Ray",
        title: "Backend Developer & Creative Problem Solver",
        description: "I craft elegant digital experiences that combine beautiful design with powerful functionality. Specializing in modern web technologies and user-centered solutions.",
        email: "contact@amanray.dev",
        phone: "+1 (437) 322-8422",
        location: "Niagara Falls, ON, Canada | Open to Remote Opportunities",
        avatar: "👨‍💻",
        social: {
            github: "https://github.com/yourusername",
            linkedin: "https://linkedin.com/in/yourusername",
            twitter: "https://twitter.com/yourusername",
            email: "mailto:contact@amanray.dev"
        }
    },

    // Projects
    projects: [
        {
            id: 1,
            title: 'Music Library Web and Mobile App',
            description: 'A comprehensive application for managing music collections, playlists, and streaming services.',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
            tags: ['C#','MVC Design Pattern','ASP .NET Core','SQL', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            link: 'https://amanmusiccollection.azurewebsites.net',
            github: '#'
            
        },
        {
            id: 2,
            title: 'Patient Charting Management System',
            description: 'Patient management system with appointment scheduling and telemedicine features.',
            image: 'images/PatientCharting.jpg',
            tags: ['C#','MVC Design Pattern','ASP .NET Core', 'HTML', 'CSS', 'JavaScript', 'Bootstrap','SQL', 'SQLite'],
            link: 'https://movementcharts.azurewebsites.net',
            github: '#'
            
        },
        {
            id: 3,
            title: 'Tech Hackathon WebApi Project',
            description: 'A webApi Project using Swagger which handles several endpoints',
            image: 'images/WebApi.png',
            tags: ['C#','Asp.NETCore Client', 'OpenAPI','WebAPI', 'Swagger','SQLite'],
            link: 'https://amantechhacathon.azurewebsites.net/swagger',
            github: '#'
           
        },
        {
            id: 4,
            title: 'MAUI Client Application',
            description: 'A Client Application built on MAUI which extracts data from webAPI App I made i.e. Project 3',
            image: 'images/MauiClient.jpg',
            tags: ['C#','.NET MAUI','SQLite'],
            link: '#',
            github: '#'
        },
        {
            id: 5,
            title: 'Vet Library Desktop App',
            description: 'A full-stack application for managing veterinary library resources, including adding, updating and deleting records of Pets.',
            image: 'images/VetLibrary.png',
            tags: ['C#', 'SQL', 'UWP'],
            link: '#',
            github: '#'
        },
        {
            id: 6,
            title: 'Portfolio Generator',
            description: 'AI-powered tool that creates personalized portfolio websites from user input.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
            tags: ['React', 'AI/ML', 'Tailwind'],
            link: '#',
            github: '#'
        }
    ],

    // Skills
    skills: [
        { name: 'Frontend Development', level: 75 },
        { name: 'Backend Development', level: 95 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Mobile Development', level: 95 },
        { name: 'Data Analysis', level: 75 },
        { name: 'Junior Data Scientist', level: 70 },
        { name: 'Cloud Hosting (Azure)', level: 85 },

    ],

    // Services
    services: [
        {
            title: 'Web Development',
            description: 'Custom websites and web applications built with modern technologies and best practices.',
            icon: '🌐'
        },
        {
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile applications for iOS and Android devices.',
            icon: '📱'
        },
        {
            title: 'UI/UX Design',
            description: 'User-centered design solutions that combine aesthetics with functionality.',
            icon: '🎨'
        },
        {
            title: 'Consulting',
            description: 'Technical consulting and architecture planning for your digital projects.',
            icon: '💡'
        }
    ],

    // Blog Posts
    blogPosts: [
        {
            id: 1,
            title: 'Building Scalable APIs with ASP.NET Core and Azure',
            excerpt: 'Learn how to design and deploy robust APIs using ASP.NET Core on Azure cloud infrastructure...',
            date: 'Feb 10, 2026',
            readTime: '7 min read',
            link: 'https://docs.microsoft.com/en-us/aspnet/core/'
        },
        {
            id: 2,
            title: 'C# Modern Features: Records, Nullable Reference Types, and More',
            excerpt: 'Explore the latest C# language features that improve code quality and developer productivity...',
            date: 'Feb 5, 2026',
            readTime: '8 min read',
            link: 'https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/'
        },
        {
            id: 3,
            title: 'Cross-Platform Mobile Development with .NET MAUI',
            excerpt: 'Build native mobile applications for iOS and Android with a single C# codebase using .NET MAUI...',
            date: 'Jan 28, 2026',
            readTime: '6 min read',
            link: 'https://learn.microsoft.com/en-us/dotnet/maui/'
        },
        {
            id: 4,
            title: 'Getting Started with Data Analysis and Machine Learning in Python',
            excerpt: 'A comprehensive guide to data analysis, visualization, and machine learning techniques using Python...',
            date: 'Jan 20, 2026',
            readTime: '10 min read',
            link: 'https://realpython.com/learning-paths/data-science-python/'
        },
        {
            id: 5,
            title: 'Azure DevOps: CI/CD Pipelines for .NET Applications',
            excerpt: 'Implement continuous integration and continuous deployment strategies using Azure DevOps...',
            date: 'Jan 15, 2026',
            readTime: '9 min read',
            link: 'https://docs.microsoft.com/en-us/azure/devops/pipelines/'
        }
    ]
};
