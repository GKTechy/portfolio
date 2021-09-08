// config.js
module.exports = {
    github: {
        username: 'GKTechy', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'gokulakrishnan-m-356567199',
        twitter: '',
        facebook: 'glaps.gokul',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: '',
        email: 'glapskrish@gmail.com'
    },
    skills: [
        'JAVA',
        'Spring Boot',
        'JavaScript',
        'React.js',
        'Angular',
        'Node.js',
        'Jquery',
        'MySQL',
        'Postgres',
        'Git',
        'CSS',
        'Bootstrap',
    ],
    experiences: [
        { 
            company: 'Mindspace consulting consortium',
            position: 'Senior Software Engineer',
            from: 'September 2015',
            to: 'Present'
        },
        { 
            company: 'Job Connect',
            position: 'Software Development Trainee',
            from: 'May 2014',
            to: 'August 2015'
        }
    ],
    education: [
        { 
            institution: 'Kongu Engineering College',
            degree: 'MCA',
            from: '2011',
            to: '2014'
        },
        { 
            institution: 'AET Arts and Science College',
            degree: 'BCA',
            from: '2008',
            to: '2011',
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'arifszn',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id
        id: '' // UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
           
        ]
    }
}