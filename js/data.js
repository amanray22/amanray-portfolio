// Portfolio Data Configuration
// Update this file with your personal information

const portfolioData = {
    // Personal Information
    personalInfo: {
        name: "Aman Ray",
        title: "Aspiring Software Developer",
        description: "I build practical software solutions with a strong focus on APIs, full-stack workflows, and clean implementation.",
        email: "amanray8422@gmail.com",
        phone: "+1 (437) 322-8422",
        location: "Niagara Falls, ON, Canada | Open to Remote Opportunities",
        avatar: "👨‍💻",
        social: {
            github: "https://github.com/amanray22",
            linkedin: "https://www.linkedin.com/in/amanray01/",
            email: "mailto:amanray8422@gmail.com"
        }
    },

    // Projects
    projects: [
        {
            id: 1,
            title: 'Music Library Web and Mobile App',
            description: 'Built a centralized music management platform with ASP.NET Core and SQLite, reducing manual playlist tracking by automating catalog, search, and update workflows across web and mobile views.',
            image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=800&fit=crop',
            tags: ['C#', 'ASP.NET Core', 'MVC', 'SQL', 'SQLite', 'JavaScript', 'Bootstrap'],
            link: 'https://amanmusiccollection.azurewebsites.net',
            github: '#',
            category: 'Full-stack',
            featured: true,
            outcome: 'Reduced manual playlist update steps by about 60% by automating catalog, search, and edit workflows.',
            year: 2025
        },
        {
            id: 2,
            title: 'Patient Charting Management System',
            description: 'Implemented patient charting, scheduling, and telemedicine-ready workflows that improved record organization and made clinician updates more consistent through a unified data model.',
            image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=1200&h=800&fit=crop',
            tags: ['C#', 'ASP.NET Core', 'MVC', 'SQL', 'SQLite', 'JavaScript', 'Bootstrap'],
            link: 'https://movementcharts.azurewebsites.net',
            github: '#',
            category: 'Full-stack',
            featured: true,
            outcome: 'Improved charting consistency by about 35% and reduced appointment update delays for clinicians.',
            year: 2025
        },
        {
            id: 3,
            title: 'Tech Hackathon Web API',
            description: 'Designed and shipped a documented REST API with Swagger/OpenAPI, enabling faster frontend/client integration by standardizing request-response contracts and endpoint discoverability.',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop',
            tags: ['C#', 'ASP.NET Core', 'Web API', 'OpenAPI', 'Swagger', 'SQLite'],
            link: 'https://amantechhackathon.azurewebsites.net/swagger',
            github: 'https://github.com/amanray22/hackathon-webapi.git',
            category: 'Backend/API',
            featured: true,
            outcome: 'Cut client integration setup time by about 40% with Swagger documentation and standardized API contracts.',
            year: 2024
        },
        {
            id: 4,
            title: 'MAUI Client Application',
            description: 'Created a .NET MAUI client that consumed production-like API endpoints and presented synced records across screens, validating cross-platform mobile integration patterns.',
            image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200&h=800&fit=crop',
            tags: ['C#', '.NET MAUI', 'REST API', 'SQLite'],
            link: 'https://github.com/amanray22/hackathon-maui.git',
            github: 'https://github.com/amanray22/hackathon-maui.git',
            category: 'Mobile',
            featured: false,
            outcome: 'Validated API-first mobile architecture with shared business logic.',
            year: 2024
        },
        {
            id: 5,
            title: 'Vet Library Desktop App',
            description: 'Developed a desktop CRUD system for veterinary records that simplified pet data management and reduced record lookup friction with indexed SQL-backed storage.',
            image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&h=800&fit=crop',
            tags: ['C#', 'SQL', 'UWP'],
            link: 'https://github.com/amanray22/vet-library.git',
            github: 'https://github.com/amanray22/vet-library.git',
            category: 'Data',
            featured: false,
            outcome: 'Reduced record lookup time using structured CRUD workflows.',
            year: 2023
        },
        {
            id: 6,
            title: 'React Task Manager',
            description: 'Built a React task workflow app with create/update/delete states and lightweight persistence, improving personal task follow-through through cleaner interaction design.',
            image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop',
            tags: ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
            link: 'https://github.com/amanray22/task-manager.git',
            github: 'https://github.com/amanray22/task-manager.git',
            category: 'Full-stack',
            featured: false,
            outcome: 'Improved task completion with clearer UI state management.',
            year: 2023
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
