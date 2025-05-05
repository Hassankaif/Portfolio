export const Homedata={
    title:'Hello, I’m Hassan Kaif',
    decs1:"a tech enthusiast passionate about AI, blockchain, and web development.",
    desc2:" I love crafting innovative solutions that bridge technology with real-world needs. ",
    desc3:"Let’s innovate, inspire, and build the future together!"
}

export const Aboutdata={
    title:"ABOUT ME",
    subtitle:"who am i and what i do",
    desc: "I'm currently pusuing Bachlore of Engineering in Computer Science at Rajalakshmi institute of Technology with a passion for turning innovative ideas into impactful tech solutions. My journey in AI, machine learning, and blockchain is fueled by curiosity and a desire to create systems that solve real-world problems. I’ve developed projects ranging from automated auditing tools to blockchain-powered water conservation systems. Certified in diverse domains, including neural networks and blockchain, I strive to bridge the gap between technology and everyday life. When I’m not coding, I enjoy exploring new technologies and brainstorming creative solutions."
}

export const Domaindata=[
    {
        id:1,
        title:"Machine Learning",
        desc:"I passionate about machine learning to develop intelligent systems that make data-driven decisions. My projects range from image recognition for social media analysis to energy consumption forecasting using neural networks.",
        logo:'/mllogo.png',
        bgColor: "from-purple-50 to-purple-100"
    },
    {
        id:2,
        title:"Blockchain Development",
        desc:"Blockchain excites me for its transparency and potential to revolutionize industries. I’ve worked on projects like water management systems and decentralized apps, combining predictive analytics with secure, decentralized networks.",
        logo:'/blockchainlogo.png',
        bgColor: "from-green-50 to-green-100"

    },
    {
        id:3,
        title:"Web Development",
        desc:"With a solid foundation in HTML, CSS, JavaScript, and frameworks like React, I create dynamic web applications. My focus is on delivering seamless user experiences and robust backend architectures.",
        logo:'/weblogo.svg',
        bgColor: "from-blue-50 to-blue-100"

    }
]

export const Academicdata={
    sslc:78, hsc:91, cgpa:8.7
}

