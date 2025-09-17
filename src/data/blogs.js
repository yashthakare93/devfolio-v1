// src/data/blogs.js

// Import all images from the assets folder that you want to use in your content
import placeholderImage1 from '../assets/images/articles/JVM-Arcitecture.drawio.png';
import classLoaderSubsystemImg from '../assets/images/articles/class loading subsystem.drawio.png';
import runTimeDataAreaImg from '../assets/images/articles/Runtime Data Area.drawio.png';
import executionEngineImg from '../assets/images/articles/EE.drawio.png';
import article1 from '../assets/images/articles/article1.pdf';



export const featuredBlogs = [
    {
        slug: 'deep-dive-into-jvm-architecture',
        title: 'A Deep Dive into the JVM',
        pdfUrl: article1,
        description: 'Explore the core of Java by understanding the JVM architecture. Learn about ClassLoader, Runtime Data Area, Execution Engine, and how they work together to run Java applications efficiently.',
        image: placeholderImage1,
        date: 'September 14, 2025',
        author: 'Yash Thakare',
        tags: [
            'JVM Architecture',
            'Core Java',
            'Garbage Collection',
            'JIT Compiler',
            'Java',
            'JVM',
            'Java Memory Management',
            'Backend Development',
            'Performance Tuning',
            'Bytecode'
        ], 

        content: [
            { type: 'h2', children: 'What is the JVM?' },
            { type: 'p', children: 'The JVM (Java Virtual Machine) is an engine that provides a runtime environment to launch Java applications. It is responsible for converting the compiled bytecode (.class file) into machine code that your computer can execute. The JVM is a crucial part of the Java Runtime Environment (JRE).' },

            { type: 'h2', children: 'JVM Architecture' },
            { type: 'image', src: placeholderImage1, alt: 'Diagram of the JVM Architecture', className: 'my-4 bg-white px-10 py-5' },
            { type: 'p', children: 'The JVM is divided into three main subsystems that work together to run a Java application:' },
            { type: 'ul', children: ['ClassLoader Subsystem', 'Runtime Data Area (Memory Area)', 'Execution Engine'] },
            { type: 'hr' },

            { type: 'h2', children: '1. ClassLoader Subsystem' },
            { type: 'p', children: "The ClassLoader is part of the JRE and is responsible for dynamically loading class files into the JVM's memory when they are required. This process has three main phases: Loading, Linking, and Initialization." },
            { type: 'image', src: classLoaderSubsystemImg, alt: 'Diagram of the Class Loading Subsystem', className: 'bg-white pl-2 py-2' },

            { type: 'h3', children: 'Loading' },
            { type: 'p', children: "In this phase, the ClassLoader reads a .class file, generates the corresponding binary data, and saves it in the Method Area of the JVM's memory. There are three types of class loaders:" },
            { type: 'ul', children: ['Bootstrap Class Loader: Loads core Java classes (e.g., java.lang, java.util) from rt.jar.', 'Extension Class Loader: Loads classes from the JRE\'s extension directory.', 'Application Class Loader: Loads classes from the application\'s classpath.'] },

            { type: 'h3', children: 'Linking' },
            { type: 'p', children: 'After a class is loaded, the linking phase prepares it for execution. It mainly has three phases:' },

            // FIXED: Converted the raw text for "Linking" into structured objects
            { type: 'h4', children: 'Verification' },
            { type: 'p', children: 'Ensures bytecode is valid and doesn’t break JVM rules. Prevents illegal memory access or malicious bytecode.' },

            { type: 'h4', children: 'Preparation' },
            { type: 'p', children: 'Allocates memory for static fields of the class and assigns default values (Int → 0, Boolean → false, Object references → null).' },
            { type: 'pre', children: 'class Test {\n    static int x = 10;\n    static boolean flag = true;\n}\n\n// During preparation:\nx = 0\nflag = false' },

            { type: 'h4', children: 'Resolution' },
            { type: 'p', children: 'Converts symbolic references (like "java/lang/String") into direct references (actual memory addresses of classes/methods/fields). This ensures that when you call a method, the JVM knows exactly where it lives in memory.' },
            { type: 'pre', children: '// Resolution Map:\n"java/lang/String" → Class String (Method Area)\n"java/io/PrintStream" → Class PrintStream' },

            { type: 'h3', children: 'Initialization' },
            { type: 'p', children: 'This is the final phase of Class Loading, where all static variables are assigned their original values, and the static block is executed.' },
            { type: 'pre', children: 'x = 10, flag = true.\nStatic block runs → changes x = 20.' },
            { type: 'hr' },

            { type: 'h2', children: '2. Runtime Data Area' },
            { type: 'p', children: 'The Runtime Data Area is the memory structure created by the JVM when it runs a program. It contains different memory blocks that store class info, objects, methods, variables, and threads.' },
            { type: 'image', src: runTimeDataAreaImg, alt: 'Diagram of the Runtime Data Area', className: 'my-4 bg-white' },

            // FIXED: Converted the raw text for "Runtime Data Area" into structured objects
            { type: 'h4', children: 'Method Area' },
            { type: 'p', children: 'Stores class metadata (info about class, interfaces, methods, fields). Stores static variables and final constants. Example: If you declare static int x = 10;, it goes here.' },

            { type: 'h4', children: 'Heap Area' },
            { type: 'p', children: 'Stores all objects and their instance variables. Shared by all threads. Example: new Student(); → object created in heap.' },

            { type: 'h4', children: 'JVM Stack (Per Thread)' },
            { type: 'p', children: 'Each JVM thread has its own JVM stack. It stores frames, holds local variables, partial results, and references to heap objects. Example: In method int sum(int a, int b), a and b are stored here.' },

            { type: 'h4', children: 'Program Counter (PC) Register (Per Thread)' },
            { type: 'p', children: 'Each thread has a PC register. Stores the address of the current instruction being executed. Helps JVM know "what to execute next".' },

            { type: 'h4', children: 'Native Method Stack' },
            { type: 'p', children: 'Stores native method calls (written in languages like C/C++). Example: If your Java program uses a library written in C, its call goes here.' },
            { type: 'hr' },

            { type: 'h2', children: '3. Execution Engine' },
            { type: 'p', children: 'The Execution Engine (EE) is the heart of JVM. After the Class Loader loads classes and the Runtime Data Area allocates memory, the Execution Engine executes the bytecode instructions. It is responsible for running the program line by line.' },
            { type: 'image', src: executionEngineImg, alt: 'Diagram of the Execution Engine', className: 'my-4 bg-white px-5 py-5' },

            // FIXED: Converted the raw text for "Execution Engine" into structured objects
            { type: 'h4', children: 'Interpreter' },
            { type: 'p', children: 'Reads bytecode instructions one by one and executes them. Simple, but slower because it interprets repeatedly.' },

            { type: 'h4', children: 'JIT (Just-In-Time) Compiler' },
            { type: 'p', children: 'To improve speed, the JVM uses a JIT compiler. It compiles frequently used bytecode to native code so re-interpretation is not required, thus improving efficiency.' },

            { type: 'h4', children: 'Garbage Collector (GC)' },
            { type: 'p', children: 'Manages memory automatically. Frees memory of objects that are no longer referenced. Example: If an object is not used anywhere, the GC removes it.' },

            { type: 'h4', children: 'Native Method Interface (JNI)' },
            { type: 'p', children: 'Allows Java code to call functions written in other languages like C or C++. Example: A Java program using a C library for faster image processing.' },

            { type: 'h4', children: 'Native Method Libraries' },
            { type: 'p', children: 'A collection of the Native Libraries (C, C++) which are required by the Execution Engine.' },
            { type: 'hr' },

            { type: 'h2', children: 'Conclusion' },
            { type: 'p', children: 'From loading bytecode with the ClassLoader to managing memory in the Runtime Data Area and finally executing code with the Execution Engine, every part of the JVM architecture works together to make Java\'s "write once, run anywhere" philosophy a reality.' },
        ],
    },
    // {
    //     slug: 'introduction-to-sql',
    //     title: 'Introduction to SQL',
    //     pdfUrl:null ,
    //     description: 'Learn the fundamentals of SQL, its types, where it is used, and why it is essential for data management in applications and businesses.',
    //     image:null ,
    //     date: 'September 17, 2025',
    //     author: 'Yash Thakare',
    //     tags: [
    //         'SQL',
    //         'Databases',
    //         'Data Management',
    //         'Backend Development',
    //         'Data Analysis',
    //         'Relational Databases',
    //         'Query Language'
    //     ],

    //     content: [
    //         { type: 'h2', children: 'What is SQL?' },
    //         { type: 'p', children: 'SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases. It allows developers and analysts to create, read, update, and delete data stored in tables.' },

    //         { type: 'h2', children: 'Why SQL is Important?' },
    //         { type: 'p', children: 'SQL is crucial for managing structured data in relational databases. It is widely used in applications, analytics, data processing, and business operations. SQL provides a reliable and efficient way to query and modify data.' },

    //         { type: 'h2', children: 'Types of SQL Commands' },
    //         // { type: 'image', src: sqlTypesImg, alt: 'SQL Command Types', className: 'my-4 bg-white px-5 py-5' },
    //         { type: 'ul', children: [
    //             'DDL (Data Definition Language): CREATE, ALTER, DROP – used to define or modify database structures.',
    //             'DML (Data Manipulation Language): INSERT, UPDATE, DELETE – used to manipulate data within tables.',
    //             'DCL (Data Control Language): GRANT, REVOKE – used to manage permissions and access controls.',
    //             'TCL (Transaction Control Language): COMMIT, ROLLBACK – used to manage transactions in a database.'
    //         ]},

    //         { type: 'h2', children: 'Where SQL is Used?' },
    //         // { type: 'image', src: sqlUsageImg, alt: 'SQL Usage', className: 'my-4 bg-white px-5 py-5' },
    //         { type: 'p', children: 'SQL is used wherever structured data needs to be stored, accessed, or analyzed. Common use cases include:' },
    //         { type: 'ul', children: [
    //             'Web applications and websites for storing user data, products, orders, etc.',
    //             'Mobile apps for user preferences, authentication, and data storage.',
    //             'Data analysis and business intelligence for generating reports and insights.',
    //             'Enterprise software such as HR systems, accounting software, and inventory management.',
    //             'Cloud-based databases like AWS RDS, Google Cloud SQL, and Azure SQL Database.',
    //             'Academic and research databases for experiments, surveys, and project data.'
    //         ]},

    //         { type: 'h2', children: 'Career Opportunities with SQL' },
    //         { type: 'p', children: 'SQL is a foundational skill for many tech roles. Careers where SQL is essential include:' },
    //         { type: 'ul', children: [
    //             'Backend Developer',
    //             'Data Analyst / Data Scientist',
    //             'Database Administrator (DBA)',
    //             'Full Stack Developer',
    //             'Business Intelligence Specialist'
    //         ]},

    //         { type: 'h2', children: 'Conclusion' },
    //         { type: 'p', children: 'SQL remains one of the most important skills for anyone working with data. Understanding SQL and its applications allows you to efficiently manage databases, extract insights, and build robust software solutions.' },
    //     ],
    // }
];