export const Projectdata=[
    {
        id:1,
        title:"Automated CIS Benchmark Auditing Tool",
        technology:['Flask', 'Ubuntu 22.4 LTS', 'Python', 'reportLab','Powershell'],
        desc:"Designed an automated tool for auditing CIS benchmarks across Windows and Linux systems, complete with a GUI for customizable PDF report generation.",
        features: [
            '🔍 Comprehensive Auditing: Automatically checks system configurations against CIS benchmarks for Ubuntu 22.04 LTS.',
            '📋 Customizable Reports: Generates detailed PDF reports tailored to user needs.',
            '💻 Web-Based Interface: User-friendly dashboard built with Flask and modern web technologies.',
            '⚡ Efficient Execution: Executes bash scripts quickly, minimizing resource usage.',
            '🔐 Enhanced Security: Identifies vulnerabilities and suggests actionable fixes.',
            '📊 Clear Results Overview: Displays PASS, FAIL, and PARTIAL statuses for every audit step.'
          ],
        githublink:"https://github.com/Hassankaif/SIH24",
        demolink:"https://youtu.be/roPAiHNzMLc",
        img:'/sih24.png'
    },
    {
        id:2,
        title:"Blockchain-Based Water Conservation Project",
        technology:['React', 'Tailwind', 'Node JS', 'MySQL','Truffle','Blockchain','Flask ML Model'],
        desc:"Developing a decentralized system to predict water usage and promote conservation in multi-storey buildings using blockchain technology.",
        features: [
            '📊 Real-Time Monitoring: Visualize water consumption data from smart meters.',
            '🔮 Prediction Model: LSTM-based model to predict future water usage.',
            '🔗 Blockchain Integration: Secure and transparent storage of consumption data.',
            '📄 Bill Generation: Automated water billing system based on usage.',
            '🏦 User Management: MySQL DataBase to store Apartment Owner details'
          ],
        githublink:"https://github.com/Hassankaif/smart-water-management-system",
        demolink:"https://youtu.be/1gcu1G0B1Mg",
        img:'/swms1.png'
    },
    
      {
        id: 3,
        title: "AI-Powered Colocasia Leaf Disease Detection & Recommendation System",
        technology: [
            "Streamlit", "TensorFlow", "EfficientNet", "ResNet", "Transformers", "PyTorch", "Pandas"
        ],
        desc: "An AI-powered web application that detects diseases in Colocasia Esculenta leaves using deep learning models and provides AI-generated remedies based on disease symptoms.",
        features: [
            "🖼️ Image-Based Detection: Classifies leaf images using ResNet50 and EfficientNetB3 models.",
            "🤖 AI-Powered Recommendations: Utilizes Google FLAN-T5 and BART-based models for disease remedy generation.",
            "📊 Dual Model Classification: Users can select between ResNet50 and EfficientNetB3 for predictions.",
            "🌿 Disease Remedy Dataset: Enhances recommendations using a curated dataset of Colocasia diseases and treatments.",
            "🔗 URL & File Upload Support: Users can upload images or provide URLs for disease detection."
        ],
        githublink:"https://github.com/Hassankaif/ColocasiaHealthAI",
        demolink:"https://youtu.be/6UIVZW_bsHM",
        img:'/Colocasia.png'
      },
      {
        id: 4,
        title: "Healthcare Management System",
        technology: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'TailwindCSS', 'Material UI'],
        desc: "A modern full-stack web application designed to streamline healthcare management for patients, doctors, and administrators with comprehensive user management and medical record features.",
        features: [
            '👤 Authentication & Authorization: Secure login/signup with role-based access for Patients, Doctors, and Admins.',
            '📅 Appointment Management: Book, approve/reject, and track appointments through an intuitive dashboard.',
            '📝 Prescription System: Doctors can create prescriptions that patients can view in their portal.',
            '📄 Medical Reports: Secure upload and access to medical reports for better healthcare tracking.',
            '🆘 Emergency Contacts: Patients can manage their emergency contact information for critical situations.',
            '🧑‍⚕️ Admin Controls: Comprehensive admin panel to manage users and approve doctor registrations.',
            '🔐 Secure Data Handling: JWT and cookie-based authentication with proper data protection.'
        ],
        githublink: "https://github.com/Sanjal28/Quibo_HealthCareApp",
        // demolink: "https://healthcare-management-demo.vercel.app",
        img: '/hms.png'
    }
    ,
    {
      id: 5,
      title: "FitnessRewards - Blockchain-Based Fitness Reward System",
      technology: ['React.js', 'Solidity', 'Ethers.js', 'MetaMask', 'Tailwind CSS', 'Material UI', 'Remix IDE'],
      desc: "A decentralized application (dApp) that incentivizes fitness by allowing users to log workouts, earn FIT tokens, and redeem them for rewards using blockchain technology for transparency and data integrity.",
      features: [
          '🔗 Wallet Integration: Seamless MetaMask connectivity for blockchain transactions.',
          '💪 Workout Logging: Track workout type and duration with blockchain verification.',
          '🪙 Token Rewards: Earn FIT tokens based on workout duration through smart contracts.',
          '📊 Workout History: View comprehensive workout logs with timestamps and tokens earned.',
          '🎁 Reward Redemption: Exchange earned tokens for fitness-related rewards.',
          '👑 Admin Controls: Manage rewards, toggle availability, and monitor system usage.',
          '🔐 Secure Smart Contracts: Built with Solidity v0.8.20 with proper ownership and security checks.'
      ],
      githublink: "https://github.com/Hassankaif/FitnessRewards",
      // demolink: "https://fitness-rewards.vercel.app",
      img: '/bfr.png'
  }
    ,
    {
        id:7,
        title:" Lottery DApp",
        technology:['React', 'Tailwind', 'Web3','Ganache','Truffle', 'Blockchain'],
        desc:"Decentralized Ethereum Lottery Application🎲 : Built with Solidity ⚙️, React⚡and Flowbite, this decentralized application allows users to participate in a lottery by contributing 1 Ether. The manager (contract deployer) selects the winner securely using blockchain data and transfers the money in ETH.",
        features: [
            '🧮 Random Winner Selection: Utilizes keccak and block.difficulty for fairness.',
            '🏦 Manage Participation: Allow users to join the lottery with 1 Ether.',
            '🛡️ Manager Privileges: Only the contract deployer can pick a winner and transfer the prize.',
            '🔐 MetaMask Integration: Connect wallets for seamless interaction.',
            '💻 Local Blockchain Deployment: Runs on Ganache for development.',
            '🖌️ Modern UI: Built with React, Vite, and Flowbite.'
          ],
        githublink:"https://github.com/Hassankaif/Lottery_Dapp",
        demolink:"https://youtu.be/YnXSqPTI8Y0?si=wgQX9K6elheVF1Y7",
        img:'/lottery-dapp.png'
    },
  
    {
        id:6,
        title:"Decentralized Marketplace DApp",
        technology:['React', 'Tailwind', 'Web3','IPFS Storage','Solidity','Truffle', 'Blockchain'],
        desc:"A decentralized application (DApp) that allows users to create, buy, and transfer digital assets securely using Ethereum blockchain and IPFS. The project focuses on transparency, security, and ease of use, leveraging the latest Web3 technologies.",
        features: [
        '🔗 List Items for Sale: Easily upload and list your digital assets.',
        '💰 Buy Items: Purchase listed items using Ether.',
        '✉️ Transfer Ownership: Transfer purchased items securely to others.',
        '🌐 IPFS Integration: Decentralized storage using IPFS via Pinata.',
        '🔄 Real-Time Feedback: Responsive UI with loading indicators for blockchain transactions.',
        '🔐 Blockchain Security: Immutable and secure smart contract transactions.'
        ],
        githublink:"https://github.com/Hassankaif/MarketPlace-Dapp",
        // demolink:"https://youtu.be/bVYzo0DXzEE",
        img:'/marketplace.png'
    },

    {
        id:8,
        title:"Event Management System",
        technology:['React', 'CSS3', 'Web Development'],
        desc:"A react application to manage,display and search events like workshop, hackathon and other competitions based on month and year of the Event.",
        features: [
        '⚡ Dynamic Event Creation: Create and manage events with ease.',
        '⏱️ Real-Time Updates: Track event changes and notifications.',
        '📱 Responsive Design: Optimized for desktop and mobile use.'
        ],
        githublink:"https://github.com/Hassankaif/Event-Management-System",
        demolink:"https://youtu.be/bVYzo0DXzEE",
        img:'/ems2.png'
    }
]

    // {
    //     id:9,
    //     title:"Fake Instagram Profile Classification",
    //     desc:"Built a Flask-deployed machine learning model to classify Instagram profiles as real or fake, leveraging advanced image recognition techniques.",
    //     githublink:"https://github.com/Hassankaif/fake-Instagram-profile-detection",
    //     demolink:"https://youtu.be/c4WKmEPYE8k",
    //     img:'/fakespotter2.png'
    // },
    // {
    //     id:10,
    //     title:"Rock-Paper-Scissors Game",
    //     desc:"Created an interactive game using HTML, CSS, and JavaScript, demonstrating a strong understanding of web development principles.",
    //     githublink:"https://github.com/Hassankaif/Simple-Rock-Paper-Scissors-game-P2",
    //     demolink:"https://youtu.be/nRmTeEfKYUY",
    //     img:'/rpslogo.png'
    // },

   export const courses = [
        {
          title: "Machine Learning With Python",
          platform: "IBM Skill Build",
          completion: "2023",
          certificate: true,
          Link:'https://drive.google.com/file/d/15j5UBLIBUe2CSj842JLbhjyeu7Z6pk3y/view?usp=sharing',
        },
        {
          title: "Machine Learning",
          platform: "Cognitive Class AI",
          completion: "2023",
          certificate: true,
          Link:'https://drive.google.com/file/d/1OFIDldzrBYWHIzkoXhPgKvUm5J7d28y-/view?usp=drive_link',
        },
        // {
        //     title: "Deep Learning",
        //     platform: "SimpliLearn",
        //     completion: "2024",
        //     certificate: true,
        //   },
          {
            title: "Introduction to AI",
            platform: "Great Learning",
            completion: "2023",
            certificate: true,
            Link:'https://drive.google.com/file/d/18hMHt6_rwFB81t5l_hArLxnYoimEDnwR/view?usp=drive_link',
          },
          {
            title: "Mastering MS Excel : Beginner to Advance",
            platform: "Udemy",
            completion: "2025",
            certificate: true,
            Link:'https://drive.google.com/file/d/10vuBqiJ0iy8rHAjqLf1xnGkTTvYW4JtL/view?usp=drive_link',
          },
          
          {
            title: "Image Classification and Processing",
            platform: "SimpliLearn",
            completion: "2024",
            certificate: true,
            Link:'https://drive.google.com/file/d/1p22_oHUZYbR4nwjvVS2bs1zhb-zutnbA/view?usp=drive_link',
          },
        {
          title: "Ethereum Fundamentals",
          platform: "Kerala Blockchain Academy",
          completion: "2024",
          certificate: true,
          Link:'https://drive.google.com/file/d/1B0kWdNTUQSzBm7oM0XJycN4CL5r_AnY9/view?usp=sharing',
        },
        {
            title: "Blockchain Foundation Program",
            platform: "Kerala Blockchain Academy",
            completion: "2023",
            certificate: true,
            Link:'https://drive.google.com/file/d/1VbJY0UYXvRUM7dB2fkreji6GcX4HgBFL/view?usp=drive_link',
          },
        {
          title: "Data Structures in Python",
          platform: "Sololearn",
          completion: "2022",
          certificate: true,
          Link:'https://drive.google.com/file/d/1iYnqaaQmAfIUtiZ3aVkpo8_tklp88cGm/view?usp=sharing'
        },
        {
            title: "Python for Data Science",
            platform: "Cognitive Class AI",
            completion: "2022",
            certificate: true,
            Link:'https://drive.google.com/file/d/1QHe8YEDi-L4lt96LYcSNSpxvn9g7MF70/view?usp=drive_link',
          }
      ];

      const internships = [
        {
          company: "Quibo Technologies",
          duration: "2 Months",
          role: "MERN Stack Developer",
          image:'/quiboo.png',
          start: "March 2025",
          end: "May 2025",
          certificate: "/quibo.png",
          skills: ["React", "Node.js", "MongoDB", "Express"],
        },
        {
          company: "Prompt Infotech",
          duration: "One Week",
          role: "Data Science Intern",
          image:'/promptlogo.jpg',
          start: "August 2023",
          end: "August 2023",
          certificate: "/prompt.png",
          skills: ["Python", "Data Analysis", "Machine Learning"],
        },
      ]
      
      export default internships
      